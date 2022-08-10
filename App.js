import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import Mega from './src/components/mega-senha/Mega'
// import FlexBox from './src/components/layout/FlexBox';
// import Quadrado from './src/components/layout/Quadrado';
// import DigitandoNome from './src/DigitandoNome';
// import ListaProdutosV2 from './src/components/produtos/ListaProdutosV2';
// import ListaProdutos from './src/components/produtos/listaProdutos';
// import Pai from './src/components/comunicacao_Indireta/pai';
// import Butoes from './src/components/Butoes';
// import Contador from './src/components/Contador';
// import Aleatorio from './src/components/Aleatorio';
// import Componente1 from './src/components/Primeiro';
// import MinMax from './src/components/MinMax';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Mega qtdeNumeros={12}/>
      {/* <DigitandoNome></DigitandoNome> 
      <FlexBox></FlexBox>
       <ListaProdutosV2></ListaProdutosV2> 
       <ListaProdutos></ListaProdutos> 
       <Pai/> 
       <Contador inicial={100}/> 
       <Butoes/> 
       <Aleatorio min={5} max={10}></Aleatorio> 
      {/* <MinMax min="3" max="5"></MinMax>
        <Componente1></Componente1> */}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
