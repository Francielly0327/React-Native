import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './style';

export default function Pessoa() {
  let img = 'https://i.pinimg.com/736x/b9/c4/7e/b9c47ef70bff06613d397abfce02c6e7.jpg';

  return (
    <View>
      <Image 
        source={{ uri: img }}
        style={styles.image}
      />

      <Text style={styles.title}>
        Dados Pessoais:
      </Text>

      <Text style={styles.text}>• Nome: Fancielly Almeida</Text>
      <Text style={styles.text}>
        {"\n"}
        • Data de Nascimento: 27/03/2003
      </Text>
    </View>
  );
}
