import React, { Dispatch } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import createDataContext from "./createDataContext";
import { USER_DETAILS_ID, USER_TOKEN } from "constants/app";
import { userService } from "../services";
import { Credentials, RegisterDTO } from "models";

interface AuthState {
  token: string | null;
  errorMessage: string;
  isLoading: boolean;
  isAuthenticating: boolean;
}

interface AuthAction {
  type:
  | "ACTION_CLEAR_ERROR_MESSAGE"
  | "ACTION_AUTH_START"
  | "ACTION_AUTH_ERROR"
  | "ACTION_SIGNIN"
  | "ACTION_SIGNUP"
  | "ACTION_SIGNOUT"
  | "ACTION_ADD_ERROR"
  | "ACTION_LOADING";
  payload?: any;
}

export type AuthContextType = {
  restoreToken: () => Promise<void>;

  clearErrorMessage: () => Promise<void>;

  signup: (user: RegisterDTO) => Promise<string>;

  signin: (data: Credentials) => Promise<string>;

  signout: () => Promise<void>;

  state: AuthState;
};

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "ACTION_AUTH_START":
      return {
        ...state,
        errorMessage: "",
        isLoading: false,
        isAuthenticating: true,
      };

    case "ACTION_SIGNIN":
    case "ACTION_SIGNUP":
      return {
        ...state,
        errorMessage: "",
        isLoading: false,
        isAuthenticating: false,
        token: action.payload,
      };

    case "ACTION_AUTH_ERROR":
      return {
        ...state,
        errorMessage: action.payload,
        isAuthenticating: false,
      };

    case "ACTION_SIGNOUT":
      return { ...state, errorMessage: "", token: null, isLoading: false };

    case "ACTION_ADD_ERROR":
      return { ...state, errorMessage: action.payload };

    case "ACTION_CLEAR_ERROR_MESSAGE":
      return { ...state, errorMessage: "", isAuthenticating: false, isLoading: false };

    case "ACTION_LOADING":
      return { ...state, isLoading: true };

    default:
      return state;
  }
};

const restoreToken = (dispatch: Dispatch<AuthAction>) => async () => {
  AsyncStorage.getItem(USER_TOKEN)
    .then((res) => {
      if (res) {
        dispatch({ type: "ACTION_SIGNIN", payload: res });
      } else {
        dispatch({ type: "ACTION_SIGNOUT" });
      }
    })
    .catch(() => {
      dispatch({ type: "ACTION_SIGNOUT" });
    });
};

const clearErrorMessage = (dispatch: Dispatch<AuthAction>) => async () => {
  dispatch({ type: "ACTION_CLEAR_ERROR_MESSAGE" });
};

const signup = (dispatch: Dispatch<AuthAction>) => async (user: RegisterDTO) => {
  return new Promise((resolve, reject) => {
    dispatch({ type: "ACTION_AUTH_START" });
    userService
      .signup(user)
      .then((resp: any) => {
        if (200 == resp.status) {
          // TODO log event to google firebase
          const token = resp.token;
          AsyncStorage.setItem(USER_TOKEN, token).then(() => {
            dispatch({ type: "ACTION_SIGNUP", payload: token });
          });
          resolve(resp.phone);
        } else {
          // TODO log event to google firebase
          let message = resp.message;
          if (typeof message == "object") {
            message = Object.values(message).join("\n");
          }
          dispatch({ type: "ACTION_AUTH_ERROR", payload: message });
          reject(message);
        }
      })
      .catch((err: any) => {
        // TODO log event to google firebase
        dispatch({ type: "ACTION_AUTH_ERROR", payload: err.message });
        reject(err.message);
      });
  });
};

const signin =
  (dispatch: Dispatch<AuthAction>) => async (data: Credentials) => {
    return new Promise((resolve, reject) => {
      dispatch({ type: "ACTION_AUTH_START" });
      userService
        .signin(data)
        .then((resp: any) => {
          const token = resp?.token;
          if (token) {
            AsyncStorage.setItem(USER_TOKEN, token).then(() => {
              // TODO log event to google firebase
              dispatch({ type: "ACTION_SIGNIN", payload: token });
              resolve(token);
            });
          } else {
            // TODO log event to google firebase
            dispatch({ type: "ACTION_AUTH_ERROR", payload: resp.message });
            reject(resp.message);
          }
        })
        .catch((err: any) => {
          // TODO log event to google firebase
          let message = "";

          if (err.message == "Request failed with status code 401") {
            message = "bad_credentials";
          } else {
            message = err.message;
          }

          dispatch({ type: "ACTION_AUTH_ERROR", payload: message });
          reject(err.message);
        });
    });
  };

const signout = (dispatch: Dispatch<AuthAction>) => {
  return async () => {
    // TODO log event
    dispatch({ type: "ACTION_LOADING" });
    await AsyncStorage.removeItem(USER_TOKEN);
    await AsyncStorage.removeItem(USER_DETAILS_ID);
    dispatch({ type: "ACTION_SIGNOUT" });
  };
};

const DEFAULT_STATE = {
  token: null,
  errorMessage: "",
  isLoading: false,
  isAuthenticating: false,
};

export const { Provider: AuthProvider, Context: AuthContext } =
  createDataContext(
    authReducer,
    { signup, signin, signout, clearErrorMessage, restoreToken },
    DEFAULT_STATE
  )
  ;
