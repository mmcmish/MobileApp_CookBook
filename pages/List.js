import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native'



class List extends React.Component {
    render() {
     return (
        <view style={style.container}>
            <Text>Hello from List</Text>


            <Button title='Home' onPress={() => this.prop.navigation.navigate("Home")}/>
        </view>


        )
    }
}

export default List
