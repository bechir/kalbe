import { useContext } from "react";
import { AuthContext, AuthContextType } from "../contexts/AuthContext";
import { UserContext, UserContextType } from "contexts/UserContext";

export function useAuth() {
  const context: AuthContextType = useContext<any>(AuthContext);

  if (!context) {
    throw new Error("You forgot the auth provider");
  }

  return context;
}

export function useUser() {
  const context: UserContextType = useContext<any>(UserContext);

  if (!context) {
    throw new Error("You forgot the user provider");
  }

  return context;
}
