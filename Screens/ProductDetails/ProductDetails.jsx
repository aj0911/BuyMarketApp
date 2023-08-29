import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import productDetailsStyle from './ProductDetails.Style'
import { Ionicons } from '@expo/vector-icons'
import indexStyle from '../../Index.style'
import Colors from '../../assets/Colors/Colors'

const ProductDetails = ({data,navigation}) => {
    const [quantity, setQuantity] = useState(0)
  return (
    <ScrollView>
        <View style={productDetailsStyle.pdView}>
            <TouchableOpacity style={productDetailsStyle.backBtn} onPress={()=>navigation({screenName:'Home'})}>
            <Ionicons size={30} color={Colors.darkColor} name='chevron-back-circle'/>
            </TouchableOpacity>
            <Image style={productDetailsStyle.prodImg} source={data.img}/>
            <View style={productDetailsStyle.pdInfo}>
                <View style={productDetailsStyle.pdInfoView}>
                    <Text style={productDetailsStyle.pName}>{data.name}</Text>
                    <Text style={productDetailsStyle.pPrice}>{data.price}</Text>
                </View>
                <View style={productDetailsStyle.pdInfoView}>
                    <View style={productDetailsStyle.ratings}>
                        {
                            [true,true,true,false,false].map((e,i)=>{
                                return <Ionicons key={i} size={20} name='star' color={(e)?Colors.starColor:Colors.navColorDark}/>
                            })
                        }
                        <Text style={productDetailsStyle.ratingText}>(3)</Text>
                    </View>
                    <View style={productDetailsStyle.quantity}>
                        <TouchableOpacity onPress={()=>setQuantity(quantity+1)}>
                            <Ionicons size={20} color={Colors.darkColor} style={productDetailsStyle.quantityIcon} name='add'/>
                        </TouchableOpacity>
                        <Text style={productDetailsStyle.quantityText}>{quantity}</Text>
                        {
                            (quantity>0)?
                            <TouchableOpacity onPress={()=>setQuantity(quantity-1)}>
                                <Ionicons size={20} color={Colors.darkColor} style={productDetailsStyle.quantityIcon} name='remove'/>
                            </TouchableOpacity>
                            :''
                        }
                    </View>
                </View>
                <View style={productDetailsStyle.description}>
                    <Text style={productDetailsStyle.header}>Description</Text>
                    <Text style={productDetailsStyle.descText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur facilis amet odit fugit. Aspernatur, laboriosam. Consequuntur non maxime corrupti obcaecati nesciunt perspiciatis quos fugit ut sit ex tenetur, tempora nisi.</Text>
                </View>
                <View style={productDetailsStyle.purchase}>
                    <TouchableOpacity>
                        <Text style={productDetailsStyle.buyBtn}>Buy Now</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons style={productDetailsStyle.addToCart} name='cart' size={25}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>   
    </ScrollView>
  )
}

export default ProductDetails