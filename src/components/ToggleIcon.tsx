import React, { useState } from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const ToggleIcon = ({ toggle, setToggle }) => {

  return (
    <TouchableOpacity 
      style={{ position: 'absolute', top: 25, right: 60 }}
      onPress={() => setToggle(!toggle)}
      >
      <Ionicons 
        color={"#C5CCD6"}
        size={20}
        name={toggle ? "md-eye" : "md-eye-off"}
      />
    </TouchableOpacity>
  )
}

export default ToggleIcon
