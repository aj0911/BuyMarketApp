import { View, Text, TextInput } from 'react-native'
import React from 'react'
import searchStyle from './Search.Style'
import indexStyle from '../../Index.style'
import homeStyle from '../Home/Home.Style'
import { Ionicons } from '@expo/vector-icons'
import Colors from '../../assets/Colors/Colors'
import { Image } from 'react-native'

const Search = () => {
  return (
    <View style={indexStyle.container}>
      <View style={homeStyle.searchBar}>
        <Ionicons size={25} color={Colors.navColorDarkLocation} name={'search'} style={homeStyle.search}/>
        <TextInput placeholder={'Search Here'} style={homeStyle.textInput} multiline />
        <Ionicons name='camera' size={25} color={Colors.bgWhite} style={homeStyle.camera}/>
      </View>
      <View style={searchStyle.products}>
        <Image style={searchStyle.banner} source={require('../../assets/Images/searchBanner.png')}/>
      </View>
    </View>
  )
}

export default Search