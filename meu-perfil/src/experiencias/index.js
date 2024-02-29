import { View, Text } from 'react-native'
import {styles} from './styles'


function Projetos(){
  return(
    <View style={styles.area}>
      <Text style={[styles.textoPrincipal, styles.alinhaTexto]}>Experiencias</Text>
      <Text  style={{ textAlign: 'center' }}>Dona da minha propria loja online</Text>
    </View>
  )
}


export default Projetos;