import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import BottomNavigator from './Components/Helper/BottomNavigator'
import indexStyle from './Index.style'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Screens/Home/Home';
import Search from './Screens/Search/Search';
import User from './Screens/User/User';
import SafeAreaViewAndroid from './Components/Helper/SafeAreaViewAndroid';

const Index = () => {
    const [navigate,setNavigation]=useState({screenName:'Search'});
  return (
    <View style={indexStyle.root}>
        {
            (()=>{
                if(navigate.screenName==='Home')return <SafeAreaViewAndroid Component={Home} navigation={setNavigation}/>
                else if(navigate.screenName==='Search')return <SafeAreaViewAndroid Component={Search} navigation={setNavigation}/>
                else if(navigate.screenName==='User')return <SafeAreaViewAndroid Component={User} navigation={setNavigation}/>
            })()
        }
        <BottomNavigator currNav={navigate} navigation={setNavigation}/>
    </View>
  )
}

export default Index