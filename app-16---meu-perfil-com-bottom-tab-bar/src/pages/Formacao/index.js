import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';

export default function Formacao() {
  return (
    <View>
      <Text style={styles.title}>
        Formação:
      </Text>
      <Text style={styles.text}>• Cursando 5º Semestre de ADS na Fatec-PG</Text>
      <Text style={styles.text}>
        {"\n"}
        • Ensino Médio - Ottoniel Junqueira
      </Text>
      <Text style={styles.text}>
      {"\n"}
        • Técnico em Administração - Etec Peruíbe
      </Text>
    </View>
  );
}
