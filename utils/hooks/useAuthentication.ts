import React, { useState } from 'react';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { query, collection, where, getDocs, QuerySnapshot, DocumentSnapshot } from 'firebase/firestore';
import { db } from '../../config/firebase';

const auth = getAuth();

export function useAuthentication() {
  const [user, setUser] = React.useState<User>();
  const [Name, setName] = useState("")

  React.useEffect(() => {
    const unsubscribeFromAuthStatuChanged = onAuthStateChanged  (auth, async (user) => {
      if (user) {
        setUser(user);
        const usersCollection = collection(db, 'Users');
        const userQuery = query(usersCollection, where('uid', '==', user.uid));
      
        getDocs(userQuery).then((querySnapshot) => {
          querySnapshot.forEach((documentSnapshot) => {
            console.log(documentSnapshot.id, documentSnapshot.data());
          });
        }).catch((error) => {
          console.error('Error fetching user data:', error);
        });
      } else {
        // User is signed out
        setUser(undefined);
      }
    });

    return unsubscribeFromAuthStatuChanged;
  }, []);

  return {
    user
  };
}

function useFirestoreQueryData(q: any) {
  throw new Error('Function not implemented.');
}
