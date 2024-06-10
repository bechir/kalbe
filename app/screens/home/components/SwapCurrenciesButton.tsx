import React from "react";
import { Box, IconButton, useTheme } from "components";

type SwapCurrenciesButtonProps = {
  onSwap: () => void;
};

const SwapCurrenciesButton = ({ onSwap }: SwapCurrenciesButtonProps) => {
  const { radius } = useTheme();

  return (
    <Box justifyContent="center" alignItems="center">
      <Box backgroundColor="mainBackground" borderRadius={radius.l}>
        <IconButton onPress={onSwap} icon="swap-vertical" hasBgColor size="m" />
      </Box>
      <Box width={'100%'} height={.6} position='absolute' zIndex={-1} backgroundColor='muted'></Box>
    </Box>
  );
};

export default SwapCurrenciesButton;
