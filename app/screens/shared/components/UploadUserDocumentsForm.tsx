import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


type UploadUserDocumentsFormProps = {
    onSuccess: () => void;
}

export const UploadUserDocumentsForm = ({ onSuccess }: UploadUserDocumentsFormProps) => {
  return (
    <View>
      <Text>UploadUserDocumentsForm</Text>
    </View>
  )
}

const styles = StyleSheet.create({})
