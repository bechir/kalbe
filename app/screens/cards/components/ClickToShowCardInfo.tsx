import React from "react";
import { Box, Text, useTheme } from "components";
import { Ionicons } from "@expo/vector-icons";

const ClickToShowCardInfo = () => {
  const { colors, iconSize, radius } = useTheme();

  return (
    <Box
      flexDirection="row"
      marginTop="m"
      padding="m"
      backgroundColor="white"
      borderRadius={radius.s}
    >
      <Ionicons
        name="information-circle-outline"
        color={colors.success}
        size={iconSize.s}
      />
      <Text paddingStart="s" variant="info">
        Cliquez sur la carte pour afficher les détails.
      </Text>
    </Box>
  );
};

export default ClickToShowCardInfo;
