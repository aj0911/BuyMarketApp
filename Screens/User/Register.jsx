import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import userStyle from './User.Style'
import { Ionicons } from '@expo/vector-icons'
import Colors from '../../assets/Colors/Colors'
import indexStyle from '../../Index.style'

const Register = ({navigation}) => {
    const [isSecure,setIsSecure]=useState(true);
    const [isCSecure,setCIsSecure]=useState(true);
  return (
    <View style={userStyle.login}>
      <TouchableOpacity style={indexStyle.backBtn} onPress={()=>navigation({screenName:'User'})}>
        <Ionicons size={30} color={Colors.darkColor} name='chevron-back-circle-outline'/>
        </TouchableOpacity>
        <Image style={userStyle.loginImg} source={require('../../assets/Images/loginImg.png')}/>
        <Text style={userStyle.tagline}>Sign Up and Start Shopping</Text>
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
            <View style={userStyle.formComponent}>
                <Text style={userStyle.label}>Confirm Password</Text>
                <View style={userStyle.formComponentTextField}>
                    <Ionicons size={20} color={Colors.darkColor} name='key-outline' />
                    <TextInput placeholder='Confirm Password' secureTextEntry={isCSecure} style={userStyle.textIput}  />
                    <TouchableOpacity onPress={()=>setCIsSecure(!isCSecure)}>
                        <Ionicons size={20} color={Colors.darkColor} name={(isCSecure)?'eye-off-outline':'eye-outline'}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        <TouchableOpacity style={{width:'100%'}}>
            <Text style={userStyle.loginBtn2}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation({screenName:'Login'})}>
            <Text style={userStyle.registerBtn}>Already have an account? Login</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Register