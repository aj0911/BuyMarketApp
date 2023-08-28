import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import userStyle from './User.Style'
import { Ionicons } from '@expo/vector-icons'
import Colors from '../../assets/Colors/Colors'
import indexStyle from '../../Index.style'

const Login = ({navigation}) => {
    const [isSecure,setIsSecure]=useState(true);
  return (
    <View style={userStyle.login}>
      <TouchableOpacity style={indexStyle.backBtn} onPress={()=>navigation({screenName:'User'})}>
        <Ionicons size={30} color={Colors.darkColor} name='chevron-back-circle-outline'/>
        </TouchableOpacity>
        <Image style={userStyle.loginImg} source={require('../../assets/Images/loginImg.png')}/>
        <Text style={userStyle.tagline}>Unlimited Best Products</Text>
        <View style={userStyle.loginForm}>
            <View style={userStyle.formComponent}>
                <Text style={userStyle.label}>Email</Text>
                <View style={userStyle.formComponentTextField}>
                    <Ionicons size={20} color={Colors.darkColor} name='mail-outline' />
                    <TextInput style={userStyle.textIput} placeholder='Email' />
                </View>
            </View>
            <View style={userStyle.formComponent}>
                <Text style={userStyle.label}>Password</Text>
                <View style={userStyle.formComponentTextField}>
                    <Ionicons size={20} color={Colors.darkColor} name='key-outline' />
                    <TextInput placeholder='Password' secureTextEntry={isSecure} style={userStyle.textIput}  />
                    <TouchableOpacity onPress={()=>setIsSecure(!isSecure)}>
                        <Ionicons size={20} color={Colors.darkColor} name={(isSecure)?'eye-off-outline':'eye-outline'}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        <TouchableOpacity style={{width:'100%'}}>
            <Text style={userStyle.loginBtn2}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation({screenName:'Register'})}>
            <Text style={userStyle.registerBtn}>Don't have an account? Register</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Login