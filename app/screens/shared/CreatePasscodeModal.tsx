import React from "react";
import { BackButtonHeader, FormContainer, useTheme } from "components";
import { CreatePasscodeForm } from "./CreatePasscodeForm";
import { useNavigation } from "@react-navigation/native";

export const CreatePasscodeModal = () => {
  const { iconSize } = useTheme();

  const { goBack } = useNavigation();

  const onSuccess = () => {
    goBack
  };

  return (
    <FormContainer innerPadding>
      <BackButtonHeader marginTop="xl" paddingTop="s" type="close" />
      <CreatePasscodeForm onSuccess={goBack} />
    </FormContainer>
  );
};
