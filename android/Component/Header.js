import React from "react";
import { View ,Text ,StyleSheet ,Image, TouchableOpacity } from "react-native";
import imagePath from "../Component/imagePath";





function Header(){



    return(

<View>
    <View style ={Styles.top}>
    
    <Image source={imagePath.toogle}
                    style={Styles.menuIcon} />

    <Text style={Styles.telegram} >Telegram</Text>

    <Image
    source={imagePath.search}
        style={Styles.searchIcon} />
    </View>
   
{/*     
    <TouchableOpacity onPress={()=>{alert("hi")}}>

            <View>
            <Image
    source={ImagePath.edit}
        style={Styles.edit} />
              
            </View>

          </TouchableOpacity> */}
    
</View>
    )
}


const Styles = StyleSheet.create({

    top:{
        
        backgroundColor:"#517DA2",
        height:70,
        flexDirection:"row",
        position:"relative",
        zIndex:0
    },
    menuIcon:{
        marginTop:25,
        marginLeft:20,
        height:20,
        width:30,
        color:"white"
    },
    telegram:{
        color:"white",
        marginTop:15,
        marginLeft:40,
        fontSize:25,
        fontWeight:'bold'
    },
    searchIcon:{
        width:25,
        height:25,
        marginLeft:"auto",
        marginTop:20,
        marginRight:15
    },
    // edit:{
    //     position:"absolute",
    //     width:60,
    //     height:60,
    //     top:600,
    //     left:320,
    //     zIndex:1

    // }






})



export default Header ;
