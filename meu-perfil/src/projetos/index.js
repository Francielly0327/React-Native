import { View, Text, Linking } from 'react-native';
import { styles } from './styles';

function Dados() {
  return (
    <View style={styles.area}>
      <Text style={[styles.textoPrincipal, styles.alinhaTexto]}>Projetos</Text>
      <Text
        style={{ textAlign: 'center', color: 'blue' }}
        onPress={() =>
          Linking.openURL('https://github.com/Francielly0327')
        }
      >
        Github
      </Text>
    </View>
  );
}

export default Dados;
