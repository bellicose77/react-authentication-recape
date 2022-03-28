import logo from './logo.svg';
import './App.css';

import initializeAuthentication from './firebase/firbase.initilize';
import Googlelogin from './components/Googlelogin/Googlelogin';

initializeAuthentication()

function App() {
 
  return (
    <div className="App">
     <Googlelogin></Googlelogin>
    </div>
  );
}

export default App;
