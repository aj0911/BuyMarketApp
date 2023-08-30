import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import BottomNavigator from './Components/Helper/BottomNavigator'
import indexStyle from './Index.style'
import Home from './Screens/Home/Home';
import Search from './Screens/Search/Search';
import User from './Screens/User/User';
import SafeAreaViewAndroid from './Components/Helper/SafeAreaViewAndroid';
import Toast from 'react-native-toast-message';
import Login from './Screens/User/Login';
import Register from './Screens/User/Register';
import ProductDetails from './Screens/ProductDetails/ProductDetails';
import GridProduct from './Screens/Home/GridProduct';

const Index = () => {
  const [navigate,setNavigation]=useState({screenName:'Home'});
  return (
    <View style={indexStyle.root}>
        {
            (()=>{
                if(navigate.screenName==='Home')return <SafeAreaViewAndroid Component={Home} navigation={setNavigation}/>
                else if(navigate.screenName==='Search')return <SafeAreaViewAndroid Component={Search} navigation={setNavigation}/>
                else if(navigate.screenName==='User')return <User navigation={setNavigation}/>
                else if(navigate.screenName==='ProductDetails')return <ProductDetails data ={navigate.data} navigation={setNavigation}/>
                else if(navigate.screenName==='GridProduct')return <SafeAreaViewAndroid Component={GridProduct} data ={navigate.data} navigation={setNavigation}/>
                else if(navigate.screenName==='Login')return <SafeAreaViewAndroid Component={Login} navigation={setNavigation}/>
                else if(navigate.screenName==='Register')return <SafeAreaViewAndroid Component={Register} navigation={setNavigation}/>
            })()
        }
        {
          (navigate.screenName.match('Home') || navigate.screenName.match('Search') || navigate.screenName.match('User'))?<BottomNavigator currNav={navigate} navigation={setNavigation}/>:''
        }
        <Toast/>
    </View>
  )
}

export default Index