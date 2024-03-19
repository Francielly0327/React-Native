import React, { useState } from 'react';
import { View, Text, Image, Button, SafeAreaView } from 'react-native';
import { styles } from './style';

  const Jogo = () => {
  const [resultado, setResultado] = useState();

  function calc() {
    setResultado(Math.floor(Math.random() * 11));
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Jogo do Nº Aleatório</Text>

      <Image 
          source={{ uri:'https://m.media-amazon.com/images/I/715WU48yILL.jpg' }}
          style={{ width: 220, height: 220, marginTop: 30, marginBottom: 20}}
        />

      <Text style={styles.instructions}>Pense em um número de 0 a 10</Text>
      <Text style={styles.result}>{resultado}</Text>
      <Text style={styles.divider}>----------------------</Text>

      <View style={styles.buttonContainer}>
        <Button color="green" title="Descobrir" onPress={calc} />
      </View>
    </SafeAreaView>
  );
}

export default Jogo;