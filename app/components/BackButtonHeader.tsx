import { useNavigation } from "@react-navigation/native";
import { AuthNavigation } from "Routes";
import React from "react";
import { Box, Theme } from "./Theme";
import { IconButton } from "./IconButton";
import { BoxProps } from "@shopify/restyle";

type BackButtonHeaderProps = BoxProps<Theme> & {
  type?: 'back' | 'close';
}

export const BackButtonHeader = ({ type = 'back', ...props }: BackButtonHeaderProps) => {
  const { goBack } = useNavigation<AuthNavigation>();
  return (
    <Box flexDirection="row" alignItems="center" justifyContent="space-between" {...props}>
      <IconButton onPress={goBack} icon={type == "back" ? "chevron-back" : "close"} hasBgColor />
    </Box>
  );
};
