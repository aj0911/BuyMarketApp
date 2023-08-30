import { View, Text } from 'react-native'
import React from 'react'
import productDetailsStyle from '../ProductDetails/ProductDetails.Style'
import { TouchableOpacity } from 'react-native'
import gridProductStyle from './GridProductStyle'
import { Ionicons } from '@expo/vector-icons'
import Colors from '../../assets/Colors/Colors'
import { ScrollView } from 'react-native'
import { FlatList } from 'react-native'
import { Image } from 'react-native'
import { Dimensions } from 'react-native'
import homeStyle from './Home.Style'

const GridProduct = ({navigation,data}) => {
  return (
    <View style={gridProductStyle.gridView}>
        <TouchableOpacity style={gridProductStyle.backBtn} onPress={()=>navigation({screenName:'Home'})}>
            <Ionicons size={30} color={Colors.darkColor} name='chevron-back-circle'/>
        </TouchableOpacity>
        <View style={gridProductStyle.MainView}>
            <Text style={gridProductStyle.headerText}>New Arivals</Text>
            <ScrollView style={gridProductStyle.stories} horizontal={true}>
                {
                    data.map((e,i)=>(
                        <TouchableOpacity style={{width:Dimensions.get('screen').width*.7,marginRight:20}} key={i}>
                            <View style={gridProductStyle.card}>
                                <Image style={gridProductStyle.prodImg} source={e.img} />
                                <View style={gridProductStyle.content}>
                                    <Text style={gridProductStyle.prodName}>{e.name}</Text>
                                    <Text style={gridProductStyle.prodPrice}>{e.price}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))
                }
            </ScrollView> 
            <View style={{...homeStyle.cards,paddingRight:'5%'}}>
                {
                  data.map((e,i)=>(
                    <View key={i} style={homeStyle.card}>
                      <TouchableOpacity onPress={()=>navigation({
                        screenName:'ProductDetails',
                        data:e
                      })}>
                        <Image style={homeStyle.cardImage} source={e.img}/>
                      </TouchableOpacity>
                      <Text style={homeStyle.cardText}>{e.name}</Text>
                      <View style={homeStyle.cardPriceBox}>
                        <Text style={homeStyle.cardTextPrice}>{e.price}</Text>
                        <TouchableOpacity onPress={()=>addToCart(e.name)}>
                          <Ionicons style={{backgroundColor:Colors.veryDarkNavColor, borderRadius:10}} color={Colors.bgWhite} size={20} name='add'/>
                        </TouchableOpacity>
                      </View>
                    </View>
                  ))
                }
              </View>
        </View>
    </View>
  )
}

export default GridProduct