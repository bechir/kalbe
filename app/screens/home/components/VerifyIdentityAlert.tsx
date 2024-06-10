import { Ionicons } from '@expo/vector-icons';
import { Box, Clickable, Text, useTheme } from 'components'
import React from 'react'

const VerifyIdentityAlert = () => {
    const { radius, iconSize, colors } = useTheme();

    return (
    <Box marginTop='l' backgroundColor='alertBackground' padding='m' borderRadius={radius.m} borderBottomEndRadius={0}>
        <Box flexDirection='row' alignItems='center' marginBottom='s'>
            <Ionicons name='warning-outline' size={iconSize.m} color={colors.red} />
            <Text variant='subtitle'>Vérifiez votre identité</Text>
        </Box>
        <Text opacity={.75} variant='small'>Veuillez vérifier votre identité pour finaliser votre inscription et recevoir votre carte prépayée virtuelle.</Text>
        <Clickable>
            <Text color='red' variant='button'>Cliquez ici pour commencer</Text>
        </Clickable>
    </Box>
    );
}

export default VerifyIdentityAlert
