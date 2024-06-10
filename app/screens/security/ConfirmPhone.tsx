import React, { useEffect, useState } from "react";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import {
  Box,
  Button,
  FormContainer,
  Text,
  useTheme,
} from "components";
import { useUser } from "hooks";
import { Keyboard, StyleSheet, TextInput } from "react-native";
import { CodeField, Cursor, MaskSymbol, RenderCellOptions, isLastFilledCell, useBlurOnFulfill, useClearByFocusCell } from "react-native-confirmation-code-field";

const CELL_COUNT = 6;


const ConfirmPhone = () => {
  const {
    state: { user },
    confirmPhoneNumber,
  } = useUser();
  const { spacing, textVariants, iconSize, radius } = useTheme();
  const [isFormValid, setIsFormValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [inputCode, setInputCode] = useState("");
  const [loading, setLoading] = useState(false);
  const ref = useBlurOnFulfill({ value: inputCode, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value: inputCode,
    setValue: setInputCode,
  });
  const [confirmation, setConfirmation] =
    useState<FirebaseAuthTypes.ConfirmationResult>();


  useEffect(() => {
    if(!confirmation) {
      sendConfirmationCode();
    }
  }, [])

  async function sendConfirmationCode() {
    if (user) {
      setLoading(true);

      auth()
        .signInWithPhoneNumber(`+222${user.phone}`)
        .then((confirmation) => {
          setConfirmation(confirmation);
        })
        .catch((err) => {
          // TODO log event
          console.log(err);
        })
        .finally(() => setLoading(false));
    }
  }

  async function confirmCode() {
    if(confirmation && isFormValid && inputCode.length == 6) {
      setErrorMessage("");
      setLoading(true);
      confirmation
        .confirm(inputCode)
        .then(() => {
          confirmPhoneNumber();
        })
        .catch((err) => {
          console.log(err);

          setErrorMessage(err.message);
        })
        .finally(() => setLoading(false));
    }
  }

  const handleChange = (text: string) => {
    if(text.length <= 6) {
      setInputCode(text);

      if(text.length == 6) {
        setIsFormValid(true)
      } else {
        setIsFormValid(false);
      }
    }
  }

  const renderCell = ({ index, symbol, isFocused }: RenderCellOptions) => {
    let textChild = null;

    if (symbol) {
      textChild = (
        <MaskSymbol
          maskSymbol={symbol}
          isLastFilledCell={isLastFilledCell({ index, value: inputCode })}
        >
          {symbol}
        </MaskSymbol>
      );
    }

    if (isFocused) {
      textChild = <Cursor />;
    }

    return (
      <Box
        borderRadius={radius.xs}
        borderBottomWidth={StyleSheet.hairlineWidth}
        key={index}
        borderColor={"icon"}
        onLayout={getCellOnLayoutHandler(index)}
      >
        <Text
          style={[styles.cell]}
        >
          {textChild}
        </Text>
      </Box>
    );
  };

  if (!user) {
    return null;
  }

  return (
    <FormContainer innerPadding>
      <Box flex={1} justifyContent="space-between">
        <Box>
          <Text variant="title">Code de validation</Text>
          <Text>
            Entrez le code de validation à 6 chiffres envoyé via SMS au +222{" "}
            {user.phone} pour confirmer votre numéro de téléphone.
          </Text>
          <Box marginVertical="l">
            <CodeField
              ref={ref}
              {...props}
              value={inputCode}
              onChangeText={handleChange}
              cellCount={CELL_COUNT}
              rootStyle={styles.codeFieldRoot}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              renderCell={renderCell}
            />
          </Box>
          <Text variant="error">{errorMessage}</Text>
        </Box>
        <Button
          disabled={loading || !isFormValid}
          variant="light"
          onPress={confirmCode}
          text="Continuer"
          fullWidth
        />
      </Box>
    </FormContainer>
  );
};

export default ConfirmPhone;

const styles = StyleSheet.create({
  codeFieldRoot: { marginTop: 20 },
  cell: {
    width: 50,
    height: 40,
    lineHeight: 40,
    fontSize: 25,
    textAlign: "center",
  },
});
