import React, { useState, useContext } from 'react'
import {  View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { FontAwesome, MaterialIcons, AntDesign } from '@expo/vector-icons'

import { AuthContext } from '../contex/auth/authState'
import {Button, ForwardButton, Block, Text, ImageIcon} from '../components'

import { COLORS, SIZES } from "../utils/theme";
import { sideMenuBar } from '../data'

let SideMenuWidth = 500

export default function SideBar ({ navigation, style }) {
  const [ active, setActive ] = useState(0)
  const authContext = useContext(AuthContext)

  const handleLogout = () => {
    logout()
    navigation.navigate("SignInScreen")
  }
  
  return (
    <View style={[styles.sideMenu, style || {}]}>
      <View style={{ paddingHorizontal: 20, paddingVertical: 10, paddingTop: 40 }}>
        <View style={ styles.header }>
              <View style={ styles.userInfosHolder }>
                  <ImageIcon name="chris" style={ styles.avatar } />
                  <View style={ styles.userInfos }>
              <Text primary sfmedium size={SIZES.subtitle}>Christopher Sani</Text>
                      <Block  paddingTop={7}>
                        <Button
                          secondary
                          center
                          middle
                          width={SIZES.width * 0.3}
                          height={SIZES.base * 3.5}
                          radius={SIZES.base * 12}
                        >
                          <Text
                            white
                            center
                            sfregular
                            height={SIZES.body}
                            size={SIZES.caption}
                          >
                            KYC Level 1
                          </Text>
                        </Button>
                      </Block>
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
      </View>
        
      <Block center paddingTop={18}>
        <Button
          
              gradient
              startColor={"#FFCA00"}
              endColor={"#FF9C52"}
              start
              end
              center
              middle
              width={SIZES.width * 0.4}
              height={SIZES.base * 3}
              radius={SIZES.cardRadius}
            >
              <Block space="between" center padding middle row>
              <Text
                white
                center
                sfregular
                height={SIZES.body}
                size={SIZES.caption}
                >
               Upgrade to Agent
              </Text>
                      <ImageIcon

                      name="badge"
                      />
                      </Block>
            </Button>
      </Block>
      
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
    width: "100%",
    backgroundColor: COLORS.white, 
    borderBottomRightRadius:35,
    borderTopRightRadius: 35,
  },
  sideMenuTitle: {
      marginLeft: 20,
      marginBottom: 30
  },
  menu: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 17,
      
  },
  menuText: {
      marginLeft: 35,
      fontSize: 15,
      fontWeight: "normal",
      color: '#173CBC'
  },
  header: {
      marginTop: 40,
      marginBottom: 20,
      paddingBottom: 15
  },
  userInfosHolder: {
      flexDirection: 'row',
      justifyContent: 'space-between'
  },
  avatar: {
      width: 64,
      height: 64,
      borderRadius: 64,
    },
    userInfos: {
      height: 50,
      justifyContent: 'center',
      paddingRight: 18,
  },
  username: {
      fontWeight: '500',
      fontSize: SIZES.subtitle,
      color: '#173CBC',
      marginBottom: 7
  },
  active: { 
    backgroundColor: 'rgba(255,255,255,0.3)', 
    borderRadius: 5
  }
})