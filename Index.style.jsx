import { StyleSheet } from "react-native";
import Colors from "./assets/Colors/Colors";

const indexStyle = StyleSheet.create({
    root:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        minHeight:'100%',
        backgroundColor:Colors.mainBgColor       
    },
    BottomNavigator:{
        position:'absolute',
        bottom:0,
        left:0,
        width:"100%",
        paddingLeft:"5%",
        paddingRight:"5%",
        paddingTop:20,
        paddingBottom:20,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:Colors.bgWhite,
        gap:10
    },
    BottomNavigatorButton:{
        display:'flex',
        textAlign:'center',
        fontSize:25,
        width:"30%",
    }
})

export default indexStyle;