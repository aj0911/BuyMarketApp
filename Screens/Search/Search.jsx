import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import searchStyle from './Search.Style'
import indexStyle from '../../Index.style'
import homeStyle from '../Home/Home.Style'
import { Ionicons } from '@expo/vector-icons'
import Colors from '../../assets/Colors/Colors'
import { Image,ActivityIndicator } from 'react-native'

const Search = ({navigation}) => {
  const productArr = [
    {
      img:require('../../assets/Images/2.jpg'),
      name:'MacBook Air 2023',
      price:'₹1,19,000'
    },
    {
      img:require('../../assets/Images/lappy.jpg'),
      name:'MacBook Pro',
      price:'₹1,29,000'
    },
    {
      img:require('../../assets/Images/hero2-bg.png'),
      name:'Desktop Set',
      price:'₹1,99,000'
    },
    {
      img:require('../../assets/Images/2.jpg'),
      name:'MacBook Air 2023',
      price:'₹1,19,000'
    },
    {
      img:require('../../assets/Images/lappy.jpg'),
      name:'MacBook Pro',
      price:'₹1,29,000'
    },
    {
      img:require('../../assets/Images/hero2-bg.png'),
      name:'Desktop Set',
      price:'₹1,99,000'
    },
  ]
  const [arr,setArr] = useState([]);
  const [loader,setLoader] = useState(false);

  const handleTextChange = (text)=>{
    setLoader(true);
    setSearch(text);
    const val = []
    if(search!==''){
      productArr.forEach(e=>{
        if(e.name.toLowerCase().includes(search.toLowerCase()))val.push(e);
      })
    }
    setArr(val);
    setLoader(false);
  }
  const [search,setSearch] = useState('');
  return (
    <View style={indexStyle.container}>
      <View style={homeStyle.searchBar}>
        <Ionicons size={25} color={Colors.navColorDarkLocation} name={'search'} style={homeStyle.search}/>
        <TextInput onChangeText={text=>handleTextChange(text)} placeholder={'Search Here'} style={homeStyle.textInput} multiline />
        <Ionicons name='camera' size={25} color={Colors.bgWhite} style={homeStyle.camera}/>
      </View>
      <View style={searchStyle.products}>
        {
          (loader)?<ActivityIndicator size={50} color={Colors.mainColor}/>:
          (search==='')?
          <Image style={searchStyle.banner} source={require('../../assets/Images/searchBanner.png')}/>:
          arr.map((e,i)=>(
            <TouchableOpacity onPress={()=>navigation({
              screenName:'ProductDetails',
              data:e
            })} key={i} style={searchStyle.product}>
              <Image style={searchStyle.productImage} source={e.img}/>
              <View style={searchStyle.content}>
                <Text style={searchStyle.productName}>{e.name}</Text>
                <Text style={searchStyle.productPrice}>{e.price}</Text>
              </View>
            </TouchableOpacity>
          ))
        }
      </View>
    </View>
  )
}

export default Search