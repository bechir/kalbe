import React from 'react'
import { useTheme } from './Theme'
import { TextInput, TextInputProps } from 'react-native'

interface AmountInputProps extends Omit<TextInputProps, 'value'> {
    value?: number;
}

export const AmountInput = ({value, ...props}: AmountInputProps) => {
    const { textVariants, colors } = useTheme();
  return (
    <TextInput
      style={[textVariants.header]}
      placeholder="0.0"
      placeholderTextColor={colors.muted}
      value={value?.toMoney()}
      {...props}
      keyboardType="decimal-pad"
      returnKeyType='done'
    />
  );
}
