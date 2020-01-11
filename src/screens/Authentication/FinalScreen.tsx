import React, { useContext } from 'react'
import { View, Image, StyleSheet } from 'react-native'

import { Button, Block, Input, Text, ForwardButton } from '../../components';
import { AuthContext } from '../../contex/auth/authState'


const FinalScreen = () => {
  const authContext = useContext(AuthContext)
  const { state } = authContext
  console.log('state', state)
  return (
    <View style={styles.container}>
        <View style={{ flex: 0.4 }}></View>
        <View style={styles.mainContainer}>
          <View style={styles.mainContainer}>

            <View style={{ marginBottom: 20 }}>
              <Image 
                style={{ width: 100, height: 100 }}
                source={require('../../assets/images/logo.jpeg')}
              />
            </View>
            

            <View style={{ marginTop: 20 }}>
              <Text white bold h3 marginBottom>You are ready to go!</Text>
              <Text white font marginTop>Thanks for taking your time to create an</Text>
              <Text white font>account with us. now this is the fun part.</Text>
              <Text white font>Lets expolre the app</Text>
            </View>
            

            <View style={{ height: 200, alignItems: 'center', justifyContent: 'flex-end'}}>
            <Button gradient onPress={() => this.props.navigation.navigate('SignUpScreen')} style={{ marginVertical: 20, width: 300, borderRadius: 10, height: 50 }}>
              
               
                  <Text bold white center>Get Started</Text>
                  <ForwardButton />
               
            
            </Button>

            
            </View>
          </View>
        </View>
      </View>
  )
}

export default FinalScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#173CBC',
    paddingHorizontal: 20
  },
  mainContainer: {
    flex: 0.6,
    
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
