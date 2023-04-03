import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useAuthentication } from '../utils/hooks/useAuthentication';
import { Button, Icon } from 'react-native-elements';
import { auth, db, logOut } from '../config/firebase';

const Home = () => {
    const { user } = useAuthentication();

    return (
        <View style={styles.container}>
            <View style={styles.headerBackground} />

            <Text style={styles.title}>Cookbook</Text>
            <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.searchButton}>
                <Icon name="search" type="font-awesome" color="#000" size={30} style={{padding: 20}} />
            </TouchableOpacity>

            <View style={styles.logoutButtonContainer}>
                <Button title='log out' onPress={logOut} />
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
    headerBackground: {
        backgroundColor: '#c7ccd1',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: Platform.OS === 'ios' ? 735 : 765, // use 70 for iOS, 40 for Android
    },
    title: {
        fontSize: 50,
        fontFamily: Platform.OS === 'ios' ? 'SnellRoundhand' : 'DancingScript',
        textAlign: 'center',
        marginTop: Platform.OS === 'ios' ? 40 : 0, // use 40 for iOS, 0 for Android
        position: 'absolute',
        top: 0,
    },
    addButton: {
        backgroundColor: '#c7ccd1',
        width: 100,
        height: 50,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: Platform.OS === 'ios' ? 130 : 100, // use 120 for iOS, 90 for Android
        left: '50%',
        marginLeft: -30,
    },
    addButtonText: {
        fontSize: 30,
        color: '#000000',
        fontWeight: 'bold',
    },
    searchButton: {
        position: 'absolute',
        top: Platform.OS === 'ios' ? 35 : 5, // use 50 for iOS, 20 for Android
        right: 0,
    },
    logoutButtonContainer: {
        position: 'absolute',
        bottom: 20,
    },
});

export default Home;
