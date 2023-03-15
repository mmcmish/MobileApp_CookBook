import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Register screen!</Text>
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





// import React, { useState } from 'react';
// import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from 'react-native';
// import { StatusBar } from 'expo-status-bar';

// function Register() {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [emailOrPhone, setEmailOrPhone] = useState('');
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleRegister = () => {
//     // handle user registration
//   };

//   return (
//       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//         <View style={styles.container}>
//           <Text style={styles.title}>Cookbook</Text>
//           <Text style={styles.subtitle}>Register</Text>
//           <View style={styles.inputView}>
//             <TextInput
//                 style={styles.inputText}
//                 placeholder="First Name"
//                 placeholderTextColor="#003f5c"
//                 onChangeText={setFirstName}
//             />
//             <TextInput
//                 style={styles.inputText}
//                 placeholder="Last Name"
//                 placeholderTextColor="#003f5c"
//                 onChangeText={setLastName}
//             />
//           </View>
//           <View style={styles.inputView}>
//             <TextInput
//                 style={styles.inputText}
//                 placeholder="Email or Phone"
//                 placeholderTextColor="#003f5c"
//                 onChangeText={setEmailOrPhone}
//             />
//           </View>
//           <View style={styles.inputView}>
//             <TextInput
//                 style={styles.inputText}
//                 placeholder="Username"
//                 placeholderTextColor="#003f5c"
//                 onChangeText={setUsername}
//             />
//           </View>
//           <View style={styles.inputView}>
//             <TextInput
//                 secureTextEntry
//                 style={styles.inputText}
//                 placeholder="Password"
//                 placeholderTextColor="#003f5c"
//                 onChangeText={setPassword}
//             />
//           </View>
//           <TouchableOpacity style={styles.registerBtn} onPress={handleRegister}>
//             <Text style={styles.registerText}>Register</Text>
//           </TouchableOpacity>
//           <StatusBar style="auto" />
//         </View>
//       </TouchableWithoutFeedback>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 50,
//     fontFamily: Platform.OS === 'ios' ? 'SnellRoundhand' : 'DancingScript',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   subtitle: {
//     fontSize: 20,
//     textAlign: 'center',
//     marginBottom: 40,
//   },
//   inputView: {
//     width: '80%',
//     backgroundColor: '#fff',
//     borderRadius: 25,
//     height: 50,
//     marginBottom: 20,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//   },
//   inputText: {
//     height: 50,
//     color: 'black',
//     flex: 1,
//   },
//   registerBtn: {
//     width: '80%',
//     backgroundColor: '#003f5c',
//     borderRadius: 25,
//     height: 50,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 20,
//   },
//   registerText: {
//     color: 'white',
//   },
// });

// export default Register;
