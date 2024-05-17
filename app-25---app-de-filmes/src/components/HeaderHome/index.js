import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

export default function HeaderHome() {
  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      <StatusBar barStyle="light-content" />
      <View style={styles.textHeader}>
        <Text style={styles.textTitleHeader}>Hazard CineGus</Text>
        <Text style={styles.textSubtitleHeader}>Entre em um mundo de adrenalina e emoções fortes onde cada filme é uma jornada ao limite do perigo.</Text>
      </View>
    </View>
  );
}
