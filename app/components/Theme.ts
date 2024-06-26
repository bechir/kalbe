import {
  createBox,
  createText,
  createTheme,
  useTheme as useThemeRS,
} from "@shopify/restyle";

import type { ColorSchemeName } from "./ColorSchemeContext";

const palette = {
  black: "#0B0B0B",
  white: "#fff",
  lightGray: "rgba(0, 0, 0, 0.05)",
  darkGray: "rgba(255, 255, 255, 0.075)",
  tint: "#000",
  yellow: '#ffd140',
  alertBackground: 'rgba(255, 209, 150, .4)',
  red: 'rgb(250, 75, 100)',
  green: '#00ab4b',
  instagram: "#E1306C",
  linkedin: "#0e76a8",
  facebook: "#4267B2",
  info: "#B9D9EB"
};

export const theme = createTheme({
  colorScheme: "light" as ColorSchemeName,
  colors: {
    mainBackground: "#f2f6fc",
    mainForeground: palette.black,
    secondaryBackground: palette.lightGray,
    activeTintColor: palette.tint,
    ...palette,
    success: palette.green,
    muted: '#afafaf',
    icon: "#2A4157",
  },
  iconSize: {
    s: 17,
    m: 21,
    l: 40,
    xl: 75,
    xxl: 200,
    tab: 35
  },
  spacing: {
    none: 0,
    s: 10,
    m: 15,
    l: 25,
    xl: 50,
    xxl: 100
  },
  radius: {
    xs: 5,
    s: 10,
    m: 15,
    l: 25,
  },
  textVariants: {
    defaults: {
      color: "mainForeground",
      fontFamily: "SFProTextRegular",
      fontSize: 14
    },
    mono: {
      fontFamily: "SpaceMono"
    },

    header: {
      fontSize: 36,
    },
    balance: {
      fontSize: 40,
      fontFamily: "ZTGathaRegular",
    },
    debit: {
      fontFamily: "ZTGathaSemiBold",
    },
    credit: {
      fontFamily: "ZTGathaSemiBold",
    },
    currency: {
      marginTop: "s",
      fontFamily: "ZTGathaMedium",
    },
    phoneInput: {
      fontSize: 16,
      fontFamily: "SFProDisplaySemiBold",
    },
    error: {
      fontSize: 12,
      color: "red",
      fontFamily: "SFProDisplaySemiBold",
    },
    subtitle: {
      fontSize: 15,
      fontFamily: "SFProDisplaySemiBold",
    },
    button : {
      fontFamily: "SFProDisplaySemiBold",
      marginVertical: "s"
    },
    title: {
      fontSize: 21,
      fontFamily: "SFProDisplayBold",
      marginVertical: "m"
    },
    body: {
      fontSize: 14,
    },
    small: {
      fontSize: 12,
      fontFamily: "SFProDisplaySemiBold",
    },
    subsection: {
      color: "icon"
    },
    info: {
      fontFamily: "SFProDisplaySemiBold",
      color: "icon",
      fontSize: 12
    }
  },
});

export const darkTheme: Theme = {
  ...theme,
  colorScheme: "dark",
  colors: {
    ...theme.colors,
    mainBackground: palette.black,
    mainForeground: palette.white,
    secondaryBackground: palette.darkGray,
  },
};

export type Theme = typeof theme;

export const Box = createBox<Theme>();
export const Text = createText<Theme>();
export const useTheme = useThemeRS<Theme>;
