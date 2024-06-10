import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SecurityStackParamList } from "Routes";
import { ConfirmPhone, CreatePasscode } from "screens/security";

const SecurityStack = createNativeStackNavigator<SecurityStackParamList>();

export function SecurityStackNavigator() {
  return (
    <SecurityStack.Navigator screenOptions={{ headerShown: false }}>
      <SecurityStack.Screen name="ConfirmPhone" component={ConfirmPhone} />
      <SecurityStack.Screen name="CreatePasscode" component={CreatePasscode} />
    </SecurityStack.Navigator>
  );
}
