import { View, Text, Image} from 'react-native'
import {styles} from './styles'
 
 
function Foto(){
 
  let img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShvbFzBzeIQSAHaRelD8mYVwIb81iLo0FwrA&usqp=CAU';
 
  return(
    <View style={styles.area}>
 
    <Image
          source={{ uri: img }}
          style={{ width: 200, height: 200, marginLeft: 90}}
        />
    </View>
  )
}
 
 
export default Foto;