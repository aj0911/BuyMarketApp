import { View, Text,Button } from 'react-native'
import React from 'react'
import indexStyle from '../../Index.style'
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from '../../assets/Colors/Colors';

const BottomNavigator = ({navigation,currNav}) => {
  return (
    <View style={indexStyle.BottomNavigator}>  
      <Ionicons style={indexStyle.BottomNavigatorButton} color={(currNav.screenName==='Home')?Colors.darkColor:Colors.navColorDark} name={(currNav.screenName==='Home')?'md-home':'md-home-outline'} onPress={()=>navigation({screenName:'Home'})}/>
      <Ionicons style={indexStyle.BottomNavigatorButton} color={(currNav.screenName==='Search')?Colors.darkColor:Colors.navColorDark} name={(currNav.screenName==='Search')?'search':'search-outline'} onPress={()=>navigation({screenName:'Search'})}/>
      <Ionicons style={indexStyle.BottomNavigatorButton} color={(currNav.screenName==='User')?Colors.darkColor:Colors.navColorDark} name={(currNav.screenName==='User')?'person':'person-outline'} onPress={()=>navigation({screenName:'User'})}/>
    </View>
  )
}

export default BottomNavigator