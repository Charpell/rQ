import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'

const LoadingOverlay = () => {
  return (
    <View style={{
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: "center",
      backgroundColor: "rgba(0,0,0,.2)"
    }}>
      <ActivityIndicator 
        animating
        size={"large"}
      />
    </View>
  )
}

export default LoadingOverlay
