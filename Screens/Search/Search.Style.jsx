import { Dimensions, Platform, StyleSheet } from "react-native";

const searchStyle = StyleSheet.create({
    products:{
        height:'100%',
        overflow:'hidden',
        marginTop:20,
        justifyContent:'center',
        alignItems:'center'
    },
    banner:{
        objectFit:'fill',
        width:'100%',
        height:300
    }
})

export default searchStyle;