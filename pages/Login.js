import {StatusBar} from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard,} from 'react-native';
import {Platform} from 'react-native';
import { auth, signInWithGoogle, LoginWithEmailAndPassword } from '../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { redirect} from 'react-router-dom';

Login  = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [user,loading,error] = useAuthState(auth);

   const login = () => {
    if(!password || !email) alert("please enter required fields");
    LoginWithEmailAndPassword(email,password)
   
   }
//    function onAuthStateChanged(user){
//     setUser(user);
//     if(initializing) setInitializing(false);
//    }
//    useEffect(() =>{
//     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
//     return subscriber;
//    }, [])

   useEffect(() =>{
    if (loading){
        return;
    }
    if (user) redirect("/Home");
   }, [user, loading]);
   return(
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
        <Text style={styles.title}>Cookbook</Text>
        <Text style={styles.subtitle}>Login</Text>
        <View style={styles.inputView}>
            <TextInput

                style={styles.inputText}
                placeholder="Email"
                placeholderTextColor="#003f5c"
                value={email}
                onChangeText={(Text) => setEmail(Text)}
            />
        </View>
        <View style={styles.inputView}>
            <TextInput
                secureTextEntry
                style={styles.inputText}
                placeholder="Password"
                placeholderTextColor="#003f5c"
                value={password}
                onChangeText={(Text) => setPassword(Text)}
            />
        </View>
        <TouchableOpacity style={styles.loginBtn} onPress={login}>
            <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.loginBtn} onPress = {signInWithGoogle}>
            <Text style = {styles.loginText} > Google Login </Text>
        </TouchableOpacity>
       
        <StatusBar style="auto" />
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


export default Login;