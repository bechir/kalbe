import { Box, Button, FormContainer, Link, Text, useTheme } from "components";
import React, { useEffect, useState } from "react";
import AuthHeader from "./component/AuthHeader";
import { Image, StyleSheet, TextInput } from "react-native";
import HaveAccountButton from "./component/HaveAccountButton";
import { AuthStackScreenProps } from "Routes";
import { ASSETS } from "constants/app";
import { useAuth } from "hooks";

const Register = ({ navigation }: AuthStackScreenProps<"Register">) => {
  const { spacing, textVariants, iconSize } = useTheme();
  const { signup, state } = useAuth();
  const [phone, setPhone] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const handlePhone = (text: string) => {
    if (text.length <= 11) {
      if(text == "") {
        setPhone("");
      } else {
        let formatted = Number(text.replace(/\D/g, "")).toString();
        formatted = formatted.replace(/(\d{2})(?=\d)/g, "$1 ");
        setPhone(formatted);
      }
    }

    if(text.length == 11) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  const handleSubmit = () => {
    if(isFormValid) {
      signup({phone: phone.replaceAll(' ', '')}).catch(e => {
        // TODO log event to google firebase
      })
    } else {
      // TODO log event with phone number
    }
  }

  useEffect(() => {
    if(state.errorMessage.length) {
      setIsFormValid(false);
    }
  }, [state.errorMessage])

  const goLogin = () => {
    navigation.goBack();
    navigation.navigate("Login");
  };

  return (
    <FormContainer innerPadding>
      <AuthHeader />
      <Box justifyContent="space-between" flex={1}>
        <Box>
          <Text variant="title" marginTop="l">
            Numéro de téléphone
          </Text>
          <Text fontSize={12} opacity={.8}>
            Entrez votre numéro de téléphone et créez un compte pour effectuer
            vos paiements sans limite, à l'internationale.
          </Text>
          <Box marginVertical="l">
            <Box
              flexDirection="row"
              alignItems="center"
              borderBottomWidth={StyleSheet.hairlineWidth}
              borderColor="muted"
            >
              <Box flexDirection='row' alignItems='center'>
                <Image source={ASSETS.flagMr} style={{ width: iconSize.m, height: iconSize.s }} />
                <Text paddingStart="s" variant="phoneInput">+222</Text>
              </Box>
              <TextInput
                onChangeText={handlePhone}
                value={phone}
                placeholder="## ## ## ##"
                keyboardType="number-pad"
                returnKeyType="done"
                maxLength={11}
                style={[
                  { padding: spacing.m, flex: 1, ...textVariants.phoneInput },
                ]}
              />
            </Box>
          </Box>
          <Text variant="error">{state.errorMessage}</Text>
        </Box>
        <Box marginTop="xl">
          <Box
            flexDirection="row"
            flexWrap="wrap"
            opacity={0.8}
            alignItems="center"
            justifyContent="center"
          >
            <Text fontSize={12} lineHeight={17}>
              En vous inscrivant, vous acceptez nos
            </Text>
            <Link fontSize={12} text=" conditions d'utilisations " />
            <Text fontSize={12} lineHeight={17}>
              et notre
            </Text>
            <Link fontSize={12} text=" politique de confidentialité." />
          </Box>
          <Button loading={state.isAuthenticating} onPress={handleSubmit} disabled={!isFormValid} text="Continuer" fullWidth />
        </Box>
      </Box>
      <HaveAccountButton onPress={goLogin} />
    </FormContainer>
  );
};

export default Register;
