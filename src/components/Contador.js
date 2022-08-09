import React, { useState } from "react";
import {Text, Button} from 'react-native'
import Estilo from './style'

export default (props)=>{

    const [numero,setNumero] = useState(props.inicial)

    const inc = () => setNumero(numero + 1)
    const dec = () => setNumero(numero - 1)

    return (
        <>
        <Text style={Estilo.font}>{numero}</Text>
        <Button title="inc" onPress={inc}/>
        <Button title="dec" onPress={dec}/>
        </>
    )
}