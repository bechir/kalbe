import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Box, Button, IconCard, Text, useTheme } from "components";
import { useNavigation } from "@react-navigation/native";
import { CardsNavigation } from "Routes";

type NoCardProps = {
  buttonDisabled?: boolean;
  onCardRequest: () => void;
}

const NoCard = ({ onCardRequest, buttonDisabled }: NoCardProps) => {
  const { iconSize, colors } = useTheme();

  return (
    <Box alignItems="center">
      <IconCard fontSize={iconSize.xxl} opacity={.35} />
      <Text variant="subtitle" marginTop="l">
        Pas de carte actuellement
      </Text>
      <Text paddingVertical="m">
        Vos cartes apparaîtrons ici. Cliquez sur le bouton ci-dessous pour
        ajouter une carte virtuelle.
      </Text>
      <Button
        disabled={buttonDisabled}
        text="Créer une carte virtuelle"
        icon={
          <MaterialCommunityIcons
            color={colors.mainBackground}
            name="credit-card-plus-outline"
            size={iconSize.m}
          />
        }
        onPress={onCardRequest}
      />
    </Box>
  );
};

export default NoCard;
