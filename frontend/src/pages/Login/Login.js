import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Cookies from 'universal-cookie'; // (temporary) used for testing cookies and log in functionalities

import Footer from '../components/Footer/Footer';
import HomeHeader from '../components/Headers/HomeHeader';

// CSS
import './Login.css';

export default function Login() {
    const cookies = new Cookies();
    let history = useHistory(); // used to redict user

    // credentials and cookies hardcoded used for testing (this will be treated in the backend)
    const userPassDict = { "test@test.com" : "test" };
    let testCookie = "280E8410C4A05326EB815B577B05574FDFB4AE016C399ACF1B02CFE5C59D59FE"; // sha-256 -> ganeshtestlogin (used for testing)

    // Function that handles login (checks if user entered right or wrong credentials and respond accordingly)
    var handleLogin = () => {
        console.log("Trying to log in...");
        let email = document.getElementById("email").value;
        let passwd = document.getElementById("password").value;

        if (email in userPassDict) {
            if (userPassDict[email] === passwd) {
                document.getElementById("wrongCreds").classList.add("d-none");
                cookies.set('SESSION', testCookie, { path: '/', sameSite : 'strict'}); // sets session cookie for user -> can't set httpOnly nor secure here, only on server
                // console.log(cookies.get('SESSION'));
                history.push('/store');
            }
            else {
                document.getElementById("wrongCreds").classList.remove("d-none");
            }
        }
        else
            document.getElementById("wrongCreds").classList.remove("d-none");
    }

    return (
        <div>
            <HomeHeader/>
            <div className="container d-flex align-items-center justify-content-center loginEggBackground">
                <div className="row d-flex flex-column align-items-center justify-content-center py-4">
                    <div className="loginFormContainer col py-5 w-auto d-flex flex-column align-items-center justify-content-center shadow">
                        <h2 className="loginText"> LOG IN </h2>
                        <form className="d-flex flex-column align-items-center justify-content-center">
                            <input className="loginFormInput my-4 mx-3 p-3" type="email" id="email" name="email" placeholder="Email" required></input>
                            <input className="loginFormInput my-4 mx-3 p-3" type="password" id="password" name="password" placeholder="Senha" required></input>
                        </form>
                        <Link className="loginLink py-2" to='/password-recovery'> Esqueci minha senha </Link>
                        <Link className="loginLink py-2" to='/register'> Não tem uma conta? Registre-se aqui! </Link>
                    </div>
                    <div className="col d-flex flex-column align-items-center justify-content-center">
                        <h3 id="wrongCreds" className="d-none my-4" style={{"color":"#E27F86"}}> Usuário ou senha incorreta </h3> 
                        <input className="loginFormButton my-4 py-3 px-5 shadow" type="button" value="Entrar" onClick={handleLogin}></input>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}