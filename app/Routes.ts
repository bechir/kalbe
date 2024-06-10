import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import {
  NativeStackScreenProps,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Auth: NavigatorScreenParams<AuthStackParamList> | undefined;
  Main: NavigatorScreenParams<MainTabParamList> | undefined;
  Security: NavigatorScreenParams<SecurityStackParamList> | undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type AuthStackScreenProps<Screen extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, Screen>;

export type SecurityStackScreenProps<
  Screen extends keyof SecurityStackParamList
> = NativeStackScreenProps<SecurityStackParamList, Screen>;

export type MainTabScreenProps<Screen extends keyof MainTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<MainTabParamList, Screen>,
    NativeStackScreenProps<MainTabParamList>
  >;

export type HomeStackScreenProps<Screen extends keyof TabHomeParamList> =
  NativeStackScreenProps<TabHomeParamList, Screen>;

export type CardsStackScreenProps<Screen extends keyof TabCardsParamList> =
  NativeStackScreenProps<TabCardsParamList, Screen>;

export type MenuStackScreenProps<Screen extends keyof TabMenuParamList> =
  NativeStackScreenProps<TabMenuParamList, Screen>;

export type AuthStackParamList = {
  Welcome: undefined;
  Login: undefined;
  Register: undefined;
};

export type SecurityStackParamList = {
  ConfirmPhone: undefined;
  CreatePasscode: undefined;
};

export type MainTabParamList = {
  TabHome: undefined;
  TabCards: undefined;
  TabMenu: undefined;
};

export type TabHomeParamList = {
  Home: undefined;
  CreatePasscode: undefined;
  CurrencyConvert: undefined;
  VerifyIdentity: undefined;
};

export type TabCardsParamList = {
  Cards: undefined;
  CreatePasscode: undefined;
  CardRequest: undefined;
  VerifyIdentity: undefined;
};

export type TabMenuParamList = {
  Menu: undefined;
  About: undefined;
  Support: undefined;
  VerifyIdentity: undefined;
  CreatePasscode: undefined;
};

export type AuthNavigation = NativeStackNavigationProp<AuthStackParamList>;
export type SecurityNavigation =
  NativeStackNavigationProp<SecurityStackParamList>;
export type HomeNavigation = NativeStackNavigationProp<TabHomeParamList>;
export type CardsNavigation = NativeStackNavigationProp<TabCardsParamList>;
export type MenuNavigation = NativeStackNavigationProp<TabMenuParamList>;
