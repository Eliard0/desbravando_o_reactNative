import React from 'react'
import { Text, Platform } from 'react-native'
import Estilo from './components/style'

export default props => {
        if(Platform.OS === "android"){
            <Text style={ Estilo.font }></Text>
        }else if(Platform.OS === "ios"){
            <Text style={ Estilo.font }></Text>
        }else{
            return <Text>ops</Text>
        }
}