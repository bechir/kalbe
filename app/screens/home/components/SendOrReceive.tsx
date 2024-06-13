import { Feather, FontAwesome, FontAwesome5, FontAwesome6, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Box, Clickable, IconLoad, IconSend, Text, useTheme } from "components";
import React from "react";
import { StyleSheet } from "react-native";

const SendOrReceive = () => {
  const { radius, iconSize, colors } = useTheme();
  return (
    <Box flexDirection="row" justifyContent="space-between">
      <Clickable activeOpacity={0.8} style={{ flex: .9 }}>
        <Box
          marginVertical="m"
          paddingVertical="s"
          borderRadius={radius.m}
          backgroundColor="secondaryBackground"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
        >
          <Text variant="button" paddingEnd="s">
            Envoyer de l'argent
          </Text>
          <IconSend fontSize={25} />
        </Box>
      </Clickable>
      <Clickable activeOpacity={0.8}>
        <Box
          marginVertical="m"
          paddingVertical="s"
          borderRadius={radius.s}
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
        >
          <MaterialCommunityIcons
            name="line-scan"
            size={iconSize.l-5}
          />
        </Box>
      </Clickable>
    </Box>
  );
};

export default SendOrReceive;
