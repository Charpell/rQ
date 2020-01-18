import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

import { IconComp, Text, CirIcon } from '../components'
import { images } from '../constants'

export default class Card extends Component {
  render() {
    return (
      <View style={[styles.container, styles.boxShadow]}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 0.2 }}>
          <IconComp image={images.eye} />
          <IconComp image={images.analytics} />
        </View>
        <View style={{ flex: 0.4 }}>
          <Text gray2 caption sfregular>Overall Account Balance</Text>
          <Text white h2 sfsemibold>N 25, 000</Text>
        </View>
        <View style={{ flex: 0.4 }}>
          <Text gray2 caption sfregular>Total Savings</Text>
          <Text white h2 sfsemibold>N 5, 000</Text>
        </View>
        <View style={{ flex: 0.1 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
            <View style={{ padding: 5 }}>
              <CirIcon />
              <Text white sfregular small>Balance</Text>
            </View>
            <View style={{ padding: 5 }}>
              <CirIcon color={'#47E7C1'} />
              <Text white sfregular small>Savings</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#173CBC",
    width: '100%',
    // height: 100,
    borderRadius: 20,
    padding: 20,
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