import React from 'react'
import { View } from 'react-native'

const CirIcon = ({ size, color, children}) => {
  return (
    <View style={{ width: size, height: size, borderRadius: size / 2, backgroundColor: color, alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
      {children}
    </View>
  )
}

CirIcon.defaultProps = {
  size: 10,
  color: '#F9B600'
}

export default CirIcon
