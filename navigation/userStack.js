import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../pages/Home";
import Home2 from "../pages/Home2";
import Home3 from "../pages/Home3";


const Stack = createStackNavigator();

export default function UserStack(){
    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen
                    name='Home'
                    component={Home}
                    options={{ headerShown: false }} // hide the header for the Home screen
                />
                <Stack.Screen
                    name='Home2'
                    component={Home2}
                    options={{ headerShown: false }} // hide the header for the Home2 screen (optional)
                />
                <Stack.Screen
                    name='Home3'
                    component={Home3}
                    options={{ headerShown: false }} // hide the header for the Home2 screen (optional)
                />


            </Stack.Navigator>
            </NavigationContainer>
    )
}
