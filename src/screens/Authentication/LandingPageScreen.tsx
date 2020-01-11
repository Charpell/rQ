import React, { useEffect } from 'react'
import { View, StyleSheet, Image } from 'react-native'

import { Button, Block, Input, Text, ForwardButton } from '../../components';
import { getStorageData } from '../../utils/AsyncStorage'


// import { Logo } from '../../assets'
interface Props {
  navigation: any
}

export default function LandingPageScreen ({ navigation }) {
  useEffect(() => {
    (async () => {
      let data = await getStorageData()
    })()
  }, [])
  return (
    <View style={styles.container}>
      <View style={{ flex: 0.3 }}></View>
      <View style={styles.mainContainer}>
        <View style={styles.mainContainer}>

          <View style={{ marginBottom: 20 }}>
            <Image 
              style={{ width: 100, height: 100 }}
              source={require('../../assets/images/logoTransparent.png')}
            />
          </View>
          

          <View style={{ marginTop: 20 }}>
            <Text white bold h3 marginBottom>Welcome</Text>
            <Text white font marginTop>Freedom of Banking at your finger tip.</Text>
          </View>
          

          <View style={{ height: 200, alignItems: 'center', justifyContent: 'flex-end'}}>
          <Button gradient onPress={() => navigation.navigate('SignUpScreen')} style={{ marginVertical: 20, width: 300, borderRadius: 10, height: 50 }}>
            
             
                <Text bold white center>Create an Account</Text>
                <ForwardButton />
             
          
          </Button>

          <Button withoutFeedback onPress={() => navigation.navigate('SignInScreen')}>
            <Text gray2  style={{ marginTop: 20 }}>
              Already have a account? <Text white bold>Sign in</Text>
            </Text>
          </Button>
          </View>
        </View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A5F8B',
    paddingHorizontal: 20
  },
  mainContainer: {
    flex: 0.7,
    
  },
  logo: {

  },
  headerContainer: {

  },
  buttonContainer: {

  },
  accountContainer: {

  }
})