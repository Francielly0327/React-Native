import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from './style'; 

const App = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Contador de Pessoas</Text>
      <Text style={styles.counter}>{count}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Adicionar pessoas" onPress={incrementCount} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Remover Pessoas" onPress={decrementCount} />
      </View>
    </View>
  );
};

export default App;
