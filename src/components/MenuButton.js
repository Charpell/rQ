import React from 'react'
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons'

const MenuButton = ({ navigation }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.openDrawer()}>
      <Entypo name="menu" size="30" />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    // width: 60
  }, 
  logo: {
    width: 4,
    height: 4
  }
})
export default MenuButton
