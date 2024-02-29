import { View, Text } from 'react-native'
import {styles} from './styles'


function Dados(){
  return(
    <View style={styles.area}>
      <Text style={[styles.textoPrincipal, styles.alinhaTexto]}>Dados Pessoais</Text>
      <Text  style={{ textAlign: 'center' }}>Francielly Almeida Gonçalves da Silva</Text>
      <Text  style={{ textAlign: 'center' }} >Nascimento: 27/03/2003</Text>
      <Text  style={{ textAlign: 'center' }}>Idade: 20 anos</Text>
    </View>
  )
}


export default Dados;
