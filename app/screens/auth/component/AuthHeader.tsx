import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigation } from "Routes";
import { Box, Clickable, IconButton, Text } from "components";
import React from "react";

const AuthHeader = () => {
  const { goBack } = useNavigation<AuthNavigation>();
  return (
    <Box flexDirection="row" alignItems="center" justifyContent="space-between">
      <IconButton onPress={goBack} icon="chevron-back" hasBgColor />
      {/* <Clickable>
        <Box
          flexDirection="row"
          alignItems="center"
          backgroundColor="secondaryBackground"
          padding="s"
        >
          <Text paddingHorizontal="s">FR</Text>
          <Ionicons name="chevron-down" />
        </Box>
      </Clickable> */}
    </Box>
  );
};

export default AuthHeader;
