import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";
import {
  CardsNavigation,
  CardsStackScreenProps,
  HomeNavigation,
  HomeStackScreenProps,
  MenuNavigation,
  MenuStackScreenProps,
} from "Routes";
import {
  Box,
  Button,
  Clickable,
  Container,
  IconDone,
  Text,
  useTheme,
} from "components";
import React, { useCallback, useEffect, useState } from "react";
import UploadPhoto from "./components/UploadPhoto";
import UploadPassport from "./components/UploadPassport";
import UploadNationalIdCard from "./components/UploadNationalIdCard";
import { ActivityIndicator } from "react-native";
import { userService } from "services";
import { useUser } from "hooks";

export const UploadDocumentsModal = ({
  route: {
    params: { documentType },
  },
}: HomeStackScreenProps<"UploadDocumentsModal"> &
  CardsStackScreenProps<"UploadDocumentsModal"> &
  MenuStackScreenProps<"UploadDocumentsModal">) => {
  const navigation = useNavigation<
    HomeNavigation & CardsNavigation & MenuNavigation
  >();

  const { colors } = useTheme();
  const { updateUser } = useUser();
  const [verificationSent, setVerificationSent] = useState(false);
  const [formData, setFormData] = useState<FormData>(new FormData());
  const [verificationMethod, setVerificationMethod] = useState<"passport" | "id_card">();
  const [sending, setSending] = useState(false);
  const [loading, setLoading] = useState(false);
  const [passportFilename, setPassportFilename] = useState<string | null>(null);
  const [userPhotoFilename, setUserPhotoFilename] = useState<string | null>(null);
  const [idCardBackFilename, setIdCardBackFilename] = useState<string | null>(null);
  const [idCardFrontFilename, setIdCardFrontFilename] = useState<string | null>(null);
  const [isValid, setIsValid] = useState(false);

  const onUploadPassportPress = () => {
    setVerificationMethod("passport");
    formData.append("verificationMethod", "passport");
    addFormDataField("passport");
  }

  const onUploadProfilePhotoPress = () => {
    addFormDataField("user_photo");
  }

  useEffect(() => {
    if (
      (passportFilename || (idCardBackFilename && idCardFrontFilename)) &&
      userPhotoFilename &&
      verificationMethod?.length
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [passportFilename, userPhotoFilename, verificationMethod])

  const addFormDataField = (field: "passport" | "user_photo" | "id_card_back" | "id_card_front") => {
    setLoading(true);
    ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      base64: true,
      selectionLimit: 1
    }).then(v => {
      const data = v.assets?.at(0);
      const base64 = data?.base64
      if(base64) {
        formData.append(field, base64);
        switch (field) {
          case "passport":
            setPassportFilename(data.fileName ?? "Uploadé")
            break;

          case "user_photo":
            setUserPhotoFilename(data.fileName ?? "Uploadé")
            break;

          case "id_card_back":
            setIdCardBackFilename(data.fileName ?? "Uploadé");
            break;

          case "id_card_front":
            setIdCardFrontFilename(data.fileName ?? "Uploadé");
            break;

          default:
            break;
        }
      }
    }).finally(() => setLoading(false))
  }

  const handleVerify = useCallback(
    () => {
      setSending(true);
      userService
        .kycVerification(formData)
        .then((res) => {
          updateUser(res)
          setVerificationSent(true);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => setSending(false));
    },
    [],
  )

  const closeVerification = () => {
    navigation.goBack();
    setTimeout(() => {
      navigation.popToTop();
    }, 300);
  };

  const closeModal = () => navigation.goBack();

  const renderIdDocumentsForm = () => {
    if (documentType === "passport") {
      return <UploadPassport onPress={onUploadPassportPress} filename={passportFilename} />;
    }

    return <UploadNationalIdCard />;
  };

  const renderLoading = () => {
    if(loading) {
      return (
        <Box width={"100%"} height={"100%"} position="absolute" justifyContent="center" style={{ backgroundColor: "rgba(0,0,0,.5)" }}>
          <ActivityIndicator color={"#fff"} />
        </Box>
      )
    }

    return null;
  }

  return (
    <Container>
      {renderLoading()}
      {verificationSent ? (
        <Box
          alignItems="center"
          paddingHorizontal="l"
          flex={1}
          justifyContent="center"
        >
          <IconDone fontSize={125} color={colors.success} />
          <Text marginTop="none" variant="title">
            Vérification terminée
          </Text>
          <Text textAlign="center" marginBottom="xl">
            Vos documents sont en cours d'examen, vous serez notifié une fois
            que cela sera terminé.
          </Text>
          <Button
            loading={false}
            disabled={false}
            onPress={closeVerification}
            text="Retourner"
            fullWidth
          />
        </Box>
      ) : (
        <Box marginHorizontal="m" marginBottom="l" flex={1} justifyContent="space-between">
          <Box marginTop="s">
            <Text variant="title" marginBottom="l">
              Uploadez votre document
            </Text>
            {renderIdDocumentsForm()}
            <UploadPhoto onPress={onUploadProfilePhotoPress} filename={userPhotoFilename} />
          </Box>
          <Box alignItems="center">
            <Button
              loading={sending}
              disabled={sending || !isValid}
              onPress={handleVerify}
              text="Vérifier"
              fullWidth
            />
            <Box marginBottom="l">
              <Clickable disabled={sending} onPress={closeModal} style={{ borderBottomWidth: 1, opacity: sending ? .5 : 1 }}>
                <Text marginBottom="none" variant="button">Annuler</Text>
              </Clickable>
            </Box>
          </Box>
        </Box>
      )}
    </Container>
  );
};
