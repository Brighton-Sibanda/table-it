import { StatusBar } from 'expo-status-bar';
import { TextInput,StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SigninScreen from './screens/SigninScreen';
import SignupScreen from './screens/SignupScreen';
import HomeScreen from './screens/HomeScreen';
import Email from './screens/EmailScreen';
import Message from './screens/MessageScreen';
import Instagram from './screens/InstagramScreen';
import Detail from './screens/DetailScreen';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options = {{ headerShown: false }} name="Signin" component={SigninScreen} />
        <Stack.Screen name= "Home" component={HomeScreen} />
        <Stack.Screen options = {{ headerShown: false }} name="Email" component={Email} />
        <Stack.Screen options = {{ headerShown: false }} name="Signup" component={SignupScreen} />
        <Stack.Screen options = {{ headerShown: false }} name="Instagram" component={Instagram} />
        <Stack.Screen options = {{ headerShown: false }} name="Message" component={Message} />
        <Stack.Screen options = {{ headerShown: false }} name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
