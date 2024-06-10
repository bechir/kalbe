import React from "react";
import { Clickable } from "./Clickable";
import { Box, Text, useTheme } from "./Theme";
import { IconAlarm } from "./icons";
import { IconButton } from "./IconButton";

type VerifyIdentityButtonProps = {
  onPress: () => void;
}

export const VerifyIdentityButton = ({ onPress }: VerifyIdentityButtonProps) => {
  const { radius, colors, iconSize } = useTheme();

  return (
    <Clickable onPress={onPress}>
      <Box
        marginVertical="m"
        alignItems="center"
        flexDirection="row"
        paddingVertical="m"
        paddingHorizontal="s"
        borderRadius={radius.s}
        backgroundColor="alertBackground"
      >
        <IconAlarm color={colors.red} fontSize={iconSize.l} />
        <Box marginStart="s" flex={1}>
          <Text marginTop="none" variant="button">
            Vérifiez votre identité
          </Text>
          <Text fontSize={11} opacity={0.7} fontFamily="SFProDisplaySemiBold">
            Vérifiez votre identité pour recevoir une carte virtuelle et
            effectuer des transactions en toute sécurité.
          </Text>
        </Box>
        <Box marginStart="s">
          <IconButton hasBgColor size="s" icon="chevron-forward" />
        </Box>
      </Box>
    </Clickable>
  );
};
