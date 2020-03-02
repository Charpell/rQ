import React, { useContext, useEffect, useState } from 'react'
import { TextInput, View, KeyboardAvoidingView, Alert } from 'react-native'
import { useForm } from 'react-hook-form'

import { Button, BackButton, Block, Input, Text, ForwardButton, LottieAnimation, ToggleIcon } from '../../components';
import { AuthContext } from '../../contex/auth/authState'
import { SizeClassIOS } from 'expo/build/ScreenOrientation/ScreenOrientation';

interface Props {
  navigation: any
}

export default function SignInScreen ({ navigation }) {
  const authContext = useContext(AuthContext)
  const { login, error } = authContext
  const [ loading, setLoading ] = useState(false)
  const [ toggle, setToggle ] = useState(false)

  const { register, handleSubmit, setValue, errors } = useForm()

  useEffect(() => {
    register({ name: "phone"}, { required: true, maxLength: 11, minLength: 10, pattern: /\d+/ })
    register({ name: "password"}, { required: true })
  }, [register])

  const onSubmit = data => {
      setLoading(true)
      login(data)
        .then((response) => {
          if (response.status === 'success') {
            setLoading(false)
            navigation.navigate("Home")
          } else {
          setLoading(false)
          Alert.alert(response.data.message)
          }
        })
        .catch((err) => {
          // setLoading(false)
          return
        })
     
  }

  if (loading) {
    return (
      <LottieAnimation />
    )
  }
  console.log('errors', errors)

  return (
    <KeyboardAvoidingView style={{ flex: 1, justifyContent: 'center' }} behavior="padding">
      <View style={{ flex: 1, backgroundColor: '#F2F5F8', paddingHorizontal: 20, paddingTop: 50 }}>
      <BackButton navigation={navigation} />
      <View style={{ marginTop: 40, flex: 0.2 }}>
        <Text primary semibold h1 marginBottom={40}>Sign In</Text>
        <Text primary subtitle marginTop>Hello there, sign in to continue </Text>
      </View>
      
      <View style={{ marginTop: 130 }}>
        <View style={{ marginBottom: 40 }}>
          <TextInput 
            style={{
              width: '100%',
              backgroundColor: '#ffffff',
              padding: 20,
              borderRadius: 15,
              marginBottom: 1
            }}
            placeholder={'Phone Number'}
            onChangeText={text => {
              setValue("phone", text)
            }}
            autoFocus
            keyboardType={"phone-pad"}
          />
          {errors.phone && <Text>Couldn't find your Phone Number</Text>}
        </View>
        <View>
          <View  style={{ flexDirection: 'row', }}>
            <TextInput 
              style={{
                width: '100%',
                backgroundColor: '#ffffff',
                padding: 20,
                borderRadius: 15,
                marginBottom: 70
              }}
              placeholder={'Enter Pin'}
              onChangeText={text => {
                setValue("password", text)
              }}
              secureTextEntry={!toggle}
            />
            <ToggleIcon toggle={toggle} setToggle={setToggle} />
          </View>
          {errors.password && <Text>Pin is required</Text>}
        </View>
      </View>

      

      <View style={{ height: 200, alignItems: 'center', justifyContent: 'flex-end'}}>
      <Button onPress={() => navigation.navigate('FinalScreen')} style={{ marginVertical: 20, width: 300, borderRadius: 10, height: 50 }}>
      {/* onPress={handleSubmit(onSubmit)} */}
            
             
            <Text semibold white center>Log in</Text>
            <ForwardButton />
         
      
      </Button>

      <Button withoutFeedback onPress={() => navigation.navigate('SignUpScreen')}>
            <Text secondary subtitle style={{ marginTop: 20 }}>
              Don't have an account? <Text primary semibold>Create Account</Text>
            </Text>
          </Button>

          <Button withoutFeedback onPress={() => navigation.navigate('SignInScreen')}>
           
             <Text primary caption marginTop={15}>Forgot Password?</Text>
          </Button>
          </View>

    </View>
    </KeyboardAvoidingView>
  )
}

