import React from 'react'
import { View } from 'react-native'

import { Text, BackButton, IconComp } from '../../components'
import theme from '../../utils/theme'
import { moneyCards } from '../../data'

const AddMoneyScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#F2F5F8', paddingHorizontal: 20 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '50%', paddingTop: 20}}>
        <BackButton navigation={navigation} />
        <Text h3  bold style={{ color: theme.COLORS.primary }}>Add Money</Text>
      </View>
      <Text caption style={{ color: theme.COLORS.primary }}>Top up your Rubeepay from multiple sources</Text>
      <View style={{ flexDirection: 'row' }}>
        {moneyCards.map((data, index) => (
          <View style={{ width: '30%', margin: 5, backgroundColor: theme.COLORS.primary, height: 100, borderRadius: 10, justifyContent: 'center', alignItems: 'center'}}>
            <IconComp />
            <Text white caption style={{ marginTop: 10}}>{data.name}</Text>
          </View>
        ))}
      </View>
    </View>
  )
}

export default AddMoneyScreen
