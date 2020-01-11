import React, { useState, useContext, useEffect } from 'react'
import { View, TextInput, Switch } from 'react-native'
import { useForm } from 'react-hook-form'

import { Button, Block, Input, Text, ForwardButton, BackButton } from '../../components';
import { AuthContext } from '../../contex/auth/authState'

export default function UserDetailsScreen ({ navigation }) {
  const authContext = useContext(AuthContext)
  const { getUserDetail } = authContext

  const { register, handleSubmit, setValue, errors } = useForm()
  // state = {isSwitchOn: false}

  // toggleSwitch = (value) => {
  //   this.setState({
  //     isSwitchOn: !this.state.isSwitchOn
  //   })
  // }

  const onSubmit = data => {
    navigation.navigate('SetPinScreen')
    getUserDetail(data)
  }

  useEffect(() => {
    register({ name: 'email'}, { pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})
    register({ name: 'firstName'}, { required: true })
    register({ name: 'lastName'}, { required: true })
  }, [register])


  
  return (
    <View style={{ flex: 1, backgroundColor: '#173CBC', paddingHorizontal: 20, paddingTop: 50 }}>
      <BackButton navigation={navigation} />

      <View style={{ marginTop: 20, flex: 0.2 }}>
        <Text white bold h3 marginBottom>Experience Freedom of Banking</Text>
        <Text white font marginTop>Fill in your details to enable us serve you better</Text>
      </View>
      
      <View style={{ marginTop: 40 }}>
        <View style={{ marginBottom: 40 }}>
          <TextInput 
            style={{
              width: '80%',
              backgroundColor: '#ffffff',
              padding: 25,
              borderRadius: 15,
              marginBottom: 10
            }}
            placeholder={'Email Address'}
            onChangeText={text => {
              setValue("email", text)
            }}
          />
          {errors.email && <Text>Email is invalid</Text>}
        </View>
        <View style={{ marginBottom: 40 }}>
          <TextInput 
            style={{
              width: '80%',
              backgroundColor: '#ffffff',
              padding: 25,
              borderRadius: 15,
              marginBottom: 10
            }}
            placeholder={'First Name'}
            onChangeText={text => {
              setValue("firstName", text)
            }}
          />
          {errors.firstName && <Text>Please insert a valid First Name</Text>}
        </View>
        <View style={{ marginBottom: 40 }}>
          <TextInput 
            style={{
              width: '80%',
              backgroundColor: '#ffffff',
              padding: 25,
              borderRadius: 15,
              marginBottom: 10
            }}
            placeholder={'Last Name'}
            onChangeText={text => {
              setValue("lastName", text)
            }}
          />
          {errors.lastName && <Text>Please insert a valid Last Name</Text>}
        </View>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Switch 
          // onValueChange={this.toggleSwitch}
          // value={this.state.isSwitchOn}
        />
        <Text primary small marginLeft>By creating an account you agree to our term and conditions</Text>
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
