import "./extensions";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

import * as SplashScreen from "expo-splash-screen";
import { enableScreens } from "react-native-screens";
import { useLoadAssets } from "hooks";
import { useEffect } from "react";

import { ColorSchemeProvider } from "@components";
import Navigation from "navigation";
import "./i18n";
import { ASSETS } from "constants/app";
import { AuthProvider } from "contexts/AuthContext";
import { UserProvider } from "contexts/UserContext";

enableScreens();

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

  useEffect(() => {
    if (ready) {
      SplashScreen.hideAsync();
    }
  }, [ready]);

  if (!ready) {
    return null;
  }

  return (
    <SafeAreaProvider>
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
