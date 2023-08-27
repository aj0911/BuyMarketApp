import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import {useFonts} from 'expo-font'
import { useCallback } from 'react';
import * as SplashScreen from "expo-splash-screen"
import SafeAreaViewAndroid from './Components/Helper/SafeAreaViewAndroid';
import Index from './Index';


export default function App() {

  const [fontsLoaded] = useFonts({
    Bold:require('./assets/Poppins-Bold.ttf'),
    ExtraBold:require('./assets/Poppins-ExtraBold.ttf'),
    ExtraLight:require('./assets/Poppins-ExtraLight.ttf'),
    Italic:require('./assets/Poppins-Italic.ttf'),
    Light:require('./assets/Poppins-Light.ttf'),
    Medium:require('./assets/Poppins-Medium.ttf'),
    Regular:require('./assets/Poppins-Regular.ttf'),
    SemiBold:require('./assets/Poppins-SemiBold.ttf'),
    Thin:require('./assets/Poppins-Thin.ttf'),
  })

  const onLayoutRootView = useCallback(async()=>{
    if(fontsLoaded)await SplashScreen.hideAsync();
  },[fontsLoaded])

  if(!fontsLoaded)return null;

  return (
    <Index/>
  );
}
