import { Ionicons } from "@expo/vector-icons";
import { Box, Clickable, IconUpload, Text, useTheme } from "components";
import React from "react";

type UploadPassportProps = {
  onPress: () => void;
  filename: string | null;
}

const UploadPassport = ({ onPress, filename }: UploadPassportProps) => {
  const { radius, colors } = useTheme();

  return (
    <Box>
      <Text>Ajoutez une photo de votre passeport</Text>
      <Clickable onPress={onPress}>
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
            {filename ?? "Cliquez ici pour choisir une photo"}
          </Text>
          <IconUpload fontSize={29} />
        </Box>
      </Clickable>
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

export default UploadPassport;
