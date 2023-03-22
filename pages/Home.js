import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useAuthentication } from '../utils/hooks/useAuthentication';
import { Button } from 'react-native-elements';
import { signOut } from 'firebase/auth';
import { auth, db, logOut } from '../config/firebase';
import { query, collection, getDocs, where } from "firebase/firestore";
import { useAuthState } from 'react-firebase-hooks/auth';
import { redirect } from 'react-router-dom';


function Home(){
    const[user,loading,error] = useAuthState(auth);
    const[name,setName] = useState("");
    const fetchUserName = async () =>{
        try{
            const q = query(collection(db, "Users"), where("uid", "==", user?.uid));
            const doc = await getDocs(q);
            const data = doc.docs[0].data()
            setName(data.name)
        }catch(err){
            console.error(err);
            alert("an error occured while fetching user data");
        }
    };
    useEffect(() =>{
        if (loading) return;
        if(!user)redirect("/Login");
        fetchUserName();
    }, [user, loading] )

    return(
        <View>
            <Text> {name} </Text>
            <Text> {user?.email} </Text>

            <Button title='log out'  onPress={logOut} />
        </View>
    )


}
export default Home;
