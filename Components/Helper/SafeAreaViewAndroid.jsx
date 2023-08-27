import { View, Text, Platform, StatusBar, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'

const SafeAreaViewAndroid = ({Component,...rest}) => {
  return (
    <View style={{paddingTop:Platform.OS==="android"?StatusBar.currentHeight:0}}>
      <SafeAreaView>
        <ScrollView>
          <Component {...rest}/>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

export default SafeAreaViewAndroid