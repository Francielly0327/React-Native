import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

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
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20, borderStyle: 'solid', backgroundColor: '#D3D3D3', borderWidth: 2, padding: 9 }}> Contador de Pessoas</Text>
      <Text style={{ fontSize: 48 }}>{count}</Text>
      <View style={{ marginTop: 20 }}>
        <Button title="Adicionar pessoas" onPress={incrementCount} />
      </View>
      <View style={{ marginTop: 10 }}>
        <Button title="Remover Pessoas" onPress={decrementCount} />
      </View>
    </View>
  );
};

export default App;

