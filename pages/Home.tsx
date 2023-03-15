import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useAuthentication } from '../utils/hooks/useAuthentication';
import { Button } from 'react-native-elements';
import { signOut } from 'firebase/auth';

export default function Home(){
const {user} = useAuthentication();

return(
    <View>
        <Text>Welcome {user?.email}</Text>



        <Button title="Sign out" onPress={() => signOut(auth)} />
    </View>
)



}

