import React from 'react'
import { Container, VerifyIdentityButton } from 'components'
import Balance from './components/Balance'
import Header from './components/Header'
import Transactions from './components/Transactions'
import SendOrReceive from './components/SendOrReceive'
import { useUser, useVerifyIdentity } from 'hooks'

const Home = () => {
  const { state: { user } } = useUser();
  const { VerifyIdentityModal, toggleVerifyIdentityModal } = useVerifyIdentity();

  if(!user) {
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
        <React.Fragment>
          <VerifyIdentityButton onPress={toggleVerifyIdentityModal} />
          <VerifyIdentityModal />
        </React.Fragment>
      )}
      <Transactions />
    </Container>
  );
}

export default Home
