import React from "react";
import { Container, UserNotVerified } from "components";
import Balance from "./components/Balance";
import Header from "./components/Header";
import Transactions from "./components/Transactions";
import SendOrReceive from "./components/SendOrReceive";
import { useUser } from "hooks";

const Home = () => {
  const {
    state: { user },
  } = useUser();

  if (!user) {
    return null;
  }

  return (
    <Container innerPadding>
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
    </Container>
  );
};

export default Home;
