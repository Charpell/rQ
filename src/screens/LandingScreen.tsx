import React, { useEffect } from 'react'
import { View, Text, Image } from 'react-native'

import { getStorageData } from '../utils/AsyncStorage'

const LandingScreen = ({ navigation }) => {
  useEffect(() => {
    (async () => {
      let data = await getStorageData()
      try {
        if (data) {
          navigation.navigate("Home")
        } else {
          navigation.navigate("UserOnboarding")
        }
      } catch (err) {

      }
    })()
  }, [])
  return (
    <View style={{ flex: 1, backgroundColor: '#ffffff', justifyContent: 'center', alignItems: 'center' }}>
      <Image source={require('../assets/images/logo.jpeg')} style={{ width: 44, height: 44 }} />
    </View>
  )
}

export default LandingScreen
