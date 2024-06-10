import React from 'react'
import { Container } from 'components'
import Balance from './components/Balance'
import Header from './components/Header'
import VerifyIdentityAlert from './components/VerifyIdentityAlert'
import Transactions from './components/Transactions'
import TopUpButton from './components/TopUpButton'

const Home = () => {
  return (
    <Container innerPadding>
      <Header />
      <Balance />
      <TopUpButton />
      <VerifyIdentityAlert />
      <Transactions />
    </Container>
  );
}

export default Home
