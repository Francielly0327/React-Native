import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { styles } from './style'; 

const Informacoes = ({ route }) => {
  const { title, image, price, disponibilidade, composicao, sobre } = route.params;

  return (
    <ScrollView>
      {title && (
        <View style={styles.container}>
          <Text style={styles.titulo}>{title}</Text>
          <Image
            source={{ uri: image }}
            style={styles.imagem}
          />
          <Text style={styles.preco}>{price}</Text>
          <Text style={styles.disponibilidade}>{disponibilidade}</Text>
          <Text style={styles.composicao}>{composicao}</Text>
          <Text style={styles.sobre}>{sobre}</Text>
        </View>
      )}
    </ScrollView>
  );
}

export default Informacoes;
