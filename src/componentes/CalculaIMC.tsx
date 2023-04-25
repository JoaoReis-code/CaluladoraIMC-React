import React, {useState} from "react";
import {Text, View, TextInput, Button, Alert} from "react-native";
import Padrao from "../estilos/Padrao"

function CalculaIMC(props: any){

    let [peso, setPeso] =  useState('')
    let [altura, setAltura] = useState('')

    let pesoCalculo = parseFloat(peso)
    let alturaCalculo = parseFloat(altura)

    const resultado = (pesoCalculo/(alturaCalculo*alturaCalculo))
    let classificacao = ""

    if(resultado < 18.5){
        classificacao = "magreza"
    }else if(resultado >= 18.5 && resultado <= 24.9){
        classificacao = "normal"
    }else if(resultado >= 25 && resultado <= 29.9){
        classificacao = "sobrepezo"
    }else if(resultado >= 30 && resultado <= 39.9){
        classificacao = "obesidade"
    }else if(resultado >= 40){
        classificacao = "obesidade grave"
    }
    

    return (
    <>
        <TextInput
            placeholder={props.placeholder}
            style={Padrao.input}
            value={peso}
            onChangeText={peso => setPeso(peso)}
        />

        <TextInput
            placeholder={props.placeholder2}
            style={Padrao.input}
            value={altura}
            onChangeText={altura => setAltura(altura)}
        />
    
        <Button
            title="Calcular"
            color="red"
            onPress={() => Alert.alert("O seu IMC e: " + String(resultado) + "\nClassificacao: " + classificacao) }
        />        
    </>
     )
}

export default (props: any) => (
    <>
        {
            CalculaIMC(props)
        }
    </>
)
    