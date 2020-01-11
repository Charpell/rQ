import React, { Component } from 'react'
import { Dimensions, Image, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView, View } from 'react-native'

import { Block, Button, Text, Card, Badge, MenuButton, NotificationButton, Notifications } from '../../components'
import { theme } from '../../constants';
import { profile, categories } from '../../data'

const { width } = Dimensions.get('window');
const { SIZES, COLORS } = theme
import { AntDesign } from '@expo/vector-icons'



class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  }
  
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      categories: []
    }
  }

  componentDidMount() {
    this.setState({ categories: this.props.categories });
  }



  render() {
    const { profile, navigation } = this.props;
    const { categories } = this.state;

    return (
      <Block safe>
        <Notifications />
        <Block flex={false} row center space="between" margin={[25, 35]}>
          <MenuButton navigation={this.props.navigation} />
          <Block flex={false} center middle>
            <Text body gray2 semibold>Welcome Back,</Text>
            <Text h4 bold>David Azemoh</Text>
          </Block>
          
          <TouchableOpacity onPress={() => console.log('here')}>
            <NotificationButton />
          </TouchableOpacity>
        </Block>

        <View style={styles.item}>
        <Text h4 primary>AVAILABLE BALANCE: <Text h4 bold>{5000}</Text></Text>
        <AntDesign name="pluscircleo" size="20" color={COLORS.primary} />
        </View>
  
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ paddingVertical: SIZES.base * 2}}
        >
          <Block flex={false} row space="between" margin={[25, 15]} style={styles.categories}>
            {categories.map(category => (
              <TouchableOpacity
                key={category.name}
                onPress={() => navigation.navigate('Explore', { category })}
              >
                <Card center middle shadow style={styles.category} padding={[20, 30]}>
                  <Badge margin={[0, 0, 15]} size={50} color="rgba(41,216,143,0.20)">
                    <Image source={category.image} />
                  </Badge>
                  <Text medium height={20}>{category.name}</Text>
                </Card>
              </TouchableOpacity>
            ))}
          </Block>
        </ScrollView>
      </Block>

    )
  }
}

HomeScreen.defaultProps = {
  profile,
  categories
}


export default HomeScreen


const styles = StyleSheet.create({
  tabs: {
    borderBottomColor: COLORS.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  tab: {
    marginRight: SIZES.base * 2,
    paddingBottom: 14,
    marginRight: 30
  },
  active: {
    borderBottomColor: COLORS.secondary,
    borderBottomWidth: 3,
  },
  categories: {
    flexWrap: 'wrap',
    paddingHorizontal: SIZES.base * 2,
    marginBottom: SIZES.base * 3.5,
  },
  category: {
    // this should be dynamic based on screen width
    minWidth: (width - (SIZES.padding * 2.4) - SIZES.base) / 2,
    maxWidth: (width - (SIZES.padding * 2.4) - SIZES.base) / 2,
    maxHeight: (width - (SIZES.padding * 2.4) - SIZES.base) / 2,
    marginBottom: 20,
    // paddingBottom: 20
  },
  item: {
    width: '84%',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: 10,
    elevation:4,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "grey",
    shadowOpacity: 0.5,
    shadowRadius: 10,
    marginLeft: 30
  }
})
