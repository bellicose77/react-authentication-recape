import React, { useState } from 'react';
import { GoogleAuthProvider,getAuth,signInWithPopup, signOut } from "firebase/auth";
const provider = new GoogleAuthProvider();
const Googlelogin = () => {
    const [user,setUser]=useState('')
    const auth = getAuth();
    const handleGoogleSignIN = () =>{
       
        signInWithPopup(auth,provider)
        .then((result) => {
          const loginuser = result.user;
           setUser(loginuser)
        })
        console.log("Button works")
      }
      const handleSignOut = ()=>{
          signOut(auth)
          .then(()=>{
              setUser('')
          })
          console.log("logout button")
      }
    return (
        <div>
            {user.name?
            <button onClick={()=>handleSignOut()}>Sign Out</button> 
            :
            <button onClick={handleGoogleSignIN}>Google SignIN</button>
                
            }
        

          <p>User Name:{user.displayName}</p>
          <br/>
          <p>User Email: {user.email}</p>
        </div>
    );
};

export default Googlelogin;