import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

import { IconComp, Text } from '../components'

export default class Card extends Component {
  render() {
    return (
      <View style={[styles.container, styles.boxShadow]}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <IconComp name="eye" size={22} />
          <IconComp name="eye-with-line" size={22} />
        </View>
        <View>
          <Text gray2 caption style={{ marginBottom: 5 }}>Overall Account Balance</Text>
          <Text white h2>N 25, 000</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#173CBC",
    width: '100%',
    height: 154,
    borderRadius: 20,
    paddingHorizontal: 20,
    flex: 0.25,
    marginVertical: 20
  },
  boxShadow: {
    borderColor: '#000000',
    borderWidth: 1,
    overflow: 'hidden',
    shadowColor: 'yellow',
    shadowRadius: 10,
    shadowOpacity: 1
  }
})