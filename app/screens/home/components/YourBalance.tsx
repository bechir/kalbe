import React from "react";
import { Box, Text } from "components";

const YourBalance = () => {

  return (
    <Box margin="m" borderRadius={5}>
      <Text fontWeight="400">Solde disponible</Text>
      <Box flexDirection="row">
        <Text variant="balance" fontWeight="300">
          100
          <Text style={{ color: '#999' }}>
            .00
          </Text>
        </Text>
        <Box alignSelf="center" marginBottom="m"><Text variant="subtitle">MRU</Text></Box>
      </Box>
    </Box>
  );
};

export default YourBalance;
