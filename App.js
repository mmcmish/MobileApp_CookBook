import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import {getFireStore, setDoc, doc} from "firebase/firestore"
import Login from "./pages/Login";
import Home from "./pages/Home";
import list from "./pages/List";

export default function App() {

  // Initialize Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyCSfPj64r3ERrPyKv0ZkOu_W7dpl7deJiE",
    authDomain: "cookbook-e93ca.firebaseapp.com",
    databaseURL: "https://cookbook-e93ca-default-rtdb.firebaseio.com",
    projectId: "cookbook-e93ca",
    storageBucket: "cookbook-e93ca.appspot.com",
    messagingSenderId: "575825664304",
    appId: "1:575825664304:web:67759dece2c2f84e7110f5",
    measurementId: "G-BBBHWLBKVQ"
  };

  initializeApp(firebaseConfig);
  getAnalytics(app);

  

  const SendDatatoFirebase = async() =>{
    const firestore = getFireStore();

    await setDoc(doc(firestore, " user", "id"),{
      phone: "48742424222",
      name: "adada",
      age: "19"
    })
  }

  return (
    <View style={styles.container}>
      <Button title='Send data' onPress={SendDatatoFirebase} ></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
