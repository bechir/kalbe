import * as Yup from "yup";
import { Box, Button, FormContainer, Text, useTheme } from "components";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { StyleSheet, TextInput } from "react-native";
import UserTitleDropdown from "./UserTitleDropdown";

interface UserBasicInfosFormDTO {
  title?: "man" | "miss" | "madam";
  firstName: string;
  lastName: string;
  address: string;
  city: string;
}

const UserBasicInfosFormSchema = Yup.object().shape({
  title: Yup.string().required(),
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  city: Yup.string().required(),
  address: Yup.string().required(),
});

type UserBasicInfosFormProps = {
    onSuccess: () => void;
}

export const UserBasicInfosForm = ({ onSuccess }: UserBasicInfosFormProps) => {
  const { spacing, textVariants, radius, iconSize } = useTheme();
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [canSubmit, setCanSubmit] = useState(false);

  const { handleChange, handleBlur, handleSubmit, values, errors } =
    useFormik<UserBasicInfosFormDTO>({
      validationSchema: UserBasicInfosFormSchema,
      initialValues: { firstName: "", lastName: "", address: "", city: "" },
      onSubmit(values, formikHelpers) {
        console.log(values);
        onSuccess();
      },
    });

  useEffect(() => {
    if (
      loading ||
      errors.address ||
      errors.city ||
      errors.firstName ||
      errors.lastName ||
      errors.title
    ) {
      setCanSubmit(false);
    } else {
      setCanSubmit(true);
    }
  }, [loading, errors]);

  return (
      <Box justifyContent="space-between" flex={1}>
        <Box>
          <Box>
            <Text marginTop="l">Vous êtes</Text>
            <UserTitleDropdown
              selected={values.title}
              onSelect={handleChange("title")}
            />
          </Box>
          <Box>
            <Text marginTop="l">Prénom</Text>
            <Box
              flexDirection="row"
              alignItems="center"
              borderWidth={StyleSheet.hairlineWidth}
              padding="s"
              marginTop="s"
              borderRadius={radius.xs}
              borderColor="muted"
            >
              <TextInput
                onChangeText={handleChange("firstName")}
                onBlur={handleBlur("firstName")}
                value={values.firstName}
                style={[{ paddingVertical: 5, flex: 1 }]}
                returnKeyType="next"
              />
            </Box>
          </Box>
          <Box>
            <Text marginTop="l">Nom de famille</Text>
            <Box
              flexDirection="row"
              alignItems="center"
              borderWidth={StyleSheet.hairlineWidth}
              padding="s"
              marginTop="s"
              borderRadius={radius.xs}
              borderColor="muted"
            >
              <TextInput
                onChangeText={handleChange("lastName")}
                onBlur={handleBlur("lastName")}
                value={values.lastName}
                style={[{ paddingVertical: 5, flex: 1 }]}
                returnKeyType="next"
              />
            </Box>
          </Box>
          <Box>
            <Text marginTop="l">Ville</Text>
            <Box
              flexDirection="row"
              alignItems="center"
              borderWidth={StyleSheet.hairlineWidth}
              padding="s"
              marginTop="s"
              borderRadius={radius.xs}
              borderColor="muted"
            >
              <TextInput
                onChangeText={handleChange("city")}
                onBlur={handleBlur("city")}
                value={values.city}
                style={[{ paddingVertical: 5, flex: 1 }]}
                returnKeyType="next"
              />
            </Box>
          </Box>
          <Box>
            <Text marginTop="l">Adresse</Text>
            <Box
              flexDirection="row"
              alignItems="center"
              borderWidth={StyleSheet.hairlineWidth}
              padding="s"
              marginTop="s"
              borderRadius={radius.xs}
              borderColor="muted"
            >
              <TextInput
                onChangeText={handleChange("address")}
                onBlur={handleBlur("address")}
                value={values.address}
                style={[{ paddingVertical: 5, flex: 1 }]}
                returnKeyType="done"
              />
            </Box>
          </Box>
        </Box>
        <Box marginTop="xl">
          <Button
            loading={loading}
            disabled={!canSubmit}
            onPress={handleSubmit}
            text="Suivant"
            fullWidth
          />
        </Box>
      </Box>
  );
};
