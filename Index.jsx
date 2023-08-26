import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import BottomNavigator from './Components/Helper/BottomNavigator'
import indexStyle from './Index.style'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Screens/Home/Home';
import Search from './Screens/Search/Search';
import User from './Screens/User/User';

const Index = () => {
    const [navigate,setNavigation]=useState('Home');
  return (
    // <NavigationContainer >
        <View style={indexStyle.root}>
            {
                (()=>{
                    if(navigate==='Home')return <Home navigation={setNavigation}/>
                    else if(navigate==='Search')return <Search navigation={setNavigation}/>
                    else if(navigate==='User')return <User navigation={setNavigation}/>
                })()
            }
            <BottomNavigator currNav={navigate} navigation={setNavigation}/>
        </View>
    // </NavigationContainer>
  )
}

export default Index