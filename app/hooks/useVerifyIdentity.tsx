import * as React from "react";
import Toast from 'react-native-toast-message';
import { useAuth, useUser } from "./contexts";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";
import { CardsNavigation, HomeNavigation, MenuNavigation } from "Routes";
import { VerifyIdentityModal as VerifyIdentityModalBase } from "components";

export function useVerifyIdentity() {

    const [verifyModalVisible, setVerifyModalVisible] = React.useState(false);
    const navigation = useNavigation<CardsNavigation & HomeNavigation & MenuNavigation>();

    const toggleVerifyIdentityModal = () => {
        setVerifyModalVisible(!verifyModalVisible);
      };
    
      const handleLater = () => {
        // TODO log click 'later' event
        toggleVerifyIdentityModal();
      };
    
      const handleVerifyIdentity = () => {
        toggleVerifyIdentityModal();
        navigation.navigate("VerifyIdentity");
      };

      const VerifyIdentityModal = () => (
        <VerifyIdentityModalBase
          visible={verifyModalVisible}
          onClose={handleLater}
          onStartPress={handleVerifyIdentity}
        />
      );

    return { VerifyIdentityModal, toggleVerifyIdentityModal }
}
