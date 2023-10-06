import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";


  


 export const Authcontext = createContext(null)
 const auth = getAuth(app)  
 
const AuthProvider = ({children}) => {
    const [users, setuser] = useState(null)

    const creatuser = (email, password) =>{
       return createUserWithEmailAndPassword(auth, email, password ) 
    }
    const signin = ( email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logout = () =>{
        return signOut(auth);
    }
    useEffect(()=>{
     const unsubscribe =  onAuthStateChanged(auth, currentuser =>{
        console.log('yess user', currentuser)

       setuser(currentuser)
    });
    return () => {
        unsubscribe ();
    }
    },[])
    
        
     

    const authInfo ={
       users,
       creatuser,
       logout,
       signin
        
    }
    return (
        <Authcontext.Provider value={authInfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default AuthProvider;