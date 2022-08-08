import React from "react";
import {Text} from 'react-native'

export default (props)=>{
    const delta = props.max - props.min
    const aleatorio = parseInt(Math.random() * delta) + props.min
    return (
        <Text>numero aleatorio: {aleatorio}</Text>
    )
}