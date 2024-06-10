import { Box, Link, Text } from "components";
import React from "react";

type NoAccountButtonProps = {
  onPress: () => void;
};

const NoAccountButton = ({ onPress }: NoAccountButtonProps) => {
  return (
    <Box marginVertical="s" flexDirection="row" justifyContent="center">
      <Text variant="button" color="mainForeground">
        Vous n'avez pas de compte?{" "}
      </Text>
      <Link text="Commencez ici" onPress={onPress} variant="button" />
    </Box>
  );
};

export default NoAccountButton;
