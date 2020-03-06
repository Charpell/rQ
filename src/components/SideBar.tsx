import React, { useState, useContext } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { FontAwesome, MaterialIcons, AntDesign } from '@expo/vector-icons'

import { AuthContext } from '../contex/auth/authState'

import { theme } from '../constants'
const { COLORS } = theme
import { sideMenuBar } from '../data'

let SideMenuWidth = 500

export default function SideBar ({ navigation, style }) {
  const [ active, setActive ] = useState(0)
  const authContext = useContext(AuthContext)

  const { logout } = authContext

  const handleLogout = () => {
    logout()
    navigation.navigate("SignInScreen")
  }
  
  return (
    <View style={[styles.sideMenu, style || {}]}>
      <View style={{ paddingHorizontal: 30, paddingVertical: 10 }}>
        <View style={ styles.header }>
              <View style={ styles.userInfosHolder }>
                  <Image style={ styles.avatar } source={{ uri: 'https://cl.ly/55da82beb939/download/avatar-default.jpg' }} />
                  <View style={ styles.userInfos }>
                      <Text style={ styles.username }>David</Text>
                      <Text style={{ color: 'white', fontSize: 14 }}>View and edit profile</Text>
                  </View>

              </View>
          </View>

          {
           sideMenuBar.map((data, index) => (
            <TouchableOpacity key={index} style={ [styles.menu, active === index ? styles.active : null ] } onPress={() => { setActive(index)
              navigation.navigate(data.screen)
            }}>
              <FontAwesome name={data.icon} color={'white'} size={24} />
                <Text style={styles.menuText} >{data.name}</Text>
            </TouchableOpacity>
           ))
         }
          <TouchableOpacity style={ styles.menu } onPress={() => handleLogout()}>
                <AntDesign name='logout' color={'white'} size={24} />
                <Text style={styles.menuText} >Logout</Text>
          </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  sideMenu: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: '100%',
    backgroundColor: COLORS.primary
  },
  sideMenuTitle: {
      marginLeft: 20,
      marginBottom: 30
  },
  menu: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingVertical: 10
  },
  menuText: {
      marginLeft: 20,
      fontSize: 16,
      color: 'white'
  },
  header: {
      marginTop: 40,
      marginBottom: 20
  },
  userInfosHolder: {
      flexDirection: 'row',
      justifyContent: 'space-between'
  },
  avatar: {
      width: 90,
      height: 90,
      borderRadius: 100,
    },
    userInfos: {
      height: 50,
      justifyContent: 'center'
  },
  username: {
      fontWeight: '700',
      fontSize: 20,
      color: 'white',
      marginBottom: 7
  },
  active: { 
    backgroundColor: 'rgba(255,255,255,0.3)', 
    borderRadius: 5
  }
})