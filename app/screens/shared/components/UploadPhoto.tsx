import { Ionicons } from "@expo/vector-icons";
import { Box, Clickable, IconUserScan, Text, useTheme } from "components";
import React from "react";

type UploadPhotoProps = {
  onPress: () => void;
  filename: string | null;
}

const UploadPhoto = ({ onPress, filename }: UploadPhotoProps) => {
  const { radius, colors } = useTheme();

  return (
    <Box marginTop="xl">
      <Text>Photo ou selfie</Text>
      <Clickable onPress={onPress}>
        <Box
          alignItems="center"
          marginVertical="m"
          borderRadius={radius.xs}
          padding="m"
          borderWidth={1}
          borderColor="tint"
          borderStyle="dashed"
        >
          <IconUserScan color={colors.icon} fontSize={55} />
          <Text color="tint" opacity={0.5} marginTop="s">
            {filename ?? "Cliquez ici pour choisir une photo"}
          </Text>
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

export default UploadPhoto;
