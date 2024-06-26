import { Platform } from "react-native";
import axios, { bearerAuthHeader } from "./api";
import { Credentials, RegisterDTO, User, UserBasicInfosFormDTO } from "models";

export function signup(user: RegisterDTO) {
  return axios
    .post("/register", { ...user, platform: Platform.OS }, { cache: false })
    .then((res) => res.data);
}

export function signin(data: Credentials) {
  return axios
    .post("/login", data, {
      cache: false,
    })
    .then((res) => res.data);
}

export function confirmPhone(): Promise<User | null> {
  return axios
    .post("/account/confirm-phone", {
      cache: false,
    })
    .then((res) => res.data);
}

export function createPasscode(passcode: string): Promise<User | null> {
  return axios
    .post("/account/create-passcode", { passcode })
    .then((res) => res.data);
}

export function edit(data: UserBasicInfosFormDTO): Promise<User | null> {
  return axios
    .post("/account/edit", { ...data })
    .then((res) => res.data);
}

export function kycVerification(data: FormData): Promise<User> {
  return axios
    .post("/account/kyc-verification", data, {
      headers: {
        "Content-Type": "multipart/form-data;"
      }
    })
    .then((res) => res.data);
}

export function saveNotificationToken(notificationToken: string) {
  return axios.post('/account/notification/save-token', {notificationToken})
  .then(res => res.data)
}

export function details(): Promise<User | null> {
  return axios
    .get("/account", { cache: false })
    .then((res) => res.data);
}

export function deleteAccount(token: string): Promise<any> {
  return axios
    .delete("/account", {
      ...bearerAuthHeader(token),
      cache: false,
    })
    .then((res) => res.data);
}
