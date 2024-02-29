import { View, Text } from 'react-native';
import {styles} from './styles'


function formacao(){
  return(
    <View>
      <Text style={[styles.textoPrincipal, styles.alinhaTexto]}>Formação</Text>
      <Text  style={{ textAlign: 'center' }}>ENSINO MEDIO COMPLETO</Text>
      <Text  style={{ textAlign: 'center' }}>ANALISE E DESENVOLVIMENTO DE SISTEMA - FATEC PG</Text>
    </View>
  )
}


export default formacao;