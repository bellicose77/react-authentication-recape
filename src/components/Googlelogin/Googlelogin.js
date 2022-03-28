import React, { useState } from 'react';
import { GoogleAuthProvider,getAuth,signInWithPopup, initializeAuth } from "firebase/auth";
const provider = new GoogleAuthProvider();
const Googlelogin = () => {
    const [user,setUser]=useState('')
    const handleGoogleSignIN = () =>{
        const auth = getAuth();
        signInWithPopup(auth,provider)
        .then((result) => {
          const loginuser = result.user;
           setUser(loginuser)
        })
        console.log("Button works")
      }
    return (
        <div>
          <button onClick={handleGoogleSignIN}>Google SignIN</button>  

          <p>User Name:{user.displayName}</p>
          <br/>
          <p>User Email: {user.email}</p>
        </div>
    );
};

export default Googlelogin;