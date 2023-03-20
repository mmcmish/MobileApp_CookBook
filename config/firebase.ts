import { getAuth,signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, GoogleAuthProvider, signOut } from 'firebase/auth';
import { getFirestore, query, getDocs, collection, where, addDoc } from 'firebase/firestore';
import Constants from 'expo-constants';
import { initializeApp } from 'firebase/app';




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

const signInWithGoogle = async() =>{
  try{
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "Users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0){
      await addDoc(collection(db, "Users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  }catch (err){
    console.error(err);
    alert(err.message);
  }
};

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
  signInWithGoogle,
  LoginWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logOut
}