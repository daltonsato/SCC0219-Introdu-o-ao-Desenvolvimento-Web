import React from 'react';

import Footer from '../components/Footer/Footer';
import HomeHeader from '../components/Headers/HomeHeader';

import '../Login/Login.css'; // using same CSS

export default function Login() {
    return (
        <div>
            <HomeHeader />
            <div className="container d-flex align-items-center justify-content-center loginEggBackground">
                <div className="row d-flex flex-column align-items-center justify-content-center py-4">
                    <div className="loginFormContainer col py-5 w-auto d-flex flex-column align-items-center justify-content-center shadow">
                        <h2 className="loginText"> REGISTRE-SE </h2>
                        <input className="loginFormInput my-3 mx-3 p-3" type="username" id="username" name="username" placeholder="Nome de usuário"></input>
                        <input className="loginFormInput my-3 mx-3 p-3" type="email" id="email" name="email" placeholder="Email"></input>
                        <input className="loginFormInput my-3 mx-3 p-3" type="password" id="password" name="password" placeholder="Senha"></input>
                        <input className="loginFormInput my-3 mx-3 p-3" type="password" id="password_confirm" name="password_confirm" placeholder="Confirme sua senha"></input>
                    </div>
                    <div className="col d-flex align-items-center justify-content-center">
                        <input className="loginFormButton my-5 py-3 px-5 shadow" type="button" value="Criar conta"></input>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}