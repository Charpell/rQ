import React, { useContext, useEffect, useState } from 'react'
import { TextInput, View, ActivityIndicator, Alert } from 'react-native'
import { useForm } from 'react-hook-form'

import { Button, Block, Input, Text, ForwardButton, BackButton } from '../../components';
import { AuthContext } from '../../contex/auth/authState'

interface Props {
  navigation: any
}

export default function ResetScreen ({ navigation }) {
  const authContext = useContext(AuthContext)
  const { forgetPassword, state } = authContext
  const [ loading, setLoading ] = useState(false)

  const { register, handleSubmit, setValue, errors } = useForm()

  useEffect(() => {
    register({ name: 'phone'}, { required: true, maxLength: 11, minLength: 11 })
  }, [register])

  const onSubmit = data => {
    setLoading(true)
    forgetPassword(data)
      .then((response) => {
        if (response.status === 'success') {
          Alert.alert(response.message)
          setLoading(false)
          navigation.navigate('VerifyResetPinScreen')
        } else {
          Alert.alert(response.data.message)
          setLoading(false)
        }
      }).catch((err) => {
        setLoading(false)
        return
      })
  }

  console.log('state', state)

  return (
    <View style={{ flex: 1, backgroundColor: '#173CBC', paddingHorizontal: 20, paddingTop: 50 }}>
      <BackButton navigation={navigation} />

      <View style={{ marginTop: 20, flex: 0.2 }}>
        <Text white bold h3 marginBottom>Reset PIN</Text>
        <Text white font marginTop>No worries, we are here to help you.</Text>
      </View>
      
      <View style={{ marginTop: 40 }}>
        <View>
          <TextInput 
            style={{
              width: '90%',
              backgroundColor: '#ffffff',
              padding: 25,
              borderRadius: 15,
              marginBottom: 10
            }}
            placeholder={'Phone Number'}
            onChangeText={text => {
              setValue('phone', text)
            }}
          />
          {errors.phone && <Text>Please use a valid phone number</Text>}
        </View>
      </View>

      

      <View style={{alignItems: 'center', justifyContent: 'flex-end', flex: 0.4 }}>
        {loading ? (
          <ActivityIndicator 
            animating
            size={"large"}
          />
        ) : (
          <Button gradient onPress={handleSubmit(onSubmit)} style={{ marginBottom: 10, width: 300, borderRadius: 10, height: 50 }}>
            <Text bold white center>Send Code</Text>
            <ForwardButton />
          </Button>
        )}
      </View>

    </View>
  )
}
