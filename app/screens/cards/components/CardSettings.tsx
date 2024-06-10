import { Ionicons } from '@expo/vector-icons'
import { Box, IconKeyAlt, IconLock, Text, useTheme } from 'components'
import React from 'react'
import { StyleSheet, Switch } from 'react-native';

const CardSettings = () => {
    const { iconSize, colors } = useTheme();

  return (
    <Box marginTop='l' marginBottom='m' borderTopWidth={StyleSheet.hairlineWidth} borderTopColor='muted' paddingTop='l'>
        <Text variant="subtitle">Paramètres de la carte</Text>
        <Box marginTop='m' flexDirection='row' justifyContent="space-between" alignItems='center'>
            <Box flexDirection='row' justifyContent="space-between" alignItems='center'>
                <IconLock fontSize={iconSize.m+10} />
                <Text>Véroullier la carte</Text>
            </Box>
            <Switch />
        </Box>
        <Box marginTop='m' flexDirection='row' justifyContent="space-between" alignItems='center'>
            <Box flexDirection='row' justifyContent="space-between" alignItems='center'>
                <IconKeyAlt fontSize={iconSize.m+10} />
                <Text>Changer le code PIN</Text>
            </Box>
            <Ionicons name="chevron-forward" size={iconSize.m} color={colors.icon} />
        </Box>
    </Box>
  )
}

export default CardSettings
