import React from 'react'
import { View, FlatList, StyleSheet, TouchableOpacity } from 'react-native'

import { Text, Badge, IconComp, Block } from '../components'
import { service } from '../data'

const FavouriteService = () => {
  return (
    <View style={{ flex: 0.4 }}>
      <Text style={{ marginTop: 20, paddingHorizontal: 20 }}>Favourite service</Text>
      <View style={styles.sevice}>
        {service.map((data, index) => (
          <View style={{ width: '30%',  margin: 5, padding: 10, backgroundColor: '#ffffff', height: 100, justifyContent: 'space-around', marginTop: 20, borderRadius: 14 }}>
            <View style={{ alignSelf: 'center'}}>
            <Badge margin={[0, 0, 15]} size={50} color="rgba(41,216,143,0.20)">
              <IconComp color={'red'} />
            </Badge>
            </View>
            <View style={{ width: '100%'}}>
              <Text center caption>{data.name}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  )
}

export default FavouriteService

const styles = StyleSheet.create({
  sevice: {
    flexWrap: "wrap",
    // paddingHorizontal: 32,
    marginBottom: 16 * 3.5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 10
  }
})