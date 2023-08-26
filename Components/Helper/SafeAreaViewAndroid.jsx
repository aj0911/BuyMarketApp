import { View, Text, Platform, StatusBar, SafeAreaView } from 'react-native'
import React from 'react'

const SafeAreaViewAndroid = ({Component}) => {
  return (
    <View style={{paddingTop:Platform.OS==="android"?StatusBar.currentHeight:0}}>
      <SafeAreaView>
        <Component/>
      </SafeAreaView>
    </View>
  )
}

export default SafeAreaViewAndroid