import { useState } from 'react';
import GetUserComponent from './Components/GetUserComponent';
import WelcomePage from './Components/WelcomePage';
import './Components/Styles/Css/app.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState("")

  return (
    <div className="container-geral">{
      isLoggedIn? (<WelcomePage user={user} setIsLoggedIn={setIsLoggedIn}/>):
      (<GetUserComponent setUser={setUser} setIsLoggedIn={setIsLoggedIn}/>)
    }
    </div>
  );
}

export default App;
