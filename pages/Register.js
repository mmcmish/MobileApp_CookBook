import React, {useEffect, useState} from 'react';
import {useAuthState} from "react-firebase-hooks/auth"
import {
    Keyboard,
    Platform,
    TouchableWithoutFeedback,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StatusBar,
    StyleSheet
} from 'react-native';
import {Button} from 'react-native-elements';
import {redirect,} from "react-router-dom";
import {auth, registerWithEmailAndPassword, signInWithGoogle} from '../config/firebase';

Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);

    const register = () => {
        if (!name || !password || !email) alert("please enter required fields");
        registerWithEmailAndPassword(name, email, password);

    };

    useEffect(() => {
        if (loading) return;
        if (user) redirect("/Home");
    }, [user, loading]);
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <Text style={styles.title}>Cookbook</Text>
                <Text style={styles.subtitle}>Register</Text>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.inputText}
                        value={name}
                        placeholderTextColor="#003f5c"
                        placeholder='Full Name'
                        onChangeText={(Text) => setName(Text)}
                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.inputText}
                        value={email}
                        placeholder="Email"
                        placeholderTextColor="#003f5c"
                        onChangeText={(Text) => setEmail(Text)}
                    />
                </View>

                <View style={styles.inputView}>
                    <TextInput
                        secureTextEntry
                        style={styles.inputText}
                        placeholder="Password"
                        value={password}
                        placeholderTextColor="#003f5c"
                        onChangeText={(Text) => setPassword(Text)}
                    />
                </View>
                <TouchableOpacity style={styles.registerBtn} onPress={register}>
                    <Text style={styles.registerText}>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.registerBtn} onPress={signInWithGoogle}>
                    <Text style={styles.registerText}>Sign up with Google</Text>
                </TouchableOpacity>

                {/*<Button title="Sign in with Google" style={styles.registerBtn} onPress={signInWithGoogle}/>*/}
                <StatusBar style="auto"/>
            </View>
        </TouchableWithoutFeedback>

    )

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
        marginBottom: 20,
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    inputText: {
        height: 50,
        color: 'black',
        flex: 1,
    },
    registerBtn: {
        width: '80%',
        backgroundColor: '#003f5c',
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    registerText: {
        color: 'white',
    },
});

export default Register;
