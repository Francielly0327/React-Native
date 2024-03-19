import React, { useState } from 'react';
import { View, Text, Image, Button, SafeAreaView, TextInput } from 'react-native';
import { styles } from './style';

const IMC = () => {
  const [resultado, setResultado] = useState();
  const [n1, setN1] = useState();
  const [n2, setN2] = useState();
  const [cor, setCor] = useState('black');

  function calc() {
    const res = n1 / (n2 * n2);

    if (n1 != null || n2 != null) {
      if (res < 18.5) {
        setResultado('Abaixo do Peso');
        setCor('deepskyblue');
      } else if (res >= 18.5 && res <= 24.9) {
        setResultado('Peso Normal');
        setCor('mediumseagreen');
      } else if (res >= 25 && res <= 29.9) {
        setResultado('Sobrepeso');
        setCor('yellow');
      } else if (res >= 30 && res <= 34.9) {
        setResultado('Obesidade grau I');
        setCor('orange');
      } else if (res >= 35 && res <= 39.9) {
        setResultado('Obesidade grau II');
        setCor('orangered');
      } else {
        setResultado('Obesidade grau III');
        setCor('darkred');
      }
    } else {
      alert('Insira os valores!');
      return;
    }
  }

  return (
    <SafeAreaView style={{ marginTop: 45 }}>
      <Text style={{ fontSize: 37, textAlign: 'center' }}>Cálculo do IMC</Text>

      <Image
        source={{ uri: 'https://www.plasticadosonho.com.br/wp-content/uploads/2017/12/blog-06-como-calcular-o-imc.jpg' }}
        style={{ width: 360, height: 257, marginTop: 20, marginBottom: 20 }}
      />

      <TextInput
        style={styles.input}
        placeholder="Seu Peso Atual"
        keyboardType="numeric"
        onChangeText={(n) => setN1(n)}
      />

      <TextInput
        style={styles.input}
        placeholder="Sua Altura"
        keyboardType="numeric"
        onChangeText={(n) => setN2(n)}
      />

      <View style={{ padding: 30, paddingLeft: 70, paddingRight: 70 }}>
        <Button title="Verificar" onPress={calc} />
      </View>

      <Text style={{ fontSize: 26, color: cor, textAlign: 'center' }}>Classificação: {resultado}</Text>
    </SafeAreaView>
  );
}

export default IMC;
