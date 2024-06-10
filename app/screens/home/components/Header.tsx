import React from "react";
import { Box, IconButton, Text } from "components";
import { useNavigation } from "@react-navigation/native";
import { HomeNavigation } from "Routes";

const Header = () => {
  const { navigate } = useNavigation<HomeNavigation>();

  return (
    <Box
      marginBottom="l"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box>
        <Text variant="subtitle">Bonjour, Bechir!</Text>
      </Box>
      <Box flexDirection='row' alignItems='center' justifyContent='space-around'>
        {/* <ColorSchemeButton /> */}
        <IconButton hasBgColor matIcon={"currency-exchange"} size='m' onPress={() => navigate("CurrencyConvert")} />
        <Box marginStart='s'><IconButton hasBgColor icon={"notifications-outline"} size='m'/></Box>
      </Box>
    </Box>
  );
};

export default Header;
