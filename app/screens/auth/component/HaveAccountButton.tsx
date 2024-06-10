import { Box, Link, Text } from "components";
import React from "react";

type HaveAccountButtonProps = {
    onPress: () => void;
}

const HaveAccountButton = ({ onPress }: HaveAccountButtonProps) => {
  return (
    <Box marginVertical="s" flexDirection="row" justifyContent="center">
      <Text variant="button" color="mainForeground">
        Vous avez un compte?{" "}
      </Text>
      <Link text="Connectez-vous" onPress={onPress} variant="button" />
    </Box>
  );
};

export default HaveAccountButton;
