import BottomSheet, { BottomSheetModal, BottomSheetModalProvider, BottomSheetScrollView, BottomSheetView } from '@gorhom/bottom-sheet';
import { useNavigation } from "@react-navigation/native";
import { CardsNavigation, HomeNavigation, MenuNavigation } from "Routes";
import {
  Box,
  Button,
  Clickable,
  Container,
  IconButton,
  IconDone,
  Text,
  useTheme,
} from "components";
import React, { createRef, useCallback, useMemo, useRef, useState } from "react";
import { StyleSheet } from "react-native";
import { ModalBackdrop } from './components/ModalBackdrop';
import UploadPhoto from './components/UploadPhoto';
import UploadPassport from './components/UploadPassport';
import UploadNationalIdCard from './components/UploadNationalIdCard';

export const UploadDocuments = () => {
  const navigation = useNavigation<HomeNavigation & CardsNavigation & MenuNavigation>();

  const { colors } = useTheme();
  const [documentType, setDocumentType] = useState<'id_card' | 'passport' | 'driver_licence'>();
  const uploadRef = useRef<BottomSheetModal>(null);
  const [verificationSent, setVerificationSent] = useState(false);
  
  const handlePassport = () => {
    setDocumentType("passport");
    uploadRef.current?.present();
  }

  const handleNationalIdCard = () => {
    setDocumentType("id_card");
    uploadRef.current?.present();
  }

  const handleVerify = () => {
    setVerificationSent(true)
  }

  const closeVerification = () => {
    uploadRef.current?.close();
    setTimeout(() => {
      navigation.popToTop();
    }, 300);
  }

  const closeModal = () => uploadRef.current?.close();

  const snapPoints = useMemo(() => ["90%", "90%"], []);

  return (
    <BottomSheetModalProvider>
      <Container innerPadding>
        <Text marginTop="l">
          Sélectionnez un type de document pour continuer
        </Text>
        <Box marginTop="m">
          <Item
            text="Carte d'identité nationale"
            onPress={handleNationalIdCard}
          />
          <Item text="Passeport" onPress={handlePassport} />
          {/* <Item text="Permis de conduire" /> */}
        </Box>
        <BottomSheetModal
          ref={uploadRef}
          index={0}
          snapPoints={snapPoints}
          backdropComponent={ModalBackdrop}
          enableDismissOnClose
          enablePanDownToClose={false}
          containerStyle={{ flex: 1 }}
        >
          <BottomSheetScrollView contentContainerStyle={{ flex: 1 }}>
            {verificationSent ? (
              <Box alignItems="center" paddingHorizontal='l' flex={1} justifyContent='center'>
                <IconDone fontSize={125} color={colors.success}/>
                <Text marginTop='none' variant="title">Vérification KYC terminée</Text>
                <Text textAlign='center' marginBottom='xl'>Vos documents sont en cours d'examen, vous serez notifié une fois que cela sera terminé.</Text>
                <Button
                    loading={false}
                    disabled={false}
                    onPress={closeVerification}
                    text="Retourner"
                    fullWidth
                  />
              </Box>
            ) : (
              <Box marginHorizontal="m" flex={1} justifyContent="space-between">
                <Box>
                  <Text variant="title" marginBottom="l">
                    Uploadez votre document
                  </Text>
                  {documentType == "passport" ? (
                    <UploadPassport />
                  ) : (
                    <UploadNationalIdCard />
                  )}
                  <UploadPhoto />
                </Box>
                <Box alignItems="center">
                  <Button
                    loading={false}
                    disabled={false}
                    onPress={handleVerify}
                    text="Vérifier"
                    fullWidth
                  />
                  <Box marginBottom="m">
                    <Clickable onPress={closeModal}>
                      <Text variant="button">Annuler</Text>
                    </Clickable>
                  </Box>
                </Box>
              </Box>
            )}
          </BottomSheetScrollView>
        </BottomSheetModal>
      </Container>
    </BottomSheetModalProvider>
  );
};

type ItemProps = {
  text: string;
  onPress?: () => void;
};

export const Item = ({ text, onPress }: ItemProps) => {
  const { spacing } = useTheme();

  return (
    <Box
      marginTop="m"
      borderBottomColor="muted"
      style={{
        borderBottomWidth: StyleSheet.hairlineWidth,
        paddingBottom: spacing.s,
      }}
    >
      <Clickable
        onPress={onPress}
        style={{ flexDirection: "row", alignItems: "center" }}
      >
        <Text variant="button">{text}</Text>
        <Box alignItems="flex-end" opacity={0.5} flex={1}>
          <IconButton icon="chevron-forward" />
        </Box>
      </Clickable>
    </Box>
  );
};
