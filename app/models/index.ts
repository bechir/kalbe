export type NamedId = {
  id: string;
  name: string;
};

export type User = {
  id: string;
  token: string;
  phone: string;
  fullname: string;
  phoneVerified: boolean;
  isVerified: boolean;
  hasPasscode: boolean;
};

export type RegisterDTO = Pick<User, "phone">;

export type Credentials = {
  phone: string;
  passcode: string;
};

export type FirebaseAuthResult = {

}
