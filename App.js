import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./pages/Login";
import Register from "./pages/Register";

const stack = createNativeStackNavigator();

export default function App() {


        <NavigationContainer>
            <stack.Navigator>

                <stack.Screen name = "Login" component={Login} options={{ headerShown: false}}>
                    {/*{props => <Login />}*/}
                </stack.Screen>


                <stack.Screen name = "Register" component={Register} options={{ headerShown: false}}>
                </stack.Screen>


         
            </stack.Navigator>
        </NavigationContainer>
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});