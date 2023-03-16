import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Keyboard,
    TouchableWithoutFeedback,
    Platform
} from 'react-native';
import {Input, Button} from 'react-native-elements';
import {StackScreenProps} from '@react-navigation/stack';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';

const auth = getAuth();


const Register: React.FC<StackScreenProps<any>> = ({navigation}) => {
    const [value, setValue] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        userName: '',
        password: '',
        error: ''
    })


    async function Signup() {

        if (value.firstName == '' || value.lastName == '' || value.email == '' || value.userName == '' || value.password == '') {

            setValue({
                ...value,
                error: "the signup fields must not be empty"
            })
            return;
            // const [firstName, setFirstName] = useState('');
            // const [lastName, setLastName] = useState('');
            // const [email, setEmail] = useState('');
            // const [username, setUsername] = useState('');
            // const [password, setPassword] = useState('');
        }

        try {
            await createUserWithEmailAndPassword(auth, value.email, value.password);
            navigation.navigate("login");
        } catch (error) {
            setValue({
                ...value,
                error: error.message,
            })

        }

        setValue({
            ...value,
            error: ''
        })
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <Text style={styles.title}>Cookbook</Text>
                <Text style={styles.subtitle}>Register</Text>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.inputText}
                        placeholder="First Name"
                        placeholderTextColor="#003f5c"
                        onChangeText={(text) => setValue({...value, firstName: text})}
                    />
                    <TextInput
                        style={styles.inputText}
                        placeholder="Last Name"
                        placeholderTextColor="#003f5c"
                        onChangeText={(text) => setValue({...value, lastName: text})}
                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Email"
                        placeholderTextColor="#003f5c"
                        onChangeText={(text) => setValue({...value, email: text})}
                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Username"
                        placeholderTextColor="#003f5c"
                        onChangeText={(text) => setValue({...value, userName: text})}
                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Password"
                        placeholderTextColor="#003f5c"
                        onChangeText={(text) => setValue({...value, password: text})}
                        secureTextEntry={true}
                    />
                </View>
                <TouchableOpacity style={styles.registerBtn} onPress={Signup}>
                    <Text style={styles.registerText}>Register</Text>
                </TouchableOpacity>
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
