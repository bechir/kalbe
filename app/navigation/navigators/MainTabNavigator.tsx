import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { IconCard, IconUser, IconWallet, useTheme } from "@components";
import { useTranslation } from "react-i18next";
import { MainTabParamList, TabCardsParamList, TabHomeParamList, TabMenuParamList } from "Routes";
import { CurrencyConvert, Home } from "screens/home";
import { About, Menu, Support } from "screens/menu";
import { CardRequest, Cards } from "screens/cards";
import { CreatePasscodeModal, VerifyIdentity } from "screens/shared";

const MainTab = createBottomTabNavigator<MainTabParamList>();

export function MainTabNavigator() {
  const { colors, iconSize } = useTheme();
  const { t } = useTranslation();

  return (
    <MainTab.Navigator
      // initialRouteName="TabHome"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: colors.activeTintColor,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.mainBackground,
          shadowColor: '#777',
          shadowOffset: { width: 0, height: -3 },
          shadowOpacity: .15,
          shadowRadius: 15,
        },
        tabBarLabelStyle: {
          fontWeight: "700",
        },
      }}
    >
      <MainTab.Screen
        name="TabHome"
        component={TabHomeNavigator}
        options={{
          title: t("home"),
          tabBarIcon: ({ color }) => <IconWallet color={color} fontSize={iconSize.tab-5} />
        }}
      />
      <MainTab.Screen
        name="TabCards"
        component={TabCardsNavigator}
        options={{
          title: t("card"),
          tabBarIcon: ({ color }) => <IconCard fontSize={iconSize.tab} color={color} />,
        }}
      />
      <MainTab.Screen
        name="TabMenu"
        component={MenuNavigator}
        options={{
          title: t("account"),
          tabBarIcon: ({ color }) => <IconUser fontSize={iconSize.tab-3} color={color} />,
        }}
      />
    </MainTab.Navigator>
  );
}

const HomeStack = createNativeStackNavigator<TabHomeParamList>();
function TabHomeNavigator() {
  const { colors } = useTheme();

  return (
    <HomeStack.Navigator
      screenOptions={{
        headerBackTitle: "Retour",
        animation: "slide_from_right",
        headerTintColor: colors.tint,
        headerTitleStyle: { color: "#222" },
        headerStyle: {
          backgroundColor: colors.mainBackground,
        },
        headerShown: false,
      }}
    >
      <HomeStack.Screen name="Home" component={Home} />
      <CardsStack.Screen
        name="VerifyIdentity"
        component={VerifyIdentity}
        options={{ title: "Verifiez votre identité", headerShown: true }}
      />
      <HomeStack.Screen name="CurrencyConvert" component={CurrencyConvert} />
    </HomeStack.Navigator>
  );
}

const CardsStack = createNativeStackNavigator<TabCardsParamList>();
function TabCardsNavigator() {
  const { colors } = useTheme();

  return (
    <CardsStack.Navigator
      screenOptions={{
        headerBackTitle: "Retour",
        animation: "slide_from_right",
        headerTintColor: colors.tint,
        headerTitleStyle: { color: "#222" },
        headerStyle: {
          backgroundColor: colors.mainBackground,
        },
      }}
    >
      <CardsStack.Screen name="Cards" component={Cards} options={{ headerShown: false }} />
      <CardsStack.Group screenOptions={{ presentation: "fullScreenModal", headerShown: false }}>
        <CardsStack.Screen name="CreatePasscode" component={CreatePasscodeModal} />
      </CardsStack.Group>
      <CardsStack.Screen
        name="VerifyIdentity"
        component={VerifyIdentity}
        options={{ title: "Verifiez votre identité" }}
      />
      <CardsStack.Screen
        name="CardRequest"
        component={CardRequest}
        options={{ title: "Commander une carte" }}
      />
    </CardsStack.Navigator>
  );
}

const MenuStack = createNativeStackNavigator<TabMenuParamList>();
function MenuNavigator() {
  const { t } = useTranslation();
  const { colors } = useTheme();

  return (
    <MenuStack.Navigator
      screenOptions={{
        headerBackTitle: "Retour",
        animation: "slide_from_right",
        headerTintColor: colors.tint,
        headerTitleStyle: { color: "#222" },
        headerShown: false,
        headerStyle: {
          backgroundColor: colors.mainBackground,
        },
      }}
    >
      <MenuStack.Screen
        name="Menu"
        component={Menu}
      />
      <MenuStack.Screen
        name="VerifyIdentity"
        component={VerifyIdentity}
        options={{ title: "Verifiez votre identité", headerShown: true }}
      />
      <MenuStack.Group screenOptions={{ presentation: "fullScreenModal" }}>
        <MenuStack.Screen name="CreatePasscode" component={CreatePasscodeModal} />
      </MenuStack.Group>
      <MenuStack.Screen
        name="About"
        options={{ headerTitle: t("about") ?? "" }}
        component={About}
      />
      <MenuStack.Screen
        name="Support"
        options={{ headerTitle: t("support") ?? "" }}
        component={Support}
      />
    </MenuStack.Navigator>
  );
}
