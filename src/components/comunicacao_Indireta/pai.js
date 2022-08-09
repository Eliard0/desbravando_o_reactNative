import React, {useState} from 'react'
import { Text } from 'react-native'
import Filho from './filho'

export default props => {

    const [texto, setText] = useState(0)
    const [num, setNum] = useState(0)

    function exibirValor(numero, texto){
        setNum(numero)
        setText(texto)
    }

    return (
        <>
            <Text>{texto}{num}</Text>
            <Filho min={1} max={10} funcao={exibirValor}/>
        </>
    )
}