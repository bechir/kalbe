import React from "react";
import { EmptyReturnFn } from "types";
import { Box, Text, useTheme } from "./Theme";
import { Modal } from "react-native";
import { IconUserScan } from "./icons";
import { Button } from "./Button";
import { Ionicons } from "@expo/vector-icons";
import { Clickable } from "./Clickable";

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
  const { iconSize, radius } = useTheme();

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
        <Box borderWidth={1} borderColor="muted" borderRadius={radius.xs} width={"100%"} padding="m">
          <Text marginBottom="m" variant="subtitle">Informations à renseigner:</Text>
          <Box>
            <Item text="Informations personnelles" />
            <Item text="Photo de votre passport ou carte d'identité nationale" />
            <Item text="Une photo récente" />
          </Box>
        </Box>
        <Box marginBottom="xl" alignItems="center">
          <Button onPress={onStartPress} text="Commencer" fullWidth />
          <Clickable onPress={onClose} style={{ borderBottomWidth: 1 }}>
            <Text marginBottom="none" variant="button">Je le ferai plus tard</Text>
          </Clickable>
        </Box>
      </Box>
    </Modal>
  );
};

type ItemProps = {
  text: string
}

const Item = ({ text }: ItemProps) => {
  const { colors } = useTheme();
  return (
    <Box flexDirection="row" alignItems="center" marginBottom="s">
      <Ionicons color={colors.success} name="checkmark" size={19} style={{ paddingEnd: 5 }} />
      <Text fontSize={12}>{text}</Text>
    </Box>
  );
}
