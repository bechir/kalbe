import { Feather } from "@expo/vector-icons";
import { Box, Clickable, Text, useTheme } from "components";
import React from "react";

const TopUpButton = () => {
  const { radius, iconSize, colors } = useTheme();
  return (
    <Clickable activeOpacity={0.8}>
      <Box
        marginVertical="m"
        paddingVertical="s"
        backgroundColor="mainForeground"
        borderRadius={radius.s}
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
      >
        <Text color="mainBackground" variant="button" paddingEnd="s">
          Déposer de l'argent
        </Text>
        <Feather
          color={colors.mainBackground}
          name="plus"
          size={iconSize.m}
        />
      </Box>
    </Clickable>
  );
};

export default TopUpButton;
