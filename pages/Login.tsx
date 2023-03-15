import { StatusBar } from 'expo-status-bar';
import React, {useRef} from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard,} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { Button } from 'react-native-elements';
import { Platform } from 'react-native';

const Cookbook: React.FC<StackScreenProps<any>> = ({navigation}) =>{
  return(
    <View style={styles.container}>
    <Text style={styles.title}>Cookbook</Text>
    <View style={styles.inputView}>
        <TextInput
          
            style={styles.inputText}
            placeholder="Email"
            placeholderTextColor="#003f5c"
        />
    </View>
    <View style={styles.inputView}>
        <TextInput
           
            secureTextEntry
            style={styles.inputText}
            placeholder="Password"
            placeholderTextColor="#003f5c"
        />
    </View>
    <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>Login</Text>
        <Button title= "Login" buttonStyle = {styles.loginBtn} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.registerBtn}>
        <Text style={styles.registerText}>Register</Text>
        <Button />
    </TouchableOpacity>
</View>
  )
}




// function Login() {
//     const emailRef = useRef();
//     const passwordRef = useRef();

//     const handlePress = () => {
//         emailRef.current.blur();
//         passwordRef.current.blur();
//         Keyboard.dismiss();
//     };

//     return (
//         <TouchableWithoutFeedback onPress={handlePress}>
    
//         </TouchableWithoutFeedback>
//     );
// }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 50,
        fontFamily: Platform.OS === 'ios' ? 'SnellRoundhand' : 'DancingScript',
        textAlign: 'center',
        marginBottom: 40,
    },
    inputView: {
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: 'center',
        padding: 20,
    },
    inputText: {
        height: 50,
        color: 'black',
    },
    loginBtn: {
        width: '80%',
        backgroundColor: '#fb5b5a',
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        marginBottom: 10,
    },
    loginText: {
        color: 'white',
       marginTop:'-20%',
       alignItems: 'center'
    },
    registerBtn: {
        width: '80%',
        backgroundColor: '#003f5c',
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    registerText: {
        color: 'white',
    },
});

export default Cookbook;