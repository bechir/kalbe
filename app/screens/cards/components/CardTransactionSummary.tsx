import { Ionicons } from "@expo/vector-icons";
import { Box, Clickable, IconLoad, IconRemove, IconWallet, Text, useTheme } from "components";
import React from "react";
import { StyleSheet } from "react-native";

const CardTransactionSummary = () => {
  const { iconSize } = useTheme();

  return (
    <Box marginTop="l">
      <Text variant="subtitle">Résumé des transactions</Text>
      <Box
        borderTopWidth={StyleSheet.hairlineWidth}
        marginTop="m"
        borderColor="muted"
      >
        <TransactionLine color="success" label="Crédit" value={5200} icon={<IconLoad />} />
        <TransactionLine color="red" label="Débit" value={738} icon={<IconRemove />} />
        <TransactionLine color="tint" label="Solde actuel" value={4462} icon={<IconWallet />} />
      </Box>
      <Clickable>
        <Box marginTop="m" justifyContent="center" flexDirection="row" alignItems="center">
            <Text variant="button">Voir toutes les transactions</Text>
            <Ionicons name="chevron-forward" size={iconSize.m-3} />
        </Box>
      </Clickable>
    </Box>
  );
};

type TransactionLineProps = {
  label: string;
  value: number;
  icon: React.ReactNode;
  color: "success" | "red" | "tint"
};

const TransactionLine = ({ label, value, color, icon }: TransactionLineProps) => {

  return (
    <Box
      marginTop="m"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box flexDirection="row" alignItems="center">
        {icon}
        <Text color="mainForeground"> {label}</Text>
      </Box>
      <Text variant="credit" color={color}>
        {value.toMoney()} MRU
      </Text>
    </Box>
  );
};

export default CardTransactionSummary;
