import { Box, Button, Clickable, Text, useTheme } from 'components'
import React, { useEffect } from 'react'
import * as SystemUI from 'expo-system-ui';
import { ASSETS } from 'constants/app';
import { StatusBar } from 'expo-status-bar';
import { Image } from 'react-native';
import config from 'config';

type Welcome2Props = {
    onLogin: () => void;
    onRegister: () => void;
}

const Welcome2 = ({ onLogin, onRegister }: Welcome2Props) => {
    const { colors } = useTheme();
    useEffect(() => {
        SystemUI.setBackgroundColorAsync(colors.tint)
    }, [])

  return (
    <React.Fragment>
      <StatusBar style="light" />
      <Box
        flex={1}
        backgroundColor="tint"
        justifyContent="space-around"
        paddingHorizontal='l'
      >
        <Box alignItems="center">
        <Image source={ASSETS.iconLight} style={{ width: 100, height: 100 }} />
        <Text
          marginTop="l"
          marginBottom="m"
          fontSize={25}
          fontFamily="SFProDisplayBold"
          variant="header"
          color="mainBackground"
        >
          Bienvenu sur {config.app.name}!
        </Text>
        <Text color="mainBackground" textAlign="center">
          Effectuez vos achats sur vos plateformes préférées telles qu'Apple,
          Netflix, Amazon, Spotify et bien plus encore !
        </Text>
        </Box>
        <Box alignItems="center">
          <Button
            variant="dark"
            onPress={onRegister}
            text="Commencer maintenant"
          />
          <Box marginVertical="s" flexDirection="row" justifyContent="center">
            <Text variant="button" color="mainBackground">
              Vous avez un compte?{" "}
            </Text>
            <Clickable onPress={onLogin}>
              <Text variant="button" color="red">
                Connectez-vous
              </Text>
            </Clickable>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default Welcome2
