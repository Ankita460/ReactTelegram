import React from "react";
import {
  
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";

function Header() {




  return (
    <View style={StyleSheet.container}>
    
      <Image
        style={{ width: 50, height: 50, borderRadius: 30 }}
        source={postImage1}
      />
      <Text source={personName}></Text>
      <Text source={message}></Text>
     </View>
  )}


  const styles=StyleSheet.create({
      container:{
          flex: 1,
          flexDirection: 'row',
          
      }
  })

  export default Header;