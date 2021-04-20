
import React, { Component } from 'react';
import { View, Text } from "react-native";
import Header from './android/Component/Header';
import Card from './android/Component/Card';




class App extends Component {

constructor(props){
  super(props)
}

render(){

  return(
<View>




<Header/>


<Card/>


</View>


  )
}

}


export default App;

