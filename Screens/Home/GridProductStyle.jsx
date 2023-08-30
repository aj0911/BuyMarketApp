import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";
import Colors from "../../assets/Colors/Colors";

const gridProductStyle = StyleSheet.create({
    backBtn:{
        position:'absolute',
        top:10,
        left:10,
        zIndex:5
    },
    gridView:{
        width:Dimensions.get('screen').width,
        minHeight:Dimensions.get('screen').height,
    },
    MainView:{
        paddingTop:20,
        paddingBottom:20,
        paddingLeft:'5%',
        overflow:'hidden',
        gap:20,
        justifyContent:'center',
        alignItems:'center'
    },
    headerText:{
        fontFamily:'Bold',
        fontSize:30,
        textTransform:'uppercase',
        color:Colors.mainColor
    },
    card:{
        width:'100%',
        overflow:'hidden',
        borderRadius:20,
        overflow:'hidden',
        zIndex:0,
        position:'relative'
    },
    prodImg:{
        width:'100%',
        height:200,
        objectFit:'fill'
    },
    content:{
        position:'absolute',
        top:'50%',
        left:0,
        width:'100%',
        height:'50%',
        justifyContent:'center',
        alignItems:'flex-start',
        zIndex:1,
        paddingLeft:20,
    },
    prodName:{
        color:Colors.bgWhite,
        fontSize:20,
        fontFamily:'Medium',
    },
    prodPrice:{
        color:Colors.bgWhite,
        fontSize:15,
        fontFamily:'Regular',
    }
}) 

export default gridProductStyle;