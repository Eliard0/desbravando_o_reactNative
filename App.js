import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import Butoes from './src/components/Butoes';
// import Aleatorio from './src/components/Aleatorio';
// import Componente1 from './src/components/Primeiro';
// import MinMax from './src/components/MinMax';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Butoes/>
      {/* <Aleatorio min={5} max={10}></Aleatorio> */}
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
