import logo from './logo.svg';
import './App.css';
import { GoogleAuthProvider,getAuth,signInWithPopup, initializeAuth } from "firebase/auth";
import initializeAuthentication from './firebase/firbase.initilize';
initializeAuthentication()
const provider = new GoogleAuthProvider();
function App() {
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
    <div className="App">
     <button onClick={handleGoogleSignIN}>Google SignIN</button>
    </div>
  );
}

export default App;
