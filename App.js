import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./pages/Login";
import home from "./pages/Home";
import list from "./pages/List";
import register from "./pages/Register";

const stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
          <stack.Navigator>
      <stack.Screen name = "Login">
          {props => <Login />}
      </stack.Screen>
    {/*<View style={styles.container}>*/}
    {/*  <Text>Open up App.js to start working on your app!</Text>*/}
    {/*    <Login />*/}
    {/*  <StatusBar style="auto" />*/}
    {/*</View>*/}
          </stack.Navigator>
      </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
