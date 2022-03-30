import '../Styles/Css/app.css'

const WelcomePage = ({ user, setIsLoggedIn }) => {

    const HandleLogout = () => {
        setIsLoggedIn(false)
    }

    return(
        <div>
            <h2>Bem vindo {user}  !</h2>
            <button className="button-geral" onClick={() => HandleLogout()}>Logout</button>
        </div>
    )
}

export default WelcomePage