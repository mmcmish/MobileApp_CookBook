import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useAuthentication } from '../utils/hooks/useAuthentication';
import { Button } from 'react-native-elements';
import { auth, db, logOut } from '../config/firebase';


function Home(){
    
    const { user } = useAuthentication();

    return(
        <View>
            <Text> {user?.email} </Text>

            <Button title='log out'  onPress={logOut} />
        </View>
    )


}
export default Home;
