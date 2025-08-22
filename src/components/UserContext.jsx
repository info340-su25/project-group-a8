// implemented layout by chatgpt 
// chatgpt recomended to have a global variable for user to store in seperate file

import { createContext, useContext, useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { signedOutUser } from './samples';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [currUser, setCurrUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        user.userId = user.uid;
        user.userName = user.displayName;
        setCurrUser(user);
      } else {
        setCurrUser(signedOutUser[0]);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <UserContext.Provider value={{ currUser, setCurrUser }}>
      {children}
    </UserContext.Provider>
  );
}

// Custom hook for easy access
export function useUser() {
  return useContext(UserContext);
}
