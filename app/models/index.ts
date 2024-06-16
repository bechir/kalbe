export type NamedId = {
  id: string;
  name: string;
};

export type UserBasicInfosFormDTO = {
  title?: "man" | "miss" | "madam";
  firstName: string;
  lastName: string;
  address: string;
  city: string;
}

export type VerificationStatus = "none" | "pending" | "rejected" | "verified";

export type User = UserBasicInfosFormDTO & {
  id: string;
  token: string;
  phone: string;
  fullname: string;
  phoneVerified: boolean;
  isVerified: boolean;
  hasPasscode: boolean;
  status: VerificationStatus;
};

export type RegisterDTO = Pick<User, "phone">;

export type Credentials = {
  phone: string;
  passcode: string;
};

export type FirebaseAuthResult = {

}
