import React from 'react'
import { View, TouchableOpacity, Image } from 'react-native'



const IconComp = ({ image, width, height }) => {
  return (
      <TouchableOpacity onPress={() => console}>
        <Image source={image} style={{ width, height }} />
      </TouchableOpacity>
  )
}

IconComp.defaultProps = {
  width: 22,
  height: 22
}

export default IconComp
