import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../pages/Home";


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


            </Stack.Navigator>
            </NavigationContainer>
    )
}
