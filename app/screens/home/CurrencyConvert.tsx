import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { HomeNavigation } from "Routes";
import {
  AmountInput,
  Box,
  Clickable,
  FormContainer,
  IconButton,
  Text,
  useTheme,
} from "components";
import SwapCurrenciesButton from "./components/SwapCurrenciesButton";
import ExchangeRate from "./components/ExchangeRate";
import { CurrencyCode } from "types";
import rates from "../../data/latest.json";

const CurrencyConvert = () => {
  const { iconSize, colors } = useTheme();
  const { goBack } = useNavigation<HomeNavigation>();
  const [fromValue, setFromValue] = useState<number>();
  const [toValue, setToValue] = useState<number>();
  const [fromCurrency, setFromCurrency] = useState<CurrencyCode>("USD");
  const [toCurrency, setToCurrency] = useState<CurrencyCode>("MRU");
  const rate = exchangeRate(fromCurrency, toCurrency);

  const handleSwap = () => {
    const currencyTmp = fromCurrency;
    const valueTmp = fromValue ?? 0;

    setFromCurrency(toCurrency);
    setToCurrency(currencyTmp);
    setFromValue(toValue);
    setToValue(valueTmp);
  }

  const onFromValueChange = (valueText: string) => {
    const newValue = valueText.fromMoney();

    if(newValue >= 0) {
      setFromValue(newValue);
      setToValue(newValue * rate)
    } else {
      setFromValue(undefined);
    }
  }

  const onToValueChange = (valueText: string) => {
    const newValue = valueText.fromMoney();
    if(newValue) {
      setToValue(newValue);
      setFromValue((newValue * 1 / rate))
    } else {
      setToValue(undefined);
    }
  }

  const onFromCurrencyPress = () => {
    console.log('change from');
    
  }

  const onToCurrencyPress = () => {
    console.log('change to');
    
  }

  return (
    <FormContainer>
      <Box marginHorizontal="m">
        <Box alignSelf="flex-start">
          <IconButton
            hasBgColor
            icon={"arrow-back"}
            size="m"
            onPress={goBack}
          />
        </Box>
        <Box marginVertical="l">
          <Text variant="header">Convertir</Text>
          <ExchangeRate from={fromCurrency} to={toCurrency} rate={rate} />
        </Box>
        <Box>
          <Box
            flexDirection="row"
            justifyContent="space-between"
            alignItems="baseline"
          >
            <Box width={"85%"}>
              <AmountInput value={fromValue} onChangeText={onFromValueChange} />
            </Box>
            <Clickable onPress={onFromCurrencyPress} style={{ flexDirection: "row", alignItems: "center" }}>
              <Text variant="subtitle">{fromCurrency}</Text>
              <Ionicons
                name="chevron-down"
                color={colors.muted}
                size={iconSize.m}
              />
            </Clickable>
          </Box>
          <SwapCurrenciesButton onSwap={handleSwap} />
          <Box
            flexDirection="row"
            justifyContent="space-between"
            alignItems="baseline"
          >
            <Box width={"85%"}>
              <AmountInput value={toValue} onChangeText={onToValueChange} />
            </Box>
            <Clickable onPress={onToCurrencyPress} style={{ flexDirection: "row", alignItems: "center" }}>
              <Text variant="subtitle">{toCurrency}</Text>
                <Ionicons
                  name="chevron-down"
                  color={colors.muted}
                  size={iconSize.m}
                />
            </Clickable>
          </Box>
        </Box>
      </Box>
    </FormContainer>
  );
};

function exchangeRate(
  from: CurrencyCode,
  to: CurrencyCode
): number {
  // TODO better alternative to handle this
  if (Object.keys(rates).includes(from)
    && Object.keys(rates).includes(to)) {
    // @ts-ignore
    return rates[from].rates[to].toFixed(3);
  }

  return 0;
}

export default CurrencyConvert;
