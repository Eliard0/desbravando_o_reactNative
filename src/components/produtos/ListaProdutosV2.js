import React from 'react'
import { Text, FlatList } from 'react-native'
import Estilo from './components/style'
import produtos from './produtos'

export default props => {
    const renderList = ({item:p})=>{
        return <Text>{p.id} : {p.nome}</Text>
    }
    return (
        <>
            <Text style={Estilo.font}>
                Lista de Produtos
            </Text>
            <FlatList
                data={produtos}
                keyExtractor={i=> `${i.id}`}
                renderItem={renderList}
            />
        </>
    )
}