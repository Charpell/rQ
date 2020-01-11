import React from 'react'
import { View, Text } from 'react-native'
import LottieView from 'lottie-react-native'

const LottieAnimation = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#ffffff', paddingHorizontal: 20, paddingTop: 50 }}>
      <LottieView source={require('../assets/lootie/lottie-loading-fluid.json')} />
    </View>
  )
}

export default LottieAnimation
