import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { AppLoading } from 'expo'
import { Asset } from 'expo-asset'

import { Block } from './src/components'

import Navigation from './src/navigation'
import AuthState from './src/contex/auth/authState'
import { VendorState } from './src/contex'

console.disableYellowBox = true;

const images = [
  require('./src/assets/icons/back.png'),
  require('./src/assets/icons/plants.png')
]

class Root extends Component {
  state = {
    isLoadingComplete: false
  }

  handleResourcesAsync = async () => {
    const cacheImages = images.map(image => {
      return Asset.fromModule(image).downloadAsync()
    })
    return Promise.all(cacheImages)
  }

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this.handleResourcesAsync}
          onError={error => console.warn(error)}
          onFinish={() => this.setState({ isLoadingComplete: true })}
        />
      )
    }

    return (
      <AuthState>
        <VendorState>
          <Block>
            <Navigation />
          </Block>
        </VendorState>
      </AuthState>
    )
  }
}

export default Root
