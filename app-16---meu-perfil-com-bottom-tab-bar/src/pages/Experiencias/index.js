import React from 'react';
import { View, Text, Linking } from 'react-native';
import styles from './style';

export default function Experiencias() {
  return (
    <View>
      <Text style={styles.title}>
        Experiências:
      </Text>
      <Text style={styles.text}>• Dona da Minha Própria Loja Online</Text>
      <Text style={styles.text}>
        {"\n"}
        • Editora de Vídeos
      </Text>
      <Text style={styles.text}>
        {"\n"}
        • Designer Digital
      </Text>
      <Text style={styles.text}>
        {"\n"}
        • Atendente em Loja de Ração
      </Text>

      {/* Novo texto */}
      <Text style={styles.title}>
        Projetos:
      </Text>
      <Text style={[styles.link, {color: 'blue'}]} onPress={() => Linking.openURL('https://github.com/Francielly0327')}>
        > Github
      </Text>
    </View>
  );
}