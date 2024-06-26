import { FormContainer } from "components";
import React, {  } from "react";
import { UserBasicInfosForm } from "./components/UserBasicInfosForm";
import { useNavigation } from "@react-navigation/native";
import { CardsNavigation, HomeNavigation, MenuNavigation } from "Routes";

export const VerifyIdentity = () => {
  const { navigate } = useNavigation<CardsNavigation & HomeNavigation & MenuNavigation>();

  const onSuccess = () => {
    navigate("UploadDocuments");
  }

  return (
    <FormContainer innerPadding>
      <UserBasicInfosForm onSuccess={onSuccess} />
    </FormContainer>
  );
};
