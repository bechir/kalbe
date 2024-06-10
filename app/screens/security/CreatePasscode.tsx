import React from 'react'
import { BackButtonHeader, FormContainer, Text } from 'components'
import { CreatePasscodeForm } from 'screens/shared'

const CreatePasscode = () => {

  const onSuccess = () => {}

  return (
    <FormContainer innerPadding>
      <BackButtonHeader type='close' />
      <CreatePasscodeForm onSuccess={onSuccess} />
    </FormContainer>
  )
}

export default CreatePasscode
