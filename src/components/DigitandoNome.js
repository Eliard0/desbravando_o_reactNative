import React, {useState} from 'react'
import { Text, View, TextInput } from 'react-native'
import Estilo from './components/style'

export default props => {
    const [nome, setNome] = useState('teste')
    
    return(
        <View>
            <Text style={ Estilo.font }>{nome}</Text>
            <TextInput
                placeholder="Digite seu nome"
                value={nome}
                onChangeText={nome=>setNome(nome)}
            />
        </View>
   )
}