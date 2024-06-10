import React, { useState } from "react";
import { StyleSheet } from "react-native";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
  MaskSymbol,
  isLastFilledCell,
  RenderCellOptions,
} from "react-native-confirmation-code-field";
import { Box, Button, IconKeyAlt, Text, useTheme } from "components";
import { useUser } from "hooks";

type CreatePasscodeFormProps = {
  onSuccess: () => void;
};

const CELL_COUNT = 6;

export const CreatePasscodeForm = ({ onSuccess }: CreatePasscodeFormProps) => {
  const { iconSize, radius } = useTheme();
  const { createPasscode, state: { isLoading } } = useUser();
  const [value, setValue] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const onSubmit = () => {
    if(isFormValid && value.length == 6) {
      createPasscode(value).then(onSuccess);
    }
  }

  const handleChange = (text: string) => {
    const value = Number(text);

    if(text.length <= 6) {
      setValue(text === '' ? '' : value.toString());

      if(value.toString().length == 6) {
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
          maskSymbol="•"
          isLastFilledCell={isLastFilledCell({ index, value })}
        >
          {symbol}
        </MaskSymbol>
      );
    } else if (isFocused) {
      textChild = <Cursor />;
    }

    return (
      <Box
        borderRadius={radius.xs}
        borderWidth={1}
        key={index}
        borderColor={isFocused ? "success" : "muted"}
      >
        <Text
          style={[styles.cell]}
          onLayout={getCellOnLayoutHandler(index)}
        >
          {textChild}
        </Text>
      </Box>
    );
  };

  return (
    <Box flex={1} justifyContent="space-between" marginBottom="xl">
      <Box>
        <Box
          alignItems="center"
          justifyContent="space-between"
          backgroundColor="mainBackground"
        >
          <Box alignItems="center" marginTop="l">
            <IconKeyAlt fontSize={iconSize.xl} />
            <Text textAlign="center" variant="title" marginBottom="s">
              Créer un code PIN
            </Text>
            <Text textAlign="center">
              Créez un code PIN pour sécuriser de votre compte.
            </Text>
          </Box>
        </Box>
        <CodeField
          ref={ref}
          {...props}
          value={value}
          onChangeText={handleChange}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="password"
          renderCell={renderCell}
        />
      </Box>
      <Button
        onPress={onSubmit}
        loading={isLoading}
        disabled={!isFormValid}
        text="Confirmer"
        fullWidth
      />
    </Box>
  );
};

const styles = StyleSheet.create({
  codeFieldRoot: { marginTop: 20 },
  cell: {
    width: 45,
    height: 45,
    lineHeight: 40,
    fontSize: 25,
    textAlign: "center",
  },
});
