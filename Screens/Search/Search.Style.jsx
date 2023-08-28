import {  StyleSheet } from "react-native";
import Colors from "../../assets/Colors/Colors";

const searchStyle = StyleSheet.create({
    products:{
        overflow:'hidden',
        marginTop:20,
        justifyContent:'center',
        alignItems:'center',
        gap:10,
        // backgroundColor:'black'
    },
    banner:{
        objectFit:'fill',
        width:'100%',
        height:300
    },
    product:{
        width:'100%',
        flexDirection:'row',
        overflow:'hidden',
        gap:10,
        backgroundColor:Colors.bgWhite,
        padding:5,
        alignItems:'center',
        borderRadius:10
    },
    productImage:{
        width:100,
        height:100,
        borderRadius:5
    },
    productName:{
        fontFamily:'Bold',
        fontSize:18,
        textTransform:'capitalize'
    },
    productPrice:{
        fontFamily:'Medium',
        fontSize:16,
        textTransform:'capitalize'
    }
})

export default searchStyle;