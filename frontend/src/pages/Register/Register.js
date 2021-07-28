// Page used to create a new account
// Not working for now...

import React, { useState } from 'react';

import Footer from '../components/Footer/Footer';
import HomeHeader from '../components/Headers/HomeHeader';

import '../Login/Login.css'; // using same CSS

export default function Login() {
    var [username, setUsername] = useState("");
    var [email, setEmail] = useState("");
    var [password, setPassword] = useState("");

    let handleSubmit = async (event) => {
        event.preventDefault();

        let creds = {
            "username": username,
            "email": email,
            "password": password
        }
        
        // process.env.BACKEND_URL + 
        let resp = await fetch('/user/register', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(creds)
        });

        console.log(resp);

        if (resp.status === 201) {
            document.getElementById("alertH3").innerText = "Conta criada com sucesso";
            document.getElementById("alertText").classList.remove("d-none");
        }
        else {
            document.getElementById("alertH3").innerText = "Erro ao cadastrar usuário";
            document.getElementById("alertText").classList.remove("d-none");
        }

    }

    return (
        <div>
            <HomeHeader/>
            <div className="container d-flex align-items-center justify-content-center loginEggBackground">
                <form onSubmit={handleSubmit} className="row d-flex flex-column align-items-center justify-content-center py-4">
                    <div className="loginFormContainer col py-5 w-auto d-flex flex-column align-items-center justify-content-center shadow">
                        <h2 className="loginText"> REGISTRE-SE </h2>
                        <input className="loginFormInput my-3 mx-3 p-3" value={username} onChange={(event) => {setUsername(event.target.value)}} type="username" id="username" name="username" placeholder="Nome de usuário"></input>
                        <input className="loginFormInput my-3 mx-3 p-3" value={email} onChange={(event) => {setEmail(event.target.value)}} type="email" id="email" name="email" placeholder="Email"></input>
                        <input className="loginFormInput my-3 mx-3 p-3" value={password} onChange={(event) => {setPassword(event.target.value)}}type="password" id="password" name="password" placeholder="Senha"></input>
                        <input className="loginFormInput my-3 mx-3 p-3" type="password" id="password_confirm" name="password_confirm" placeholder="Confirme sua senha"></input>
                    </div>
                    <div className="col d-flex align-items-center justify-content-center">
                        <input className="loginFormButton my-5 py-3 px-5 shadow" type="submit" value="Criar conta"></input>
                    </div>
                    <div id="alertText" className="text-center"> <h3 id="alertH3">-</h3></div>
                </form>
                
            </div>
            <Footer />
        </div>
    );
}