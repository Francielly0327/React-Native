import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Anuncio from './src/pages/anuncio/index';
import Informacoes from './src/pages/informacoes/index';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Anuncio" component={Anuncio} />
        <Stack.Screen name="Informacoes" component={Informacoes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
