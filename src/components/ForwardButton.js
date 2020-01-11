import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'


const ForwardButton = () => {
  return (
    <View style={{ width: 30, height: 30, borderRadius: 15, backgroundColor: '#22C69E', justifyContent: 'center', alignItems: 'center', position: 'absolute', right: 10 }}>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Campings')}>
        <Ionicons name="md-arrow-forward" size={20} color={'white'} />
      </TouchableOpacity>
    </View>
  )
}

export default ForwardButton
