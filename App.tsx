import { Component, ReactNode } from "react";
import { View } from "react-native";
import CalculaIMC from "./src/componentes/CalculaIMC";

export default class App extends Component{
  render(){
      return(
        <View>
          <CalculaIMC placeholder="peso" placeholder2="altura"/>
        </View>
      );
  }
}