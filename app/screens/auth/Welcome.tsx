import React from 'react'
import { Container } from 'components'
import { AuthStackScreenProps } from 'Routes'
import WelcomeLight from './component/WelcomeLight'

const Welcome = ({ navigation }: AuthStackScreenProps<'Welcome'>) => {
  const login = () => navigation.navigate('Login');
  const register = () => navigation.navigate('Register');

  return (
    <Container>
      <WelcomeLight onLogin={login} onRegister={register} />
    </Container>
  )
}

export default Welcome
