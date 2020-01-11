import React, { useContext, useEffect, useState } from 'react'
import { TextInput, View, Alert } from 'react-native'
import { useForm } from 'react-hook-form'

import { Button, Block, Input, Text, ForwardButton, BackButton, LottieAnimation, ToggleIcon } from '../../components';
import { AuthContext } from '../../contex/auth/authState'

interface Props {
  navigation: any
}

export default function SetPinScreen ({ navigation }) {
  const authContext = useContext(AuthContext)
  const { userId, userDetail, signup } = authContext
  const [ loading, setLoading ] = useState(false)
  const [ toggle, setToggle ] = useState(false)
  const [ toggle1, setToggle1 ] = useState(false)

  const { register, handleSubmit, setValue, errors } = useForm()

  const onSubmit = data => {
    if (data.password !== data.confirmPassword) {
      Alert.alert('Password not match')
      return
    }

    setLoading(true)
    signup({ userId, ...userDetail, ...data })
      .then((response) => {
        setLoading(false)
        if (response.status === 'success') {
          navigation.navigate('Home')
        } else {
          Alert.alert(response.data.message)
          setLoading(false)
        }
      })
      .catch((err) => {
        setLoading(false)
        return
      })
    
  }

  useEffect(() => {
    register({ name: 'password'}, { required: true, minLength: 3 })
    register({ name: 'confirmPassword'}, { required: true, minLength: 3 })
  }, [register])

  if (loading) {
    return (
      <LottieAnimation />
    )
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#173CBC', paddingHorizontal: 20, paddingTop: 50 }}>
      <BackButton navigation={navigation} />

      <View style={{ marginTop: 20, flex: 0.2 }}>
        <Text white bold h3 marginBottom>Set your PIN</Text>
        <Text white font marginTop>You will use this to Login next time</Text>
      </View>
      
      <View style={{ marginTop: 40 }}>
        <View style={{ marginBottom: 40 }}>
          <View>
            <TextInput 
              style={{
                width: '90%',
                backgroundColor: '#ffffff',
                padding: 25,
                borderRadius: 15,
                marginBottom: 10
              }}
              placeholder={'Enter Pin'}
              onChangeText={text => {
                setValue("password", text)
              }}
              secureTextEntry={!toggle}
            />
            <ToggleIcon toggle={toggle} setToggle={setToggle} />
          </View>
          {errors.password && <Text>Password must be greater than 3</Text>}
        </View>
        <View style={{ marginBottom: 40 }}>
          <View style={{ flexDirection: 'row' }}>
            <TextInput 
              style={{
                width: '90%',
                backgroundColor: '#ffffff',
                padding: 25,
                borderRadius: 15,
                marginBottom: 10
              }}
              placeholder={'Confirm Pin'}
              onChangeText={text => {
                setValue("confirmPassword", text)
              }}
              secureTextEntry={!toggle1}
            />
            <ToggleIcon toggle={toggle1} setToggle={setToggle1} />
          </View>
          {errors.confirmPassword && <Text>Password must be greater than 3</Text>}
        </View>
      </View>

      

      <View style={{alignItems: 'center', justifyContent: 'flex-end', flex: 0.4 }}>
        <Button gradient onPress={handleSubmit(onSubmit)} style={{ marginBottom: 10, width: 300, borderRadius: 10, height: 50 }}>
            <Text bold white center>Continue</Text>
            <ForwardButton />
        </Button>
      </View>

    </View>
  )
}
