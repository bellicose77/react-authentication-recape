import logo from './logo.svg';
import './App.css';
import { GoogleAuthProvider } from "firebase/auth";

function App() {
  const handleGoogleSignIN = () =>{
    console.log("Button works")
  }
  return (
    <div className="App">
     <button onClick={handleGoogleSignIN}>Google SignIN</button>
    </div>
  );
}

export default App;
