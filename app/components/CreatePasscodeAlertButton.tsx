import React from "react";
import { Clickable } from "./Clickable";
import { Box, Text, useTheme } from "./Theme";
import { IconLock } from "./icons";
import { IconButton } from "./IconButton";

type CreatePasscodeAlertButtonProps = {
  onPress: () => void;
}

export const CreatePasscodeAlertButton = ({ onPress }: CreatePasscodeAlertButtonProps) => {
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
        <IconLock color={colors.red} fontSize={iconSize.l} />
        <Box marginStart="s" flex={1}>
          <Text marginTop="none" variant="button">
            Créez un code PIN
          </Text>
          <Text fontSize={11} opacity={0.7} fontFamily="SFProDisplaySemiBold">Veuillez créer un code PIN pour garder la sécurité de votre compte.</Text>
        </Box>
        <Box marginStart="s">
          <IconButton hasBgColor size="s" icon="chevron-forward" />
        </Box>
      </Box>
    </Clickable>
  );
};
