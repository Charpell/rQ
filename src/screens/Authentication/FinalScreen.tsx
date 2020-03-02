import React, { useContext } from 'react'
import { View, Image, StyleSheet, ImageBackground } from 'react-native'

import { Button, Block, Input, Text, ForwardButton } from '../../components';
import { AuthContext } from '../../contex/auth/authState'


const FinalScreen = () => {
  const authContext = useContext(AuthContext)
  const { state } = authContext
  console.log('state', state)
  return (
    
    <View style={styles.container}>
        <ImageBackground source={require('../../assets/images/confeti.png')} 
        style={{ 
          flex: 1,
          width: '100%',
          height: '100%',
          justifyContent: "center",
          alignItems: "center",
        }}>
        <View style={{ flex: 0.4 }}></View>
    <View>
   </View>
  
          <View style={styles.mainContainer}>
          <View style={styles.mainContainer}>

            <View style={{ marginBottom: 8 }}>
              <Image 
                style={{ width: 100, height: 100 }}
                source={require('../../assets/images/logo1.png')}
              />
            </View>

            

            <View style={{ marginTop: 10,  }}>
              <Text primary bold h3 marginBottom>You are ready to go!</Text>
              <Text primary font marginTop>Thanks for taking your time to create an</Text>
              <Text primary font>account with us. now this is the fun part.</Text>
              <Text primary font>Lets expolre the app</Text>
            </View>
            

            <View style={{ height: 200, alignItems: 'center', justifyContent: 'flex-end'}}>
            <Button  style={{ marginVertical: 20, width: 300, borderRadius: 10, height: 50 }}>
            
             
            <Text semibold white center>Get Started</Text>
            <ForwardButton />
         
      
      </Button>

            
            </View>
          </View>
        </View>
        </ImageBackground>
      </View>
  )
}

export default FinalScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F5F8',
    paddingHorizontal: 20
  },
  mainContainer: {
    flex: 0.6,
    paddingBottom:90
  },
  logo: {

  },
  headerContainer: {

  },
  buttonContainer: {

  },
  accountContainer: {

  },

})
