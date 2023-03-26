import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import welcome from '../pages/welcome';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Reset from '../pages/Reset'
import { IconButton as PaperIconButton } from 'react-native-paper';
import { redirect } from 'react-router-dom';

const Stack = createStackNavigator();

export default function AuthStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Welcome"
                screenOptions={{
                    headerShown: true,
                    headerTitle: null, // hide the header title
                    headerTransparent: true, // make the header transparent
                    headerLeft: () => (
                        <PaperIconButton
                            icon="arrow-left"
                            onPress={() => redirect("welcome")} // add the onPress action to go back

                        />
                    ),
                }}
            >
                <Stack.Screen
                    name='Welcome'
                    component={welcome}
                    options={{ headerShown: false }} // hide the header for the Welcome screen
                />
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='Register' component={Register} />
                <Stack.Screen name='Reset' component={Reset}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
