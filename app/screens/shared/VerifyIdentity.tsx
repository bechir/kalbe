import * as Yup from "yup";
import { Box, Button, FormContainer, Text, useTheme } from "components";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { StyleSheet, TextInput } from "react-native";
import UserTitleDropdown from "./components/UserTitleDropdown";
import { UserBasicInfosForm } from "./components/UserBasicInfosForm";
import { UploadUserDocumentsForm } from "./components/UploadUserDocumentsForm";

interface VerifyIdentityDTO {
  title?: "man" | "miss" | "madam";
  firstName: string;
  lastName: string;
  address: string;
  city: string;
}

const VerifyIdentitySchema = Yup.object().shape({
  title: Yup.string().required(),
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  city: Yup.string().required(),
  address: Yup.string().required(),
});

export const VerifyIdentity = () => {
  const [step, setStep] = useState<"basic" | "documents">("basic");

  const onBasicInfosCompleted = () => {
  }

  const onDocumentsUploaded = () => {
    
  }

  return (
    <FormContainer innerPadding>
      {step == "basic" ? (
        <UserBasicInfosForm onSuccess={onBasicInfosCompleted} />
      ) : (
        <UploadUserDocumentsForm onSuccess={onDocumentsUploaded} />
      )}
    </FormContainer>
  );
};
