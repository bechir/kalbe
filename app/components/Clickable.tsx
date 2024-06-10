import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import React from 'react'

export const Clickable = (props: TouchableOpacityProps) => {
  return (
    <TouchableOpacity activeOpacity={.7} {...props}>
      {props.children}
    </TouchableOpacity>
  )
}
