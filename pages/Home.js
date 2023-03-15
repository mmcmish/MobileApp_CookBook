import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Home screen!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



// import React from 'react';
// import {StyleSheet, Text, View, Button} from 'react-native';

// class home extends React.Component {
//   render() {
//     return (
//       <View style = {StyleSheet.container}>

//     <Text>Hello from Home</Text>

//     <Button title='List' onPress={()=> this.props .navigate("List")
//       }/>
//   </View>
//   )
// }
// }

// export default home
