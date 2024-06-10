import React, { useState } from "react";
import Toast from "react-native-toast-message";
import * as WebBrowser from 'expo-web-browser';
import {
  Box,
  Container,
  CreatePasscodeAlertButton,
  Text,
  VerifyIdentityButton,
  VerifyIdentityModal,
  theme,
} from "components";
import { ScrollView } from "react-native-gesture-handler";
import { MenuItem } from "./components/MenuItem";
import { useAuth, useUser } from "hooks";
import { MenuStackScreenProps } from "Routes";
import { Alert, Share } from "react-native";
import config from "config";

const Menu = ({ navigation }: MenuStackScreenProps<"Menu">) => {
  const {
    state: { user },
  } = useUser();
  const { signout } = useAuth();
  const [verifyModalVisible, setVerifyModalVisible] = useState(false);

  const toggleVerifyIdentityModal = () => {
    setVerifyModalVisible(!verifyModalVisible);
  };

  const handleLater = () => {
    // TODO log click 'later' event
    toggleVerifyIdentityModal();
  };

  const handleVerifyIdentity = () => {
    setVerifyModalVisible(false);
    navigation.navigate("VerifyIdentity");
  };

  const handleCreatePasscode = () => {
    navigation.navigate("CreatePasscode");
  };

  const handleSignout = () => {
    Alert.alert(
      "Déconnexion",
      "Vous allez être déconnecté de l'application. Continuer?",
      [
        {
          text: "Annuler",
          style: "cancel",
        },
        { text: "Déconnexion", style: "destructive", onPress: () => signout() },
      ]
    );
  };

  const renderSecurityAlert = () => {
    if (!user?.hasPasscode) {
      return <CreatePasscodeAlertButton onPress={handleCreatePasscode} />;
    } else if (!user.isVerified) {
      return <VerifyIdentityButton onPress={toggleVerifyIdentityModal} />;
    }

    return null;
  };

  if (!user) {
    return null;
  }

  return (
    <Container innerPadding>
      <Box marginBottom="s">
        <Text variant="title" marginVertical="none">
          Compte
        </Text>
        <Text variant="info">Bonjour, Kevin</Text>
      </Box>
      <VerifyIdentityModal
        visible={verifyModalVisible}
        onClose={handleLater}
        onStartPress={handleVerifyIdentity}
      />
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        {renderSecurityAlert()}
        <Box>
          <MenuItem text="Informations personelles" icon="person" hasArrow />
          {/* {user.hasPasscode && (
            <MenuItem text="Changer de code PIN" icon="lock-open" />
          )} */}
          <MenuItem
            text="Sécurité et Confidentialité"
            icon="shield-checkmark"
            hasTopBorder
            onPress={openPrivacyPage}
          />
          <MenuItem
            text="Conditions d'Utilisation"
            icon="document-text"
            onPress={openTermsPage}
          />
          <MenuItem
            text="Partager avec un ami"
            icon="share"
            hasTopBorder
            onPress={shareApp}
          />
          <MenuItem text="Discuter avec nous" icon="chatbox" hasArrow onPress={() => navigation.navigate("Support")} />
          <MenuItem
            onPress={handleSignout}
            text="Déconnexion"
            icon="log-out"
            hasTopBorder
            color="red"
          />
        </Box>
      </ScrollView>
    </Container>
  );
};

export default Menu;

function shareApp() {
  Share.share({
      title: `Téléchargez ${config.app.name}`,
      message: `Créez des cartes prépayées virtuelles pour vos achats en ligne. ${config.app.download_url.web}`
  }, {
      dialogTitle: `Téléchargez ${config.app.name}`,
  }).then(res => {
      if(res.action == "sharedAction") {
          Toast.show({
            type: "success",
            text1: "Merci!",
          })
      }
  })
}

function openPrivacyPage() {
  openPage('securite-et-confidentialite');
}

function openTermsPage() {
  openPage('conditions-utilisation');
}

function openPage(path: string) {
  WebBrowser.openBrowserAsync(`${config.app.url}/${path}`, {
    toolbarColor: theme.colors.tint,
    controlsColor: '#fff',
    readerMode: true,
  }).catch(() => Alert.alert("Impossible d'ouvrir le navigateur"))
}
