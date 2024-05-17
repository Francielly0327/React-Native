import React from 'react';
import { View, StatusBar } from 'react-native';
import Lista from './src/pages/lista/index';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />
      <Lista />
    </View>
  );
};

export default App;
