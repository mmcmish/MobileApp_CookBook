import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";



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

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);


return (