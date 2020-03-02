import React, { useEffect } from 'react'
import { View, StyleSheet, Image } from 'react-native'

import { Button, Block, Input, Text, ForwardButton } from '../../components';
import { getStorageData } from '../../utils/AsyncStorage'

import { images, theme } from "../../constants";
const { SIZES, COLORS } = theme;
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
              source={images.icon}
            />
          </View>
          

          <View style={{ marginTop: 20 }}>
            <Text primary bold h3 marginBottom>Welcome</Text>
            <Text primary subtitle marginTop={SIZES.bases * 4}>Freedom of Banking at your finger tip.</Text>
          </View>
          

          <View style={{ height: 200, alignItems: 'center', justifyContent: 'flex-end'}}>
          <Button  onPress={() => navigation.navigate('SignUpScreen')} style={{ marginVertical: 20, width: 300, borderRadius: 10, height: 50 }}>
            
             
                <Text semibold white center>Create an Account</Text>
                <ForwardButton />
             
          
          </Button>

          <Button withoutFeedback onPress={() => navigation.navigate('SignInScreen')}>
            <Text secondary  style={{ marginTop: 20 }}>
              Already have a account? <Text primary semibold>Sign in</Text>
            </Text>
          </Button>

          <Button withoutFeedback onPress={() => navigation.navigate('SignInScreen')}>
           
             <Text primary caption marginTop={15}>Forgot Password?</Text>
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
    backgroundColor: COLORS.background,
    paddingHorizontal: 20
  },
  mainContainer: {
    flex: 0.7,
    paddingTop: 50
    
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