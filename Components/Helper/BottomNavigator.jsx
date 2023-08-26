import { View, Text,Button } from 'react-native'
import React from 'react'
import indexStyle from '../../Index.style'
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from '../../assets/Colors/Colors';

const BottomNavigator = ({navigation,currNav}) => {
  return (
    <View style={indexStyle.BottomNavigator}>  
      <Ionicons style={indexStyle.BottomNavigatorButton} color={(currNav==='Home')?Colors.darkColor:Colors.navColorDark} name={(currNav==='Home')?'md-home':'md-home-outline'} onPress={()=>navigation('Home')}/>
      <Ionicons style={indexStyle.BottomNavigatorButton} color={(currNav==='Search')?Colors.darkColor:Colors.navColorDark} name={(currNav==='Search')?'search':'search-outline'} onPress={()=>navigation('Search')}/>
      <Ionicons style={indexStyle.BottomNavigatorButton} color={(currNav==='User')?Colors.darkColor:Colors.navColorDark} name={(currNav==='User')?'person':'person-outline'} onPress={()=>navigation('User')}/>
    </View>
  )
}

export default BottomNavigator