import { View, Text } from 'react-native'
import React from 'react'
import homeStyle from './Home.Style'
import * as Location from 'expo-location'

const Home = ({}) => {
  return (
    <View style={homeStyle.home}>
      <Text>Home</Text>
    </View>
  )
}

export default Home