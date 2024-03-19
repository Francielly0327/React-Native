import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import {styles} from './style';

  const Multiplicador = () => {
  const [n1, setN1] = useState('');
  const [n2, setN2] = useState('');
  const [r, setR] = useState('');

  function calcular() {
    if (!n1.trim() || !n2.trim()) {
      setR('Digite dois números!');
    } else {
      setR(parseInt(n1) * parseInt(n2));
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Multiplicador de Números</Text>

      <TextInput
        style={[styles.input, { backgroundColor: '#D3D3D3' }]}
        keyboardType="number-pad"
        placeholder="Digite o primeiro número"
        onChangeText={(valor) => setN1(valor)}
      />
      <TextInput
        style={[styles.input, { backgroundColor: '#D3D3D3' }]}
        keyboardType="number-pad"
        placeholder="Digite o segundo número"
        onChangeText={(valor) => setN2(valor)}
      />

      <Button title="Calcular" onPress={calcular} color="#006400" />

      <Text style={[styles.texto, styles.resultado]}> RESULTADO:{'\n'} {r}</Text>
    </View>
  );
}

export default Multiplicador;