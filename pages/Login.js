import React, { useRef } from 'react';
import { View, StyleSheet, Text, Button, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard,} from 'react-native';

function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();

    const handlePress = () => {
        emailRef.current.blur();
        passwordRef.current.blur();
        Keyboard.dismiss();
    };

    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={styles.container}>
                <Text style={styles.title}>Cookbook</Text>
                <View style={styles.inputView}>
                    <TextInput
                        ref={emailRef}
                        style={styles.inputText}
                        placeholder="Email"
                        placeholderTextColor="#003f5c"
                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        ref={passwordRef}
                        secureTextEntry
                        style={styles.inputText}
                        placeholder="Password"
                        placeholderTextColor="#003f5c"
                    />
                </View>
                <TouchableOpacity style={styles.loginBtn}>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.registerBtn}>
                    <Text style={styles.registerText}>Register</Text>
                </TouchableOpacity>
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

export default Login;