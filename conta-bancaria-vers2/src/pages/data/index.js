import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { styles } from './style';

export default function Dados({ route }) {
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.headerText}>Dados Informados:</Text>
      </View>
      <Text style={styles.texts}>Nome: {route.params?.nome}</Text>
      <Text style={styles.texts}>Idade: {route.params?.idade}</Text>
      <Text style={styles.texts}>Sexo: {route.params?.sexo}</Text>
      <Text style={styles.texts}>Escolaridade: {route.params?.escolaridade}</Text>
      <Text style={styles.texts}>Limite: {route.params?.limite}</Text>
      <Text style={styles.texts}>Brasileiro: {route.params?.brasileiro === 1 ? 'Sim' : 'Não'}</Text>      
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}
