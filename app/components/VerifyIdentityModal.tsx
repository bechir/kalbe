import React from "react";
import { EmptyReturnFn } from "types";
import { Box, Text, useTheme } from "./Theme";
import { Modal } from "react-native";
import { IconUserScan } from "./icons";
import { Button } from "./Button";
import { Link } from "./Link";

type VerifyIdentityModalProps = {
  visible: boolean;
  onClose: EmptyReturnFn;
  onStartPress: EmptyReturnFn;
};

export const VerifyIdentityModal = ({
  visible,
  onClose,
  onStartPress,
}: VerifyIdentityModalProps) => {
  const { iconSize } = useTheme();

  return (
    <Modal visible={visible} animationType="slide">
      <Box
        alignItems="center"
        justifyContent="space-between"
        paddingTop="xl"
        paddingHorizontal="m"
        backgroundColor="mainBackground"
        flex={1}
      >
        <Box alignItems="center" marginTop="xl">
          <IconUserScan fontSize={iconSize.xl} />
          <Text textAlign="center" variant="title">
            Vérifiez votre identité
          </Text>
          <Text textAlign="center">
            Afin de respecter la réglementation locale, nous avons besoin d'en
            savoir plus sur vous. Veuillez noter que vos documents personnels ne
            seront pas partagés sans votre permission, sauf si la loi l'exige.
          </Text>
        </Box>
        <Box marginBottom="xxl" alignItems="center">
          <Button onPress={onStartPress} text="Commencer" fullWidth />
          <Link text="Je le ferai plus tard." onPress={onClose} />
        </Box>
      </Box>
    </Modal>
  );
};
