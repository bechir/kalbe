import { Ionicons } from "@expo/vector-icons";
import { Box, IconUpload, Text, useTheme } from "components";
import React from "react";

const UploadNationalIdCard = () => {
  const { radius, colors } = useTheme();

  return (
    <Box>
      <Text>Carte d'identité nationale</Text>
      <Box
        justifyContent="space-between"
        alignItems="center"
        flexDirection="row"
        marginVertical="m"
        borderRadius={radius.xs}
        padding="m"
        borderWidth={1}
        borderColor="tint"
        borderStyle="dashed"
      >
        <Text color="tint" opacity={0.5}>
          Cliquez ici pour choisir un document
        </Text>
        <IconUpload fontSize={29} />
      </Box>
      <Box flexDirection="row" alignItems="center">
        <Ionicons
          size={17}
          name="information-circle-outline"
          color={colors.icon}
        />
        <Text fontSize={11} variant="info">
          {" "}
          JPG, PNG et PDF supporté (5MB max)
        </Text>
      </Box>
    </Box>
  );
};

export default UploadNationalIdCard;
