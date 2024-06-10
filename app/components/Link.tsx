import React from 'react'
import { Clickable } from './Clickable'
import { Text, Theme } from './Theme'
import { TextProps } from '@shopify/restyle';

type LinkProps = TextProps<Theme> & {
    text: string;
    onPress?: () => void;
}

export const Link = ({ text, onPress, ...props }: LinkProps) => {
  return (
    <Clickable onPress={onPress}>
      <Text color='red' {...props}>{text}</Text>
    </Clickable>
  )
}
