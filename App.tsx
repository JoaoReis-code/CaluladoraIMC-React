import { Component, ReactNode } from "react";
import { View } from "react-native";
import CalculaIMC from "./src/componentes/CalculaIMC";
import Padrao from "./src/estilos/Padrao";

export default class App extends Component{
  render(){
      return(
        <View style={Padrao.default}>
          <CalculaIMC placeholder="peso" placeholder2="altura"/>
        </View>
      );
  }
}