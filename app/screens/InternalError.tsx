import React from "react";
import { Box, Button, Container, Text } from "components";

const InternalError = () => {
  return (
    <Container innerPadding>
      <Box flex={1} justifyContent="center" alignItems="center">
        <Text variant="title">Internal Error</Text>
        <Button text="Refresh" />
      </Box>
    </Container>
  );
};

export default InternalError;
