import React, { useCallback, useState } from "react";
import { Container, UserNotVerified } from "components";
import Balance from "./components/Balance";
import Header from "./components/Header";
import Transactions from "./components/Transactions";
import SendOrReceive from "./components/SendOrReceive";
import { useUser } from "hooks";
import { ScrollView } from "react-native-gesture-handler";
import { RefreshControl } from "react-native";

const Home = () => {
  const {
    state: { user },
    userDetails,
  } = useUser();

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    userDetails().finally(() => setRefreshing(false));
  }, []);

  if (!user) {
    return null;
  }

  return (
    <Container innerPadding>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Header />
        {user.isVerified ? (
          <React.Fragment>
            <Balance />
            {/* <TopUpButton /> */}
            <SendOrReceive />
          </React.Fragment>
        ) : (
          <UserNotVerified status={user.status} />
        )}
        <Transactions />
      </ScrollView>
    </Container>
  );
};

export default Home;
