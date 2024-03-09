import React, { useState } from 'react';
import { View, Text, Image, Button, SafeAreaView, TextInput } from 'react-native';
import {styles} from './style';

  const Posto = () => {
  const [resultado, setResultado] = useState();
  const [n1, setN1] = useState();
  const [n2, setN2] = useState();

  function calc() {
    const res = n1 / n2;

    if (n1 != null || n2 != null) {
      if (res < 0.7) {
        setResultado('Álcool');
      } else {
        setResultado('Gasolina');
      }
    } else {
      alert('Inserir os dois Valores!');
      return;
    }
  }

  return (
    <SafeAreaView style={{ marginTop: 75 }}>
      <Text style={{ fontSize: 27, textAlign: 'center' }}>Álcool ou Gasolina</Text>

      <Image
        source={{ uri: 'https://www.mobills.com.br/blog/wp-content/uploads/2023/03/imagem-destaque-calculadora-alcool-ou-gasolina-mobills.png' }}
        style={{ width: 384, height: 200, marginTop: 50, marginBottom: 20 }}
      />

      <TextInput
        style={styles.input}
        placeholder="DIGITE O PREÇO DO ÁLCOOL"
        keyboardType="numeric"
        onChangeText={(n) => setN1(n)}
      />

      <TextInput
        style={styles.input}
        placeholder="DIGITE O PREÇO DA GASOLINA"
        keyboardType="numeric"
        onChangeText={(n) => setN2(n)}
      />

      <View style={{ padding: 30, paddingLeft: 70, paddingRight: 70 }}>
        <Button color="green" title="Verificar" onPress={calc} />
      </View>

      <Text style={{ fontSize: 27, color: 'red', textAlign: 'center' }}>O melhor é : {resultado}</Text>
    </SafeAreaView>
  );
}

export default Posto;