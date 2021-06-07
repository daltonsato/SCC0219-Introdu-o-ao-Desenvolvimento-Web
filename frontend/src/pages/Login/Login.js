import React from 'react';
import { Link } from 'react-router-dom';

import Footer from '../components/Footer/Footer';
import HomeHeader from '../components/Headers/HomeHeader';

import './Login.css';

export default function Login() {
    return (
        <div>
            <HomeHeader />
            <div className="container d-flex align-items-center justify-content-center loginEggBackground">
                <div className="row d-flex flex-column align-items-center justify-content-center py-4">
                    <div className="loginFormContainer col py-5 w-auto d-flex flex-column align-items-center justify-content-center shadow">
                        <h2 className="loginText"> LOG IN </h2>
                        <input className="loginFormInput my-4 mx-3 p-3" type="email" id="email" name="email" placeholder="Email"></input>
                        <input className="loginFormInput my-4 mx-3 p-3" type="password" id="password" name="password" placeholder="Senha"></input>
                        <Link className="loginLink py-2" to='/password-recovery'> Esqueci minha senha </Link>
                        <Link className="loginLink py-2" to='/register'> Não tem uma conta? Registre-se aqui! </Link>
                    </div>
                    <div className="col d-flex align-items-center justify-content-center">
                        <input className="loginFormButton my-5 py-3 px-5 shadow" type="button" value="Entrar"></input>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}