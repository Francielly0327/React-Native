import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';


export default function App(){
  const [n1, setN1] = useState('')
  const [n2, setN2] = useState('')
  const [r, setR] = useState('')

  function calcular() {
    if (!n1.trim() || !n2.trim()) {
      setR('Digite dois números!')
    } else {
      setR(parseInt(n1) * parseInt(n2))
    }
  }

  return (
    <View style={{ marginTop: 260 }}>
      <Text style={{ fontSize: 28, textAlign: 'center' }}>
        Multiplicador de Números
      </Text>

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
  )
}

const styles = StyleSheet.create({
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
  texto: {
    textAlign: 'center',
    fontSize: 25,
  },
  resultado: {
    borderWidth: 3,
    borderColor: '#000',
    padding: 5,
    marginTop:20,
    color: '#FF4500',
  },
});
