import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { useNavigation } from "@react-navigation/native";
import { CardsNavigation, HomeNavigation, MenuNavigation } from "Routes";
import {
  Box,
  Clickable,
  Container,
  IconButton,
  Text,
  useTheme,
} from "components";
import React from "react";
import { StyleSheet } from "react-native";

export const UploadDocuments = () => {
  const navigation = useNavigation<
    HomeNavigation & CardsNavigation & MenuNavigation
  >();

  const handlePassport = () => {
    navigation.navigate("UploadDocumentsModal", { documentType: "passport" });
  };

  const handleNationalIdCard = () => {
    navigation.navigate("UploadDocumentsModal", { documentType: "id_card" });
  };

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
      </Container>
    </BottomSheetModalProvider>
  );
};

type ItemProps = {
  text: string;
  onPress?: () => void;
};

const Item = ({ text, onPress }: ItemProps) => {
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
