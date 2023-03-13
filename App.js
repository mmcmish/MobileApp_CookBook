import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/stack';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/Home';
import List from './pages/List';
import Login from './pages/Login';
import Register from "./pages/Register";
export default function App() {
  return (
    <NavigationContainer>
      <StackView.Navigator>
        <StackView.Screen name = "Login" component = {Login}/>
        <StackView.Screen name = "Register" component = {Register}/>
        <StackView.Screen name = "Home" component = {Home}/>
        <StackView.Screen name = "List" component = {List}/>

      </StackView.Navigator>
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
