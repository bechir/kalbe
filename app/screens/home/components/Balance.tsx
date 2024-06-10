import { StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Box, Clickable, Text, useTheme } from "components";

const balance = 41620.75;

const Balance = () => {
  const { iconSize, colors, radius } = useTheme();
  const toggleHideBalance = () => {
    // TODO hide balance
    // TODO log hide/show balance event
  }

  return (
    <Box backgroundColor="secondaryBackground" padding="l" borderRadius={radius.m}>
      <Box flexDirection="row" justifyContent="space-between">
        <Text variant='body'>
          Solde disponible
        </Text>
        <Clickable onPress={toggleHideBalance}>
            <Ionicons name="eye-outline" color={colors.mainForeground} size={iconSize.m} />
        </Clickable>
      </Box>
      <Box flexDirection="row">
        <Text variant='button' lineHeight={14}>MRU</Text>
        <Text variant="balance">
          {Math.floor(balance).toMoney()}
          <Text variant="subtitle">.{`${balance}`.split('.')[1] ?? '00'}</Text>
        </Text>
      </Box>
    </Box>
  );
};

export default Balance;

const styles = StyleSheet.create({});
