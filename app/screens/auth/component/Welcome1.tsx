import { Box, Button, Clickable, IconCreditCard, Text } from "components";
import { ASSETS } from "constants/app";
import React from "react";
import { Image } from "react-native";

const message = 
// "Effectuez vos paiements sur vos plate-formes favorites comme Apple, Netflix, Amazon, Spotify et plus, en toute simplicité!";
"Effectuez vos achats sur vos plateformes préférées telles qu'Apple, Netflix, Amazon, Spotify et bien plus encore !";


type Welcome1Props = {
    onLogin: () => void;
    onRegister: () => void;
}

const Welcome1 = ({ onLogin, onRegister }: Welcome1Props) => {
  return (
    <Box>
      <Box alignItems="center">
        <IconCreditCard fontSize={100} />
        <Image source={ASSETS.logo} style={{ width: 300, height: 300 }} />
      </Box>
      <Box marginVertical="l">
        <Box marginBottom="m">
          <Text fontSize={27} fontFamily="SFProDisplayBold" variant="header">
            Paiement en ligne
          </Text>
          <Text fontSize={27} fontFamily="SFProDisplayBold" variant="header">
            Avec une carte virtuelle
          </Text>
        </Box>
        <Text variant="small" lineHeight={19} fontSize={14}>
          {message}
        </Text>
      </Box>
      <Button onPress={onRegister} text="Commencer" fullWidth />
      <Box marginVertical="s" flexDirection="row" justifyContent="center">
        <Text variant="button">Vous avez un compte? </Text>
        <Clickable onPress={onLogin}>
          <Text variant="button" color="red">
            Connectez-vous
          </Text>
        </Clickable>
      </Box>
    </Box>
  );
};

export default Welcome1;
