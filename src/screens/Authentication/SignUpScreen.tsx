import React, { Component, useContext, useEffect, useState } from 'react'
import { View, TextInput, Image, ActivityIndicator, Alert } from 'react-native'
import { useForm } from 'react-hook-form'

import { Button, Block, Input, Text, ForwardButton, BackButton } from '../../components';

import { AuthContext } from '../../contex/auth/authState'
import { images, theme } from "../../constants";
const { SIZES, COLORS } = theme;


const SignUpScreen = ({ navigation }) => {
  const authContext = useContext(AuthContext)
  const [ loading, setLoading ] = useState(false)

  const { requestOtp } = authContext
  

  const onSubmit = data => {
    setLoading(true)
    requestOtp(data)
      .then((response) => {
        if (response.status === 'success') {
          setLoading(false)
          navigation.navigate('VerifyPhoneNumber')
        } else {
          Alert.alert(response.data.message)
          setLoading(false)
        }
      }).catch((err) => {
        setLoading(false)
        return
      })
  }

  const { register, handleSubmit, setValue, errors } = useForm()

  useEffect(() => {
    register({ name: 'phone'}, { required: true, maxLength: 11, minLength: 10 })
  }, [register])
  

  return (
    <View style={{ flex: 1, paddingHorizontal: 20, paddingTop: 50 }}>
      <BackButton navigation={navigation} />

      <View style={{ marginTop: 20, flex: 0.1 }}>

        <Text primary font marginTop>Please enter your Mobile Phone Number.</Text>
      </View>

      <View style={{
        marginTop: 40,
        padding: 10,
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 15,
        width: '100%'
      }}>
        <Image source={require('../../assets/images/nigeria.jpeg')} style={{ width: 44, height: 44 }}/>
        <Text light>+234</Text>
        <View
          style={{
          borderLeftWidth: 1,
          borderLeftColor: '#3F5F5F',
          height: 40,
          marginHorizontal: 10
          }}
        />
        <TextInput 
          style={{
            
            width: '50%'
          }}
          onChangeText={text => {
            setValue('phone', text)
          }}
        />
        {errors.phone && <Text>Please enter a valid phone number</Text>}
      </View>

      <View style={{alignItems: 'center', justifyContent: 'flex-end', flex: 0.6 }}>
          {loading ? (
            <ActivityIndicator 
              animating
              size={"large"}
            />
          ) : (
            <Button  onPress={handleSubmit(onSubmit)} style={{ marginBottom: 10, width: 300, borderRadius: 10, height: 50 }}>
                <Text semibold white center>Send Code</Text>
                <ForwardButton />
            </Button>
          )}

          <Button withoutFeedback onPress={() => navigation.navigate('SignInScreen')}>
            <Text secondary subtitle style={{ marginTop: 20 }}>
              Already have a account? <Text primary semibold>Sign in</Text>
            </Text>
          </Button>
          <Button withoutFeedback onPress={() => navigation.navigate('SignInScreen')}>
           
           <Text primary caption marginTop={15}>Forgot Password?</Text>
        </Button>
          </View>
    </View>
  )
}

export default SignUpScreen