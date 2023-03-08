import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

class home extends React.Component {
  render() {
    return (
      <View style = {StyleSheet.container}>

    <Text>Hello from Home</Text>

    <Button title='List' onPress={()=> this.props .navigate("List")
      }/>
  </View>
  )
}
}

export default home
