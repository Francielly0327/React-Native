import React from 'react';
import { View, Text, Linking } from 'react-native';
import styles from './style';

export default function Experiencia() {
  return (
    <View>
      <Text style={styles.titulo}>
        Experiência:
      </Text>
      <Text style={styles.texto}>
        • Dona da Minha Própria Loja Online
      </Text>
      <Text>{"\n"}</Text>
      <Text style={styles.texto}>
        • Editora de Vídeos
      </Text>
      <Text>{"\n"}</Text>
      <Text style={styles.texto}>
        • Designer Digital
      </Text>
      <Text>{"\n"}</Text>
      <Text style={styles.texto}>
        • Atendente em Loja de Ração
      </Text>

      <Text>{"\n"}</Text>

      <Text style={styles.titulo}>
        Projetos:
      </Text>
      <Text style={[styles.link, {color: 'blue'}]} onPress={() => Linking.openURL('https://github.com/Francielly0327')}>
        > Github
      </Text>
    </View>
  )
}
