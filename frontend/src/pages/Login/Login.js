import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import Footer from '../components/Footer/Footer';
import HomeHeader from '../components/Headers/HomeHeader';

// CSS
import './Login.css';

export default function Login() {
    let history = useHistory(); // used to redict user
    
    // Function that handles login (checks if user entered right or wrong credentials and respond accordingly)
    var handleLogin = async () => {
        // console.log("Trying to log in...");
        let email = document.getElementById("email").value;
        let passwd = document.getElementById("password").value;

        let creds = {
            "email": email,
            "password": passwd  
        };

        let resp = await fetch(window.BACKEND_URL +'/user/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(creds)
        });

        if (resp.status === 200) {
            resp.json().then((data) => {
                document.getElementById("wrongCreds").classList.add("d-none");
                history.push('/store');
            });
        }
        else {
            resp.json().then((data) => {
                document.getElementById("wrongCreds").classList.remove("d-none");
            });
        }
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