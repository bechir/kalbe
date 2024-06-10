import { Box, Button, Text, useTheme } from "components";
import React from "react";
import { Image } from "react-native";
import HaveAccountButton from "./HaveAccountButton";
import { ASSETS } from "constants/app";
import config from "config";

type WelcomeLightProps = {
  onLogin: () => void;
  onRegister: () => void;
};

const WelcomeLight = ({ onLogin, onRegister }: WelcomeLightProps) => {
  const { colors } = useTheme();

  return (
      <Box flex={1} justifyContent="space-around" paddingHorizontal="l">
        <Box alignItems="center">
          <Image source={ASSETS.logo} style={{ width: 200, height: 200 }} />
          <Text
            marginTop="l"
            marginBottom="m"
            fontSize={25}
            fontFamily="SFProDisplayBold"
            variant="header"
            color="mainForeground"
          >
            Bienvenu sur {config.app.name}!
          </Text>
          <Text color="mainForeground" textAlign="center">
            Effectuez vos achats sur vos plateformes préférées telles qu'Apple,
            Netflix, Amazon, Spotify et bien plus encore !
          </Text>
        </Box>
        <Box alignItems="center">
          <Button
            variant="light"
            onPress={onRegister}
            text="Commencer maintenant"
          />
          <HaveAccountButton onPress={onLogin} />
        </Box>
      </Box>
  );
};

export default WelcomeLight;
