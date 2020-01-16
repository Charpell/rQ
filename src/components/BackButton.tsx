import React from 'react'
import { View, TouchableOpacity } from 'react-native'

import { Ionicons } from '@expo/vector-icons'


const BackButton = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="md-arrow-back" size={44} color={'#173CBC'} />
      </TouchableOpacity>
    </View>
  )
}

export default BackButton
