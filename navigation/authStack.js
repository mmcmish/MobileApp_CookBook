import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import welcome from '../pages/welcome';
import Login from '../pages/Login';
import Register from '../pages/Register';

const Stack = createStackNavigator();

export default function AuthStack(){
    return(
        <NavigationContainer>
            <Stack.Navigator>

            <Stack.Screen name='welcome' component={welcome} />
            <Stack.Screen name='Login' component={Login}/>
            <Stack.Screen name='Register' component={Register}/>
           
            </Stack.Navigator>
            
        </NavigationContainer>
    )
}
