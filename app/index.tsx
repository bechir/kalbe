import "./extensions";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

import * as SplashScreen from "expo-splash-screen";
import { enableScreens } from "react-native-screens";
import { useLoadAssets } from "hooks";
import { useCallback, useEffect } from "react";

import { ColorSchemeProvider } from "@components";
import Navigation from "navigation";
import "./i18n";
import { ASSETS } from "constants/app";
import { AuthProvider } from "contexts/AuthContext";
import { UserProvider } from "contexts/UserContext";
import { LogBox } from "react-native";

enableScreens();

LogBox.ignoreLogs([
  '[Reanimated] Reduced motion setting is enabled on this device.',
]);

const fonts = {
  SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  LeagueSpartan: require("../assets/fonts/LeagueSpartan-Regular.ttf"),
  LeagueSpartanBold: require("../assets/fonts/LeagueSpartan-Bold.ttf"),
  LeagueSpartanMedium: require("../assets/fonts/LeagueSpartan-Medium.ttf"),

  SFProDisplayBold: require("../assets/fonts/SF-Pro-Display-Bold.otf"),
  SFProDisplaySemiBold: require("../assets/fonts/SF-Pro-Text-Semibold.otf"),
  SFProTextRegular: require("../assets/fonts/SF-Pro-Text-Regular.otf"),

  // Avenir Next
  AvenirNextRegular: require("../assets/fonts/AvenirNextCyr-Regular.ttf"),
  AvenirNextDemi: require("../assets/fonts/AvenirNextCyr-Demi.ttf"),

  // ZTGatha
  ZTGathaRegular: require("../assets/fonts/ZTGatha-Regular.ttf"),
  ZTGathaMedium: require("../assets/fonts/ZTGatha-Medium.ttf"),
  ZTGathaSemiBold: require("../assets/fonts/ZTGatha-SemiBold.ttf"),
};

const assets: number[] = Object.values(ASSETS);

SplashScreen.preventAutoHideAsync();

export default function App() {
  const ready = useLoadAssets(assets ?? [], fonts ?? {});

  const onLayoutRootView = useCallback(async () => {
    if (ready) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [ready]);

  if (!ready) {
    return null;
  }

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <AuthProvider>
        <UserProvider>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <ColorSchemeProvider>
              <Navigation />
            </ColorSchemeProvider>
          </GestureHandlerRootView>
        </UserProvider>
      </AuthProvider>
    </SafeAreaProvider>
  );
}
