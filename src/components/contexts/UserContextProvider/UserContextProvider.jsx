import { GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../../../../firebase.config";
import {
  resetStateUser,
  setStateUser,
} from "../../../reducers/authReducers/authSlice";

export const UserContext = createContext();
export const googleProvider = new GoogleAuthProvider();

const UserContextProvider = ({ children }) => {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  const [userLoading, setUserLoading] = useState(true);

  // observer user auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser?.email) {
        dispatch(setStateUser({ email: currentUser.email, role: "" }));
      }
      if (!currentUser) {
        dispatch(resetStateUser());
      }
      setUserLoading(false);
    });

    // stop observing while unmounting
    return () => {
      return unsubscribe();
    };
  }, []);

  const userAuthInfo = {
    user,
    userLoading,
    setUserLoading,
  };
  return (
    <UserContext.Provider value={userAuthInfo}>{children}</UserContext.Provider>
  );
};

export default UserContextProvider;
