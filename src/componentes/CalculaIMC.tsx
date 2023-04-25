import React, {useState} from "react";
import {Text, View, TextInput, Button} from "react-native";

function CalculaIMC(props: any){

    let [peso, setPeso] =  useState('')
    let [altura, setAltura] = useState('')

    let pesoCalculo = parseFloat(peso)
    let alturaCalculo = parseFloat(altura)

    const resultado = (pesoCalculo/(alturaCalculo*alturaCalculo))

    return (
    <>
        <TextInput
            placeholder={props.placeholder}
            value={peso}
            onChangeText={peso => setPeso(peso)}
        />

        <TextInput
            placeholder={props.placeholder2}
            value={altura}
            onChangeText={altura => setAltura(altura)}
        />

        <Button onClick={() => {
            <Text>{resultado}</Text>
        }}>Clique aqui</Button>
        
    
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
    