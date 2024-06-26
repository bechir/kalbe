import React from "react";
import { Box, IconButton, Text } from "components";
import { useNavigation } from "@react-navigation/native";
import { HomeNavigation } from "Routes";
import config from "config";
import { useUser } from "hooks";

const Header = () => {
  const { navigate } = useNavigation<HomeNavigation>();
  const {
    state: { user },
  } = useUser();

  return (
    <Box flexDirection="row" alignItems="center" justifyContent="space-between">
      <Box marginBottom="s">
        <Text variant="title" marginVertical="none">
          {config.app.name}
        </Text>
        <Text variant="info">Bonjour, {user?.fullname}</Text>
      </Box>
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-around"
      >
        {/* <ColorSchemeButton /> */}
        <IconButton
          hasBgColor
          matIcon={"currency-exchange"}
          size="m"
          onPress={() => navigate("CurrencyConvert")}
        />
        <Box marginStart="s">
          <IconButton hasBgColor icon={"notifications-outline"} size="m" />
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
