import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Container, ContainerProps } from "./Container";

export const FormContainer = ({ ...props }: ContainerProps) => {
  return (
    <Container {...props}>
      <KeyboardAwareScrollView
        scrollsToTop={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flex: 1 }}
      >
        {props.children}
      </KeyboardAwareScrollView>
    </Container>
  );
};
