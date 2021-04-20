import React from 'react';
import {View , Text , Image ,StyleSheet} from 'react-native';
import imagePath from './imagePath';






function ListItem( {dp , name , time , text}){

return(
    
    <View >
        <View style={Styles.container}>
        <Image 
        source= {dp}
        style = {Styles.dp} 
        />
        <Text style={Styles.name}>{name}</Text>
        <Text style={Styles.time}>{time}</Text>
        </View>
        <View>
        <Text style={Styles.text}>{text}</Text>
        </View>

    </View>
)


}


const Styles = StyleSheet.create({


    container:{
        flexDirection:"row",
        marginBottom:10,
        marginTop:10
    },
    dp:{
        width:60,
        height:60,
        marginLeft:10
    },
    name:{
        marginTop:5,
        fontSize:22,
        marginLeft:10,
        

    },
    time:{
        marginLeft:"auto",
        color:"gray",
        marginTop:15,
        marginRight:10
        

    },
    text:{
        marginLeft:80,
        marginTop:-35,
        color:"gray"

    }
    


})

export default ListItem;