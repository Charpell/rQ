import React from 'react'
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'

import { images } from '../constants'


const MenuButton = ({ navigation }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.openDrawer()}>
      <Image source={images.menu} style={{ width: 22, height: 22 }} />
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
