import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Login';
import Home from '../pages/Home';
import List from '../pages/List';
import Register from '../pages/Register';
const Stack = createStackNavigator();

export default function AuthStack(){
    return(
        <NavigationContainer>
            <Stack.Screen name='Login' component={Login}/>
            <Stack.Screen name='Register' component={Register}/>
           
            
        </NavigationContainer>
    )
}
