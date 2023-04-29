import React, { useState } from 'react';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { query, collection, where, getDocs, QuerySnapshot, DocumentSnapshot } from 'firebase/firestore';
import { db } from '../../config/firebase';

const auth = getAuth();

export function useAuthentication() {
  const [user, setUser] = React.useState<User>();

  React.useEffect(() => {
    const unsubscribeFromAuthStatuChanged = onAuthStateChanged  (auth, async (user) => {
      if (user) {
        setUser(user);
 
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
