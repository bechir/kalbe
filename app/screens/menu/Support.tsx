import { Ionicons } from '@expo/vector-icons'
import { BackButtonHeader, Box, Container, IconButton, Text, useTheme } from 'components'
import React from 'react'
import { StyleSheet } from 'react-native'

const Support = () => {
  const { colors } = useTheme()
  return (
    <Container innerPadding>
      <BackButtonHeader />
      <Box marginTop='l'>
        <Box alignItems='center'>
          <Ionicons name="logo-whatsapp" color={colors.success} size={75} />
          <Text marginVertical='s' variant='subtitle'>Échangons sur WhatsApp</Text>
          <Text>Afin d'avoir une réponse rapide à toutes vos questions</Text>
        </Box>
        <Box alignItems='center' marginTop='xl'>
          <Ionicons name="call-outline" color={colors.icon} size={75} />
          <Text marginVertical='s' variant='subtitle'>Discutons par téléphone</Text>
          <Text textAlign='center'>Notre équipe est à votre disposition pour vous aider et vous accompgner</Text>
        </Box>
        <Box alignItems='center' paddingTop='l' marginTop='xl' borderTopWidth={StyleSheet.hairlineWidth} borderTopColor='muted'>
          <Text variant='subtitle'>Pensez à consulter nos réseaux sociaux</Text>
          <Box flexDirection='row' marginTop='s'>
            <IconButton icon="logo-instagram" size='l' color='instagram' />
            <IconButton icon="logo-facebook" size='l' color='facebook' />
            <IconButton icon="logo-linkedin" size='l' color='linkedin' />
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

export default Support
