import { View, Text, Button, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import userStyle from './User.Style'

const User = ({navigation}) => {
  return (
    <ScrollView>
      <View style={userStyle.user}>
        <View style={userStyle.userBanner}>
          <Image style={userStyle.bannerImg} source={require('../../assets/Images/userBanner.jpg')}/>
        </View>
        <View style={userStyle.userInfo}>
          <Text style={userStyle.loginText}>Please login into your account</Text>
          <TouchableOpacity onPress={()=>navigation({screenName:'Login'})}>
            <Text style={userStyle.loginBtn}>Login</Text>
          </TouchableOpacity>
          <Image style={userStyle.userImg} source={require('../../assets/Images/defUser.jpg')}/>
        </View>
      </View>
    </ScrollView>
  )
}

export default User