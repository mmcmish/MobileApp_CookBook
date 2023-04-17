import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal, TextInput, Switch } from 'react-native';
import { useAuthentication } from '../utils/hooks/useAuthentication';
import { Button, Icon } from 'react-native-elements';
import { auth, db, logOut, CreateList } from '../config/firebase';

const Home = () => {
    const { user } = useAuthentication();
    const [modalVisible, setModalVisible] = useState(false);
    const [showAddMembers, setShowAddMembers] = useState(false);
    const [members, setMembers] = useState([]);
    const [newMemberEmail, setNewMemberEmail] = useState('');
    const [listName, setListName] = useState("")

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };

    const createlist = () =>{
        if(!listName) alert ("Enter the required field")
        CreateLis(listName);
    }

    const addMember = () => {
        setMembers([...members, newMemberEmail]);
        setNewMemberEmail('');
    };

    return (
        <View style={styles.container}>

        <View style={styles.headerBackground} />

            <Text style={styles.title}>Cookbook</Text>
            <TouchableOpacity style={styles.addButton} onPress={toggleModal}>
                <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.searchButton}>
                <Icon name="search" type="font-awesome" color="#000" size={30} style={{ padding: 20 }} />
            </TouchableOpacity>

            <View style={styles.logoutButtonContainer}>
                <Button title="log out" onPress={logOut} />
            </View>

            <Modal visible={modalVisible} animationType="slide">
                <View style={styles.modalContainer}>
                    <Text style={styles.modalTitle}>Create a new list</Text>
                    <TextInput style={styles.input} placeholder="Enter list name" onChangeText={(Text) => setListName(Text)} />

                    <View style={styles.switchContainer}>
                        <Text style={styles.switchText}>Add Members</Text>
                        <Switch
                            value={showAddMembers}
                            onValueChange={(value) => setShowAddMembers(value)}
                        />
                    </View>

                    {showAddMembers && (
                        <>
                            {members.map((member, index) => (
                                <Text key={index}>{member}</Text>
                            ))}
                            <TextInput
                                style={styles.input}
                                placeholder="Enter email address"
                                value={newMemberEmail}
                                onChangeText={setNewMemberEmail}
                            />
                            <Button title="Add Member" onPress={addMember} />
                        </>
                    )}

                    <View style={styles.buttonContainer}>
                        <Button title="Cancel" onPress={toggleModal} />
                        <Button title="Save" onPress={createlist} />
                    </View>
                </View>
            </Modal>

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
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    input: {
        height: 40,
        width: '80%',
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '80%',
        marginTop: 20,
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    switchText: {
        marginRight: 10,
    },
});

export default Home;