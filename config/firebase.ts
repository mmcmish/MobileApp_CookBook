import { getAuth,signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, GoogleAuthProvider, signOut } from 'firebase/auth';
import { getFirestore, query, getDocs, collection, where, addDoc, updateDoc, doc } from 'firebase/firestore';
import Constants from 'expo-constants';
import { initializeApp } from 'firebase/app';
import {GoogleSignin, GoogleSigninButton, statusCodes,} from 'react-native-google-signin';
import Auth from '@react-native-firebase/auth';
import "firebase/auth"



const firebaseConfig = {
  apiKey: Constants.manifest?.extra?.firebaseApiKey,
  authDomain: Constants.manifest?.extra?.firebaseAuthDomain,
  projectId: Constants.manifest?.extra?.firebaseProjectId,
  storageBucket: Constants.manifest?.extra?.firebaseStorageBucket,
  messagingSenderId: Constants.manifest?.extra?.firebaseMessagingSenderId,
  appId: Constants.manifest?.extra?.firebaseAppId,
};

const app =initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

// const  signInWithGoogle = async() =>{
//   GoogleSignin.configure({
//     webClientId: '575825664304-i0tho47taovuej8d2efrjaps11nc2k61.apps.googleusercontent.com',
//     offlineAccess: true
//   });
//
//  const {idToken} = await GoogleSignin.signIn();
//  const googleCredential = Auth.GoogleAuthProvider.credential(idToken);
//  const user_sign_in = Auth().signInWithCredential(googleCredential);
//  user_sign_in.then((user) =>{
//   console.log(user);
//  }).catch((error) =>{
//   console.log(error);
//  })
// };

const LoginWithEmailAndPassword = async (email, password) =>{

  try{
    await signInWithEmailAndPassword(auth, email, password);
  }catch(err){
    console.error(err);
    alert(err.message)
  }
};

const registerWithEmailAndPassword = async (name, email,password) => {
  try{
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "Users"), {
      uid: user.uid,
      name, 
      authProvider: "local",
      email,
    });
  }catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const addList = async(listName) =>{
  try{
    const groceryListRef = doc(db, "Users", "Grocery-List");
    await updateDoc(groceryListRef, {
      listName,
    });
  }catch (err) {
    console.error(err);
  }
}

const sendPasswordReset = async(email) => {
  try{
    await sendPasswordResetEmail(auth, email);
    alert("password reset link sent");
  }catch(err){
    console.error(err);
    alert(err.message);
  }
};

const logOut = () =>{
  signOut(auth);
};
export{
  auth,
  db,
  app,
  // signInWithGoogle,
  addList,
  LoginWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logOut
}