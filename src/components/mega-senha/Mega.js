import React, { Component } from 'react'
import { Button, Text, View, TextInput } from 'react-native'
import Estilo from '../style'
import Numero from './MegaNumero'

export default class Mega extends Component {

    state = {
        qtdeNumeros: this.props.qtdeNumeros,
        numeros: []
    }

    alteraQtdeNumero = (qtde) => {
        this.setState({ qtdeNumeros: +qtde })
    }

    //aux
    gerarNumeroNaoContido = nums => {
        const novo = parseInt(Math.random() * 60) + 1
        return nums.includes(novo) ? this.gerarNumeroNaoContido : novo
    }

    gerarNumero = () => {
        const numeros = Array(this.state.qtdeNumeros)
            .fill()
            .reduce(n => [...n, this.gerarNumeroNaoContido(n)], [])
            .sort((a, b) => a - b)
        this.setState({ numeros })
    }

    exibirNumeros = () => {
        const nums = this.state.numeros
        return nums.map(num => {
            return <Numero key={num} num={num} />
        })
    }

    //soluções para o problema do THIS
    // constructor(props){
    //     super(props)
    //     this.alteraQtedeNumero = this.alteraQtedeNumero.bind(this)
    // }
    // segunda solução er usa o onChange com arrow function
    // terceira solução er tranforma a função que muda o estado em arrow function em uma função arrow o this sempre estara associado ao local em que foi defifnido 

    render() {
        return (
            <>
                <Text style={Estilo.font}>
                    Gerador Mega-Sena
                </Text>
                <TextInput
                    keyboardType={'numeric'}
                    style={{ borderBottomWidth: 1 }}
                    placeholder='quantidade de numeros : '
                    value={`${this.state.qtdeNumeros}`}
                    //onChange={qtde => this.alteraQtedeNumero(qtde)} 2
                    onChangeText={this.alteraQtdeNumero}
                />
                <Button
                    title='Gerar numeros'
                    onPress={this.gerarNumero}
                />

                <View style={{
                    marginTop: 24,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center',

                }}>
                    {this.exibirNumeros()}
                </View>
            </>
        )
    }
}