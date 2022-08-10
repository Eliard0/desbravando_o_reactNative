import React from 'react'
import { View, StyleSheet } from 'react-native'
import Quadrado from './Quadrado'

export default props => {
    return (
        // <View style={style.FlexV3}>
        //     <Quadrado cor='#ff801a' />
        //     <Quadrado cor='#50d1f6' />
        //     <Quadrado cor='#dd22c1' />
        //     <Quadrado cor='#8313ed' />
        //     <Quadrado cor='#e6c9a7' />
        // </View>
        <View style={style.FlexV4}>
            <View style={style.FlexV4_0}/>
            <View style={style.FlexV4_1}/>
            <View style={style.FlexV4_2}/>
        </View >
    )
}

const style = StyleSheet.create({
    //texte como o eixo principal como colouna
    FlexV1: {
        flexGrow: 1,
        justifyContent: "space-between",
        backgroundColor: "#000"
    },
    //texte com movimentando os itens em finha mais ainda com o eixo principal
    FlexV2: {
        width: '100%',
        alignItems: "flex-start",
        justifyContent: "space-between",
        backgroundColor: "#000"
    },
    //texte com os dois eixos
    FlexV2: {
        flex: 1,
        width: '100%',
        alignItems: "flex-end",
        justifyContent: "space-between",
        backgroundColor: "#000"
    },
    //segundo texte com os dois eixos
    FlexV3: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: 350,
        width: '100%',
        backgroundColor: "#000"
    },
    FlexV4: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: "#000"
    },
    FlexV4_0: {
        backgroundColor: '#ff801a',
        height: 300,
    },
    FlexV4_1: {
        backgroundColor: '#ff801a',
        flexGrow: 1,
    }, FlexV4_2: {
        backgroundColor: '#dd22c1',
        flexGrow: 1,
    }
})