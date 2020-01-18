import React from 'react'
import { View, Text } from 'react-native'

const CirIcon = ({ size, color }) => {
  return (
    <View style={{ width: size, height: size, borderRadius: size / 2, backgroundColor: color }}>
      
    </View>
  )
}

CirIcon.defaultProps = {
  size: 10,
  color: '#F9B600'
}

export default CirIcon
