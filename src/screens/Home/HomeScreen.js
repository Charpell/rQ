import React, { useContext, useEffect } from 'react'
import { View,  SafeAreaView } from 'react-native'

import { MenuButton, Avatar, FavouriteService, Text } from '../../components'
import Card from '../../components/Card'
import { theme } from '../../constants'

const { COLORS } = theme


const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 20, backgroundColor: COLORS.backgroundColor }}>
      <MenuButton />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flex: 0.1 }}>
        <View style={{ marginVertical: 20}}>
          <Text primary sfsemibold h3>Hi, Christopher Sani</Text>
          <Text secondary subtitle sfregular>Welcome back</Text>
        </View>
        <Avatar />
      </View>
      <Card />
      <FavouriteService />
    </SafeAreaView>
  )
}

export default HomeScreen
