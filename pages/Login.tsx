import {StatusBar} from 'expo-status-bar';
import React, {useRef} from 'react';
import {View, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard,} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {Input, Button} from 'react-native-elements';
import {Platform} from 'react-native';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';


const auth = getAuth();


const Signin = () => {
    const [value, setValue] = React.useState({
        email: '',
        password: '',
        error: ''
    })


    async function Login() {
        if (value.email === '' || value.password === '') {
            setValue({
                ...value,
                error: 'email and password are mandatory'

            })
            return;
        }

        try {
            await signInWithEmailAndPassword(auth, value.email, value.password);

        } catch (error) {
            setValue({
                ...value,
                error: error.message,
            })

        }
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <Text style={styles.title}>Cookbook</Text>
                <Text style={styles.subtitle}>Login</Text>
                <View style={styles.inputView}>
                    <TextInput

                        style={styles.inputText}
                        placeholder="Email"
                        placeholderTextColor="#003f5c"
                        value={value.email}
                        onChangeText={(text) => setValue({...value, email: text})}
                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        secureTextEntry
                        style={styles.inputText}
                        placeholder="Password"
                        placeholderTextColor="#003f5c"
                        value={value.password}
                        onChangeText={(text) => setValue({...value, password: text})}
                    />
                </View>
                <TouchableOpacity style={styles.loginBtn} onPress={Signin}>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>
                <StatusBar style="auto" />
            </View>
        </TouchableWithoutFeedback>
    );
}

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
    subtitle: {
        fontSize: 20,
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
        fontFamily: Platform.OS === 'ios' ? 'Helvetica' : 'Roboto',
        fontSize: 16,
        paddingLeft: 10,
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
    },
});


export default Signin;