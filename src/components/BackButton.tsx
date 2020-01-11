import React from 'react'
import { View, TouchableOpacity } from 'react-native'

import { Ionicons } from '@expo/vector-icons'


const BackButton = ({ navigation }) => {
  return (
    <View style={{ flex: 0.1 }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="md-arrow-back" size={44} color={'white'} />
      </TouchableOpacity>
    </View>
  )
}

export default BackButton
