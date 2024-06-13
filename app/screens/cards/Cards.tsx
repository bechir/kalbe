import {
  Box,
  Container,
  CreatePasscodeAlertButton,
  Text,
  VerifyIdentityButton
} from "components";
import React from "react";
import NoCard from "./components/NoCard";
import { CardsStackScreenProps } from "Routes";
import ClickToShowCardInfo from "./components/ClickToShowCardInfo";
import { ScrollView } from "react-native-gesture-handler";
import MyCards from "./components/MyCards";
import { EmptyReturnFn } from "types";
import { useUser, useVerifyIdentity } from "hooks";

const Cards = ({ navigation }: CardsStackScreenProps<"Cards">) => {
  const { state: { user } } = useUser();
  const { VerifyIdentityModal, toggleVerifyIdentityModal } = useVerifyIdentity();

  const onCardRequest = () => {
    navigation.navigate("CardRequest");
  };

  const handleCreatePasscode = () => {
    navigation.navigate("CreatePasscode");
  }

  if(!user) {
    return null;
  }

  return (
    <Container innerPadding>
      <VerifyIdentityModal />
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
