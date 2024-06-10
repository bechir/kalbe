import { Ionicons } from "@expo/vector-icons";
import { Box, Clickable, Text, useTheme } from "components";
import React from "react";
import VirtualCard from "./VirtualCard";
import CardTransactionSummary from "./CardTransactionSummary";
import CardSettings from "./CardSettings";

const MyCards = () => {
  const { iconSize, radius } = useTheme();

  const onCardPress = () => {};

  return (
    <Box
      marginTop="l"
      marginBottom="xl"
      backgroundColor="white"
      padding="m"
      borderRadius={radius.m}
    >
      <VirtualCard onPress={onCardPress} />
      <Clickable>
        <Box
          paddingVertical="s"
          backgroundColor="secondaryBackground"
          borderRadius={radius.s}
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
        >
          <Text paddingEnd="s" variant="button">
            Recharger la carte
          </Text>
          <Ionicons name="add" size={iconSize.m} />
        </Box>
      </Clickable>
      <CardTransactionSummary />
      <CardSettings />
    </Box>
  );
};

export default MyCards;
