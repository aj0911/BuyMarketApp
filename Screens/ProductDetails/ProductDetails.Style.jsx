import { Dimensions, StyleSheet } from "react-native";
import Colors from "../../assets/Colors/Colors";

const productDetailsStyle = StyleSheet.create({
    pdView:{
        width:Dimensions.get('screen').width,
        minHeight:Dimensions.get('screen').height
    },
    backBtn:{
        position:'absolute',
        top:40,
        left:20,
        zIndex:5
    },
    quantityIcon:{
        borderWidth:1,
        borderColor:Colors.darkColor,
        borderRadius:22/2,
        width:22,
        textAlign:'center',
        textAlignVertical:'center'
    },
    prodImg:{
        width:'100%',
        height:Dimensions.get('screen').height*0.5
    },
    pdInfo:{
        backgroundColor:Colors.bgWhite,
        width:'100%',
        marginTop:-10,
        minHeight:Dimensions.get('screen').height*0.55,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        overflowX:'hidden',
        paddingTop:20,
        paddingBottom:20,
        paddingLeft:'5%',
        paddingRight:'5%',
        gap:10
    },
    pdInfoView:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:'100%'
    },
    pName:{
        fontFamily:'Bold',
        width:'50%',
        fontSize:20
    },
    pPrice:{
        fontFamily:'Medium'
    }
})

export default productDetailsStyle;