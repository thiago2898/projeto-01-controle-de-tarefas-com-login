import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TelaDeLogin from './components/TelaDeLogin';
import ListaDeTarefas from './components/ListaDeTarefas'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TelaDeLogin" component={TelaDeLogin} />
        <Stack.Screen name="ListaDeTarefas" component={ListaDeTarefas} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}