import { useState } from "react";
import '../Styles/Css/app.css';


const GetUserComponent = ({ setUser, setIsLoggedIn }) => {

    const [ userInput, setUserInput] = useState("");

    const handleLogin = (userInput) => {
        setUser(userInput); 
        setIsLoggedIn(true)   
    }

    return (
        <form onSubmit={(event) => handleLogin(event.preventDefault())}>
            <input
                type="text"
                placeholder="Insira seu nome"
                value={userInput}
                onChange={(event) => setUserInput(event.target.value)} 
                className='input-app'
            />
             <button className="button-geral" type="submit" onClick={() => handleLogin(userInput)}>Acessar com o nome</button>
        </form>
    )
}

export default GetUserComponent