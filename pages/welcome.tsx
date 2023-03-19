import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { Button } from 'react-native-elements';
import {Platform} from 'react-native';


const WelcomeScreen: React.FC<StackScreenProps<any>> = ({ navigation }) => {
  return (
      <View style={styles.container}>
        <Text style={styles.title}>Cookbook</Text>

        <View style={styles.buttons}>
          <Button
              title="Login"
              buttonStyle={styles.loginBtn}
              titleStyle={styles.buttonTitle}
              onPress={() => navigation.navigate('Login')}
          />
          <Button
              title="Sign up"
              buttonStyle={styles.registerBtn}
              titleStyle={styles.buttonTitle}
              onPress={() => navigation.navigate('Register')}
          />
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 50,
    fontFamily: Platform.OS === 'ios' ? 'SnellRoundhand' : 'DancingScript',
    textAlign: 'center',
    marginBottom: 40,
  },
  buttons: {
    width: '100%',
    marginTop: 40,
  },
  loginBtn: {
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  registerBtn: {
    backgroundColor: '#003f5c',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  buttonTitle: {
    color: 'white',
    fontFamily: Platform.OS === 'ios' ? 'Helvetica' : 'Roboto',
    fontSize: 16,
  },
});

export default WelcomeScreen;
