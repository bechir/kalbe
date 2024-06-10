import { Ionicons } from '@expo/vector-icons'
import { Box, Text, useTheme } from 'components'
import React from 'react'

const Transactions = () => {
    const { iconSize, colors } = useTheme();
  return (
    <Box marginTop='m'>
      <Text variant='title'>Transactions récentes</Text>
      <Box justifyContent='center' alignItems='center' marginTop='l'>
        <Ionicons name="swap-horizontal" color={colors.mainForeground} size={iconSize.l} />
        <Text opacity={.7} paddingTop='m'>Vos transactions apparaîtrons ici</Text>
      </Box>
    </Box>
  )
}

export default Transactions
