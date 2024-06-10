import { StyleSheet } from "react-native";
import React from "react";
import { Box, Button, Clickable, Container, Text } from "components";
import { useNavigation } from "@react-navigation/native";
import { CardsNavigation } from "Routes";

const CardRequest = () => {
  const { goBack } = useNavigation<CardsNavigation>();

  const onGoBack = () => {
    // TODO: log event `card request cancelled`
    goBack();
  };

  return (
    <Container style={{ flex: 1 }}>
      <Box flex={1} backgroundColor="secondaryBackground" padding="m">
        <Text>Foo</Text>
      </Box>
    </Container>
  );
};

export default CardRequest;

const styles = StyleSheet.create({});
