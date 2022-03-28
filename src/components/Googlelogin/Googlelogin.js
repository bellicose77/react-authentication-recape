import React from 'react';
import { GoogleAuthProvider,getAuth,signInWithPopup, initializeAuth } from "firebase/auth";
const provider = new GoogleAuthProvider();
const Googlelogin = () => {
    const handleGoogleSignIN = () =>{
        const auth = getAuth();
        signInWithPopup(auth,provider)
        .then((result) => {
          const loginuser = result.user;
           console.log(loginuser)
        })
        console.log("Button works")
      }
    return (
        <div>
          <button onClick={handleGoogleSignIN}>Google SignIN</button>  
        </div>
    );
};

export default Googlelogin;