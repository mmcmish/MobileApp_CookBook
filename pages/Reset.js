import React, {useEffect, useState} from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { View,TextInput } from "react-native";
import {redirect} from "react-router-dom";
import { auth, sendPasswordResetEmail } from "../config/firebase";

Reset = () =>{
    const [email, setEmail] = useState("");
    const [user, loading, error] = useAuthState(auth);

    useEffect(() =>{
        if (loading) return;
        if(user) redirect("/Home");
    },[user, loading])
    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style = {StyleSheet.container}>
                <TextInput
                    style = {StyleSheet.inputText}
                    placeholder = "Email"
                    placeholderTextColor="#003f5c"
                    value={email}
                    onChangeText = {(Text) => setEmail(Text)}
                    />
            </View>
            <TouchableOpacity style={styles.loginBtn} onPress={() => sendPasswordResetEmail(email)}>
            <Text style={styles.loginText}>Reset Password</Text>
        </TouchableOpacity>
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

export default Reset;
