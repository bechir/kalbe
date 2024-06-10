import * as React from "react";
import { ActivityIndicator } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ThemeProvider } from "@shopify/restyle";

import { darkTheme, theme, useColorScheme } from "@components";
import { useAuth, useUserDetails } from "hooks";
import { RootStackParamList } from "Routes";
import { MainTabNavigator } from "./navigators/MainTabNavigator";
import { AuthStackNavigator } from "./navigators/AuthStackNavigator";
import { SecurityStackNavigator } from "./navigators/SecurityStackNavigator";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation() {
  const { colorScheme } = useColorScheme();
  const { state, restoreToken } = useAuth();
  const { isLoading, user } = useUserDetails();  

  React.useEffect(() => {
    if (!state.token) {
      restoreToken();
    }
  }, [state.token]);

  const getScreen = () => {
    if(!state.token) {
      return <Stack.Screen name="Auth" component={AuthStackNavigator} />;
    }

    if(user?.phoneVerified) {
      return <Stack.Screen name="Main" component={MainTabNavigator} />;
    }

    return <Stack.Screen name="Security" component={SecurityStackNavigator} />;
  }

  if (isLoading || state.isLoading) {
    return <ActivityIndicator style={{ flex: 1, marginTop: 100 }} />;
  }

  return (
    <ThemeProvider theme={colorScheme === "dark" ? darkTheme : theme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {getScreen()}
      </Stack.Navigator>
    </ThemeProvider>
  );
}