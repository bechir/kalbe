import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AuthStackParamList } from "Routes";
import { Login, Register, Welcome } from "screens/auth";

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

export function AuthStackNavigator() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Welcome" component={Welcome} />
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Register" component={Register} />
    </AuthStack.Navigator>
  );
}
