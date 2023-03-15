import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../pages/Home";
import List from "../pages/List";

const Stack = createStackNavigator();

export default function UserStack(){
    return (
        <NavigationContainer>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name = "List" component={List}/>
            </NavigationContainer>
    )
}
