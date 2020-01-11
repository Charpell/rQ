import React, { useContext, useEffect, useState } from 'react'
import { TextInput, View, ActivityIndicator, Alert } from 'react-native'
import { useForm } from 'react-hook-form'

import { Button, Block, Input, Text, ForwardButton, BackButton, ToggleIcon } from '../../components';
import { AuthContext } from '../../contex/auth/authState'

interface Props {
  navigation: any
}

export default function VerifyResetPinScreen ({ navigation }) {
  const authContext = useContext(AuthContext)
  const { state, passwordReset } = authContext

  const [ toggle, setToggle ] = useState(false)
  const [ toggle1, setToggle1 ] = useState(false)
  const [ loading, setLoading ] = useState(false)

  const { register, handleSubmit, setValue, errors } = useForm()

  useEffect(() => {
    register({ name: 'resetPasswordPin'}, { required: true, minLength: 5, maxLength: 5 })
    register({ name: 'password'}, { required: true, minLength: 3 })
  }, [register])

  const onSubmit = data => {
    setLoading(true)
    passwordReset(data)
      .then((response) => {
        if (response.status === 'success') {
          Alert.alert(response.message)
          setLoading(false)
          navigation.navigate('SignInScreen')
        } else {
          Alert.alert(response.data.message)
          setLoading(false)
        }
      })
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#173CBC', paddingHorizontal: 20, paddingTop: 50 }}>
      <BackButton navigation={this.propsnavigation} />

      <View style={{ marginTop: 20, flex: 0.2 }}>
        <Text white bold h3 marginBottom>We've sent a Reset PIN on your Mobile for Verification</Text>
        <Text white font marginTop>Verify your account by entering the 4 digits code</Text>
        <Text white font>We sent to {state.message.phone}</Text>
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
              placeholder={'Reset Pin'}
              onChangeText={text => {
                setValue('resetPasswordPin', text)
              }}
              secureTextEntry={!toggle}
            />
            <ToggleIcon toggle={toggle} setToggle={setToggle} />
          </View>
          {errors.resetPasswordPin && <Text>Reset Pin should be 5</Text>}
        </View>
        <View style={{ marginBottom: 40 }}>
          <TextInput 
            style={{
              width: '90%',
              backgroundColor: '#ffffff',
              padding: 25,
              borderRadius: 15,
              marginBottom: 10
            }}
            placeholder={'New Pin'}
            onChangeText={text => {
              setValue('password', text)
            }}
            secureTextEntry={!toggle1}
          />
          <ToggleIcon toggle={toggle1} setToggle={setToggle1} />
          {errors.password && <Text>Password should be more than 3</Text>}
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
            <Text bold white center>Reset Pin</Text>
            <ForwardButton />
          </Button>
        )}
      </View>

    </View>
  )
}
