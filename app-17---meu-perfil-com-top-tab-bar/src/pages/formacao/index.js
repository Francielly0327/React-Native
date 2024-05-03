import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';

export default function Formacao() {
  return (
    <View>
      <Text style={styles.titulo}>
        Formação:
      </Text>
      <Text style={styles.texto}>
        • Cursando 5º Semestre de ADS na Fatec-PG
      </Text>
      <Text>{"\n"}</Text>
      <Text style={styles.texto}>
        • Ensino Médio - Ottoniel Junqueira
      </Text>
      <Text>{"\n"}</Text>
      <Text style={styles.texto}>
        • Técnico em Administração - Etec Peruíbe
      </Text>
    </View>
  )
}
