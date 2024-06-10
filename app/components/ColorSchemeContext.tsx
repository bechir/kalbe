import { StatusBar } from "expo-status-bar";
import type { ReactNode, RefObject } from "react";
import {
  createContext,
  useCallback,
  useContext,
  useReducer,
  useRef,
} from "react";
import { Appearance, View } from "react-native";
import type { SharedValue } from "react-native-reanimated";
import { useSharedValue } from "react-native-reanimated";

const wait = async (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export type ColorSchemeName = "light" | "dark";

interface ColorScheme {
  active: boolean;
  statusBarStyle: ColorSchemeName;
  colorScheme: ColorSchemeName;
}

interface ColorSchemeContext extends ColorScheme {
  ref: RefObject<View>;
  transition: SharedValue<number>;
  circle: SharedValue<{ x: number; y: number; r: number }>;
  dispatch: (scheme: ColorScheme) => void;
}

const defaultValue: ColorScheme = {
  active: false,
  statusBarStyle: Appearance.getColorScheme() ?? "light" ? "dark" : "light",
  colorScheme: "light" // Appearance.getColorScheme() ?? "light"
};

const ColorSchemeContext = createContext<ColorSchemeContext | null>(null);

const colorSchemeReducer = (_: ColorScheme, colorScheme: ColorScheme) => {
  return colorScheme;
};

export const useColorScheme = () => {
  const ctx = useContext(ColorSchemeContext);
  if (ctx === null) {
    throw new Error("No ColorScheme context context found");
  }
  const { colorScheme, dispatch, ref, transition, circle, active } = ctx;
  const toggle = useCallback(
    async (x: number, y: number) => {
      const newColorScheme = colorScheme === "light" ? "dark" : "light";
      dispatch({
        active: false,
        colorScheme: newColorScheme,
        statusBarStyle: newColorScheme === "light" ? "dark" : "light",
      });
    },
    [circle, colorScheme, dispatch, ref, transition]
  );
  return { colorScheme, toggle, active };
};

interface ColorSchemeProviderProps {
  children: ReactNode;
}

export const ColorSchemeProvider = ({ children }: ColorSchemeProviderProps) => {
  const circle = useSharedValue({ x: 0, y: 0, r: 0 });
  const transition = useSharedValue(0);
  const ref = useRef(null);
  const [
    { colorScheme, active, statusBarStyle },
    dispatch,
  ] = useReducer(colorSchemeReducer, defaultValue);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style={statusBarStyle} />
      <View ref={ref} style={{ flex: 1 }}>
        <ColorSchemeContext.Provider
          value={{
            active,
            colorScheme,
            dispatch,
            ref,
            transition,
            circle,
            statusBarStyle,
          }}
        >
          {children}
        </ColorSchemeContext.Provider>
      </View>
    </View>
  );
};