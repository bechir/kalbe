import { Box, Button, FormContainer, Link, Text, useTheme } from "components";
import React, { useEffect, useState } from "react";
import AuthHeader from "./component/AuthHeader";
import { Image, Keyboard, StyleSheet, TextInput } from "react-native";
import { AuthStackScreenProps } from "Routes";
import { ASSETS } from "constants/app";
import { useAuth } from "hooks";
import NoAccountButton from "./component/NoAccountButton";
import { useFocusEffect } from "@react-navigation/native";

const Login = ({ navigation }: AuthStackScreenProps<"Login">) => {
  const { spacing, textVariants, iconSize } = useTheme();
  const { signin, state, clearErrorMessage } = useAuth();
  const [phone, setPhone] = useState("");
  const [passcode, setPasscode] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const handlePhone = (text: string) => {
    setPhone(text);
    handleChange();
  };

  const handlePasscode = (text: string) => {
    setPasscode(text);
    if(text.length == 8) {
      Keyboard.dismiss();
    }
    handleChange();
  }

  const handleChange = () => {
    if(phone.length == 8 && passcode.length > 0) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }

  const handleSubmit = () => {
    if(isFormValid) {
      signin({ phone, passcode })
    } else {
      // TODO log event with phone number
    }
  }

  useEffect(() => {  
    return () => {
      clearErrorMessage();
    }
  }, [])
  

  useEffect(() => {
    if(state.errorMessage.length) {
      setIsFormValid(false);
    }
  }, [state.errorMessage])

  const goRegister = () => {
    navigation.goBack();
    navigation.navigate("Register");
  }

  return (
    <FormContainer innerPadding>
      <AuthHeader />
      <Text variant="title">Connexion</Text>
      <Box justifyContent="space-between" flex={1}>
        <Box>
          <Box>
            <Text marginTop="l">Numéro de téléphone</Text>
            <Box
                flexDirection="row"
                alignItems="center"
                borderBottomWidth={StyleSheet.hairlineWidth}
                borderColor="muted"
              >
                <Box flexDirection="row" alignItems="center">
                  <Image
                    source={ASSETS.flagMr}
                    style={{ width: iconSize.m, height: iconSize.s }}
                  />
                  <Text paddingStart="s" variant="phoneInput">
                    +222
                  </Text>
                </Box>
                <TextInput
                  onChangeText={handlePhone}
                  value={phone}
                  keyboardType="number-pad"
                  returnKeyType="next"
                  maxLength={8}
                  style={[
                    { padding: spacing.m, flex: 1, ...textVariants.phoneInput },
                  ]}
                />
              </Box>
          </Box>
          <Box>
            <Text marginTop="l">Code PIN</Text>
            <Box
                flexDirection="row"
                alignItems="center"
                borderBottomWidth={StyleSheet.hairlineWidth}
                borderColor="muted"
              >
                <TextInput
                  onChangeText={handlePasscode}
                  value={passcode}
                  keyboardType="number-pad"
                  returnKeyType="done"
                  style={[
                    { padding: spacing.m, paddingStart: 0, flex: 1, ...textVariants.phoneInput },
                  ]}
                />
              </Box>
          </Box>
          <Text paddingTop="l" variant="error">{state.errorMessage}</Text>
        </Box>
        <Box marginTop="xl">
          <Button
            loading={state.isAuthenticating}
            onPress={handleSubmit}
            disabled={!isFormValid}
            text="Continuer"
            fullWidth
          />
        </Box>
      </Box>
      <NoAccountButton onPress={goRegister} />
    </FormContainer>
  );
};

export default Login
