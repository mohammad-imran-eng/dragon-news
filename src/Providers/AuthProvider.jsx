import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword,onAuthStateChanged,signOut,signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import { auth } from './../firebase/firebase_init';

export const authContext = createContext();

const AuthProvider = ({children}) => {

    const [currentUser,setCurrentUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const createNewUser = (email,password)=> {
        setLoading(true)
       return createUserWithEmailAndPassword(auth,email,password)
    }

    const logIn = (email,password)=> {
        setLoading(true)
       return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut =()=> {
        setLoading(true)
        signOut(auth)
        setCurrentUser(null)
    }

    const updateUserProfile = (updatedData)=> {
        return updateProfile(auth.currentUser,updatedData)
    }

   
    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            setLoading(false);
            if(user){
                console.log(user);
                setCurrentUser(user);
            }
            else{
                console.log("User is signed out");
            }
        })
    },[])

    const authInfo = {
        createNewUser,
        currentUser,
        setCurrentUser,
        logIn,
        logOut,
        loading,
        updateUserProfile
    }
    return (
        <div>
            <authContext.Provider value={authInfo}>
                {children}
            </authContext.Provider>
        </div>
    );
};

export default AuthProvider;