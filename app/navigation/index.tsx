import * as React from "react";
import { ActivityIndicator } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ThemeProvider } from "@shopify/restyle";
import messaging, {
  FirebaseMessagingTypes,
} from "@react-native-firebase/messaging";

import { darkTheme, theme, useColorScheme } from "@components";
import { useAuth, useUser, useUserDetails } from "hooks";
import { RootStackParamList } from "Routes";
import { MainTabNavigator } from "./navigators/MainTabNavigator";
import { AuthStackNavigator } from "./navigators/AuthStackNavigator";
import { SecurityStackNavigator } from "./navigators/SecurityStackNavigator";
import InternalError from "screens/InternalError";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation() {
  const { colorScheme } = useColorScheme();
  const { state, restoreToken } = useAuth();
  const { saveNotificationToken, userDetails } = useUser();
  const { isLoading, user, error } = useUserDetails();
  const [showNotificationModal, setShowNotificationModal] =
    React.useState(false);
  const [notificationMessage, setNotificationMessage] =
    React.useState<FirebaseMessagingTypes.RemoteMessage>();

    React.useEffect(() => {
      requestUserPermission().then(() => {
        messaging().getToken().then(saveNotificationToken);
      });
  
      messaging().onTokenRefresh(saveNotificationToken);
  
      messaging().onNotificationOpenedApp(handleRemoteMessage);
  
      messaging().getInitialNotification().then(handleRemoteMessage);
  
      messaging().onMessage(handleRemoteMessage);
    }, []);

  React.useEffect(() => {
    if (!state.token) {
      restoreToken();
    }
  }, [state.token]);

  const getScreen = () => {
    if (!state.token) {
      return <Stack.Screen name="Auth" component={AuthStackNavigator} />;
    }

    if (user?.phoneVerified) {
      return <Stack.Screen name="Main" component={MainTabNavigator} />;
    }

    if (error?.length) {
      return <Stack.Screen name="InternalError" component={InternalError} />;
    }

    return <Stack.Screen name="Security" component={SecurityStackNavigator} />;
  };

  const handleRemoteMessage = (
    remoteMessage?: FirebaseMessagingTypes.RemoteMessage | null
  ) => {
    if (remoteMessage?.notification) {
      console.log(
        "Notification caused app to open from background state:",
        remoteMessage.notification
      );
      setShowNotificationModal(true);
      setNotificationMessage(remoteMessage);
    }
  };

  if (isLoading || state.isLoading) {
    return <ActivityIndicator style={{ flex: 1 }} />;
  }

  return (
    <ThemeProvider theme={colorScheme === "dark" ? darkTheme : theme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {getScreen()}
      </Stack.Navigator>
    </ThemeProvider>
  );
}

async function requestUserPermission() {
  try {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      subscribeToAllTopic();
    }
  } catch (e) {
    console.warn(e);
  }
}

async function subscribeToAllTopic() {
  messaging()
    .subscribeToTopic("all")
    .then(() => console.log("subscribed to all topic"))
    .catch(() => {});
}
