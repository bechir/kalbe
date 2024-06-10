import {
  Box,
  Container,
  CreatePasscodeAlertButton,
  IconButton,
  Text,
  VerifyIdentityButton,
  VerifyIdentityModal,
} from "components";
import React, { useState } from "react";
import NoCard from "./components/NoCard";
import { CardsStackScreenProps } from "Routes";
import ClickToShowCardInfo from "./components/ClickToShowCardInfo";
import { ScrollView } from "react-native-gesture-handler";
import MyCards from "./components/MyCards";
import { EmptyReturnFn } from "types";
import { useUser } from "hooks";

const Cards = ({ navigation }: CardsStackScreenProps<"Cards">) => {
  const { state: { user } } = useUser();
  const [verifyModalVisible, setVerifyModalVisible] = useState(false);

  const onCardRequest = () => {
    navigation.navigate("CardRequest");
  };

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

  const handleCreatePasscode = () => {
    navigation.navigate("CreatePasscode");
  }

  if(!user) {
    return null;
  }

  return (
    <Container innerPadding>
      <VerifyIdentityModal
        visible={verifyModalVisible}
        onClose={handleLater}
        onStartPress={handleVerifyIdentity}
      />
      <CardTitle onCardRequest={onCardRequest} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ClickToShowCardInfo />
        {user.isVerified ? (
          <MyCards />
        ) : (
          <React.Fragment>
            {!user.hasPasscode && <CreatePasscodeAlertButton onPress={handleCreatePasscode} />}
            {!user.isVerified && <VerifyIdentityButton onPress={toggleVerifyIdentityModal} />}
            <NoCard buttonDisabled={!user.isVerified} onCardRequest={onCardRequest} />
          </React.Fragment>
        )}
      </ScrollView>
    </Container>
  );
};

const CardTitle = ({ onCardRequest }: { onCardRequest: EmptyReturnFn }) => (
  <Box marginBottom="s" flexDirection="row" justifyContent="space-between" alignItems="center">
    <Box>
      <Text marginVertical="none" variant="title">
        Carte virtuelle
      </Text>
      <Text variant="info">Gérez votre carte virtuelle</Text>
    </Box>
    {/* <IconButton onPress={onCardRequest} inverse size="s" icon="add" hasBgColor /> */}
  </Box>
);

export default Cards;
