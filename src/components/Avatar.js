import React, { Component } from 'react'
import { Image, View } from 'react-native'

import { images } from '../constants'

export default class Avatar extends Component {
  render() {
    return (
      <View style={{ width: 44, height: 44 }}>
        <Image source={images.ebuka} style={{ width: 44, height: 44, borderRadius: 22 }} />
        <View style={{ backgroundColor: 'red', width: 10, height: 10, borderRadius: 5, position: 'absolute', right: 0 }}>

        </View>
      </View>
    )
  }
}
