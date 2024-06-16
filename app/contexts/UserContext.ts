import { Dispatch } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { USER_DETAILS_ID, USER_TOKEN } from "constants/app";
import createDataContext from "./createDataContext";
import { userService } from "../services";
import { User } from "models";

interface UserState {
  user?: User;
  isLoading: boolean;
  errorMessage: string;
}

interface UserAction {
  type: "UPDATE_USER" | "ADD_ERROR" | "LOADING" | "LOADED";
  payload?: any;
}

export type UserContextType = {
  userDetails: () => Promise<void>;

  confirmPhoneNumber: () => Promise<void>;
  createPasscode: (passcode: string) => Promise<void>;
  deleteAccount: () => Promise<void>;
  updateUser: (data: User) => Promise<void>;

  state: UserState;
};
 
const userReducer = (state: UserState, action: UserAction): UserState => {
  switch (action.type) {
    case "UPDATE_USER":
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        errorMessage: "",
      };

    case "ADD_ERROR":
      return { ...state, errorMessage: action.payload, isLoading: false };

    case "LOADING":
      return { ...state, isLoading: true, errorMessage: "" };

    case "LOADED":
      return { ...state, isLoading: false, errorMessage: "" };

    default:
      return state;
  }
};

const userDetails = (dispatch: Dispatch<UserAction>) => async () => {
  return new Promise<any>((resolve, reject) => {
    dispatch({ type: "LOADING" });
        userService
          .details()
          .then((user) => {
            AsyncStorage.setItem(USER_DETAILS_ID, JSON.stringify(user)).catch(
              () => {
                // TODO log error with Crashlytics
              }
            );
            dispatch({ type: "UPDATE_USER", payload: user });
            resolve(true);
          })
          .catch((err) => {;
            // TODO log error with Crashlytics
            reject(err);
            dispatch({ type: "LOADED" });
          });
  });
};

const updateUser = (dispatch: Dispatch<UserAction>) => async (user: User) => {
  dispatch({ type: "UPDATE_USER", payload: user })
  return AsyncStorage.setItem(USER_DETAILS_ID, JSON.stringify(user))
}

const confirmPhoneNumber =
  (dispatch: Dispatch<UserAction>) => async () => {
    dispatch({ type: "LOADING" });
    return new Promise<void>((resolve, reject) => {
      userService
      .confirmPhone()
      .then((data) => {
        AsyncStorage.setItem(
          USER_DETAILS_ID,
          JSON.stringify(data)
        );
        dispatch({ type: "UPDATE_USER", payload: data });
        resolve();
      })
      .catch((err: any) => {
        // TODO log error with Crashlytics
        dispatch({ type: "ADD_ERROR", payload: err.message });
        reject(err.message);
      });
    });
  };

  const createPasscode =
  (dispatch: Dispatch<UserAction>) => async (passcode: string) => {
    dispatch({ type: "LOADING" });
    return new Promise<void>((resolve, reject) => {
      userService
      .createPasscode(passcode)
      .then((data) => {
        AsyncStorage.setItem(
          USER_DETAILS_ID,
          JSON.stringify(data)
        );
        dispatch({ type: "UPDATE_USER", payload: data });
        resolve();
      })
      .catch((err: any) => {
        // TODO log error with Crashlytics
        dispatch({ type: "ADD_ERROR", payload: err.message });
        reject(err.message);
      });
    });
  };

const deleteAccount = (dispatch: Dispatch<UserAction>) => async () => {
  dispatch({ type: "LOADING" });
  AsyncStorage.getItem(USER_TOKEN)
    .then((token) => {
      if (token) {
        userService
          .deleteAccount(token)
          .then((data) => {
            if (200 == data.status) {
              dispatch({ type: "LOADED" });
            } else {
              dispatch({ type: "ADD_ERROR", payload: data.message });
            }
          })
          .catch((err: any) => {
            dispatch({ type: "ADD_ERROR", payload: err.message });
          })
          .finally(() => dispatch({ type: "LOADED" }));
      }
    })
    .catch(() => {});
};

const DEFAULT_STATE = {
  user: null,
  isLoading: false,
  errorMessage: "",
};

export const { Provider: UserProvider, Context: UserContext } =
  createDataContext(
    userReducer,
    {
      userDetails,
      confirmPhoneNumber,
      createPasscode,
      deleteAccount,
      updateUser,
    },
    DEFAULT_STATE
  );
