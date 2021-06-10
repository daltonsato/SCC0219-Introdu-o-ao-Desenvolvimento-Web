import React from 'react';

import Footer from '../components/Footer/Footer'

import './AdminLogin.css';

export default function AdminLogin() {
    return (
    <div>
        <div className="adminLoginBackground d-flex flex-column align-items-center justify-content-center container py-4">
            <div className="row text-center">
                <h2 className="adminText"> ADMIN - LOG IN </h2>
            </div>
            <div className="row">
                <form className="adminFormContainer col py-5 d-flex flex-column align-items-center justify-content-center shadow">
                    <input className="adminFormInput my-4 mx-3 p-3" type="email" id="email" name="email" placeholder="Nome de usuário" required></input>
                    <input className="adminFormInput my-4 mx-3 p-3" type="password" id="password" name="password" placeholder="Senha" required></input>
                </form>
            </div>
            <div className="row">
                <div className="col d-flex flex-column align-items-center justify-content-center">
                    <input className="adminFormButton my-4 py-3 px-5 shadow" type="button" value="Entrar"></input>
                </div>
            </div>
        </div>
        < Footer />
    </div>  
    );
}