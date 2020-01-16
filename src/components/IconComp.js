import React from 'react'
import { View, TouchableOpacity } from 'react-native'

import { Entypo } from '@expo/vector-icons'


const IconComp = ({ name , size, color }) => {
  return (
      <TouchableOpacity onPress={() => console}>
        <Entypo name={name} size={size} color={color} />
      </TouchableOpacity>
  )
}

IconComp.defaultProps = {
  name: 'menu',
  size: 22,
  color: 'white'
}

export default IconComp
