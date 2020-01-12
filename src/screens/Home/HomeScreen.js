import React, { useContext, useEffect } from 'react'
import { View, Text } from 'react-native'

import { VendorContext } from '../../contex'

const HomeScreen = () => {
  const vendorContext = useContext(VendorContext)
  
  const { state, getElectricityDetails, loading, getCabletvDetails } = vendorContext
  
  useEffect(() => {
    const formData = {
      "smartCardNumber": "7030660041",
      "cable": "DSTV"
    }
    getCabletvDetails(formData)
  }, [])
  console.log('state', state, loading)
  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  )
}

export default HomeScreen
