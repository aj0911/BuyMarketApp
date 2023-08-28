import { View, Text, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import homeStyle from './Home.Style'
import * as Location from 'expo-location'
import { Ionicons } from '@expo/vector-icons'
import Colors from '../../assets/Colors/Colors'
import { SliderBox } from 'react-native-image-slider-box'
import { Image } from 'react-native'
import IndexStyle from '../../Index.style'
import searchStyle from '../Search/Search.Style'
import Toast from 'react-native-toast-message'

const Home = ({}) => {
  const images = [
    require('../../assets/Images/2.jpg'),
    require('../../assets/Images/lappy.jpg'),
    require('../../assets/Images/2.jpg'),
    require('../../assets/Images/lappy.jpg'),
    require('../../assets/Images/2.jpg'),
    require('../../assets/Images/lappy.jpg'),
  ]
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
  const [location,setLocation] = useState();
  const [prodCart,setProdCart] = useState(1);
  const [search,setSearch] = useState('');
  const getLocation=async()=>{
    let {status} = await Location.requestForegroundPermissionsAsync();
    if(status!=='granted'){
      Toast.show({
        type:'error',
        text1:'Permission Not Granted',
        text2:'Please Grant Permission for location',
        visibilityTime:5000
      })
      return;
    }
    let currentLocation = await Location.getCurrentPositionAsync({});
    const res = await Location.reverseGeocodeAsync({
      longitude:currentLocation.coords.longitude,
      latitude:currentLocation.coords.latitude
    });
    setLocation(res[0].city);
  }
  const addToCart = (name)=>{
    setProdCart(prodCart+1);
    Toast.show({
      type:'success',
      text1:'Product Added To Cart',
      text2:name+' Added to Cart',
      visibilityTime:1000,
      autoHide:true
    })
  }
  useEffect(()=>{
    getLocation();
  },[])
  return (
    <View style={IndexStyle.container}>
      <View style={homeStyle.header}>
        <Ionicons size={20} name='location'/>
        <Text style={homeStyle.location}>{location}</Text>
        <View style={homeStyle.cart}>
          <Ionicons size={20} name='cart'/>
          <Text style={homeStyle.cartText}>{prodCart}</Text>
        </View>
      </View>
      <Text style={homeStyle.entryText}>Welcome to <Text style={{color:Colors.mainColor}}>Buy Market</Text></Text>
      <Text style={homeStyle.content}>Find Amazing <Text style={{color:Colors.mainColor}}>Products</Text> Below</Text>
      <View style={homeStyle.searchBar}>
        <Ionicons size={25} color={Colors.navColorDarkLocation} name={'search'} style={homeStyle.search}/>
        <TextInput placeholder={'Search Here'} style={homeStyle.textInput} multiline onChangeText={text=>handleTextChange(text)} />
        <Ionicons name='camera' size={25} color={Colors.bgWhite} style={homeStyle.camera}/>
      </View>
      {
          (loader)?<ActivityIndicator size={50} color={Colors.mainColor}/>:
          (search==='')?
          <>
            <View style={homeStyle.slider}>
              <SliderBox images={images} autoplay={true} circleLoop={true} dotStyle={{width:10,height:10,borderRadius:5}} dotColor={Colors.mainColor} resizeMode={'cover'} sliderBoxHeight={200} />
            </View>
            <View style={homeStyle.products}>
              <View style={homeStyle.productsHeader}>
                <Text style ={homeStyle.productsHeaderText}>New Rivals</Text>
                <Ionicons size={25} name='cube' />
              </View>
              <View style={homeStyle.cards}>
                {
                  productArr.map((e,i)=>(
                    <View key={i} style={homeStyle.card}>
                      <Image style={homeStyle.cardImage} source={e.img}/>
                      <Text style={homeStyle.cardText}>{e.name}</Text>
                      <View style={homeStyle.cardPriceBox}>
                        <Text style={homeStyle.cardTextPrice}>{e.price}</Text>
                        <Ionicons style={{backgroundColor:Colors.veryDarkNavColor, borderRadius:10}} onPress={()=>addToCart(e.name)} color={Colors.bgWhite} size={20} name='add'/>
                      </View>
                    </View>
                  ))
                }
              </View>
            </View>
          </>
          :
          <View style={searchStyle.products}>
            {
              arr.map((e,i)=>(
                  <View key={i} style={searchStyle.product}>
                    <Image style={searchStyle.productImage} source={e.img}/>
                    <View style={searchStyle.content}>
                      <Text style={searchStyle.productName}>{e.name}</Text>
                      <Text style={searchStyle.productPrice}>{e.price}</Text>
                    </View>
                  </View>
              ))
            }
          </View>
        }
    </View>
  )
}

export default Home