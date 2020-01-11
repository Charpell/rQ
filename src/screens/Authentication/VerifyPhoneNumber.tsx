import React, { useContext, useEffect } from 'react'
import { View, TextInput, Image } from 'react-native'
import { useForm } from 'react-hook-form'

import { Button, Block, Input, Text, ForwardButton, BackButton } from '../../components';

import { AuthContext } from '../../contex/auth/authState'


export default function VerifyPhoneNumber ({ navigation }) {
  const authContext = useContext(AuthContext)
  const { verifyOtp, phone } = authContext

  const { register, handleSubmit, setValue} = useForm()

  const onSubmit = data => {
    navigation.navigate('UserDetailsScreen')
    verifyOtp({
      "verifyPhoneToken": `${data.first}${data.second}${data.third}${data.fourth}`
    })
  }

  useEffect(() => {
    register({ name: "first" }, { required: true, maxLength: 1 })
    register({ name: 'second'}, { required: true, maxLength: 1 })
    register({ name: "third"}, { required: true, maxLength: 1 })
    register({ name: "fourth"}, { required: true, maxLength: 1 })
  }, [register])
  


  return (
    <View style={{ flex: 1, backgroundColor: '#173CBC', paddingHorizontal: 20, paddingTop: 50 }}>
      <BackButton navigation={navigation} />

      <View style={{ marginTop: 20, flex: 0.2 }}>
        <Text white bold h3 marginBottom>Verify Phone Number</Text>
        <Text white font marginTop>Verify your account by entering the 4 digits code</Text>
        <Text white font>We sent to {phone.length === 10 ? `+234${phone}` : phone}</Text>
      </View>

      <View style={{ flex: 0.15, flexDirection: 'row', justifyContent: 'space-evenly' }}>
        <TextInput 
          style={{
            width: 70,
            height: 70,
            backgroundColor: '#ffffff',
            borderRadius: 15,
            textAlign: 'center'
          }}
          onChangeText={text => {
            setValue('first', text)
          }}
          autoFocus
        />
        <TextInput 
          style={{
            width: 70,
            height: 70,
            backgroundColor: '#0AC4BA',
            borderRadius: 15,
            textAlign: 'center'
          }}
          onChangeText={text => {
            setValue('second', text)
          }}
        />
        <TextInput 
          style={{
            width: 70,
            height: 70,
            backgroundColor: '#ffffff',
            borderRadius: 15,
            textAlign: 'center'
          }}
          onChangeText={text => {
            setValue('third', text)
          }}
        />
        <TextInput 
          style={{
            width: 70,
            height: 70,
            backgroundColor: '#ffffff',
            borderRadius: 15,
            textAlign: 'center'
          }}
          onChangeText={text => {
            setValue('fourth', text)
          }}
        />
      </View>

      <View style={{ flex: 0, alignItems: 'center' }}>
        <Button withoutFeedback onPress={() => navigation.navigate('Forgot')}>
            <Text gray2  >
              Didn't receive? <Text primary bold>Resend code in 00:30</Text>
            </Text>
          </Button>
      </View>
      

      <View style={{alignItems: 'center', justifyContent: 'flex-end', flex: 0.4 }}>
        <Button gradient onPress={handleSubmit(onSubmit)} style={{ marginBottom: 10, width: 300, borderRadius: 10, height: 50 }}>
            <Text bold white center>Verify</Text>
            <ForwardButton />
        </Button>
      </View>
    </View>
  )
}
