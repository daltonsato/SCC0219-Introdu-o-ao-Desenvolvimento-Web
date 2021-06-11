import React from 'react';
import Cookies from 'universal-cookie';
import { useHistory } from 'react-router-dom';

import Footer from '../components/Footer/Footer'

import './AdminLogin.css';

export default function AdminLogin() {
    const cookies = new Cookies();
    let history = useHistory(); // used to redict user

    const adminPassDict = { "admin" : "admin" };
    let testCookieAdmin = "3D6C9103FE7C1073E52A94212A82EC95C87F35F37C697B2C338A5CB31458A66A"; // sha-256 -> ganeshadmin (used for testing)
    let activeAdminSession = [ testCookieAdmin ];

    var handleAdminLogin = () => {
        console.log("Trying to log in...");
        let username = document.getElementById("username").value;
        let passwd = document.getElementById("password").value;

        if (username in adminPassDict) {
            if (adminPassDict[username] === passwd) {
                cookies.set('ADMIN_SESSION', testCookieAdmin, { path: '/', sameSite : 'strict'}); // cant set httpOnly nor secure here, only on server
                history.push('/admin');
            }
        }
    }

    let adminScreen;

    if (activeAdminSession.includes(cookies.get("ADMIN_SESSION"))) {
        adminScreen = (
            <div className="adminLoginBackground container py-4 px-5">
                <div className="row text-center py-5">
                    <h1 className="adminText"> Admin Dashboard </h1>
                </div>
                <div className="row py-5 text-left">
                    <h2 className="adminText"> Produtos </h2>
                </div>
                <div className=" row bg-white shadow p-3 w-100">
                    <ul className="adminList">
                        <li className="adminProductListItem shadow d-flex align-itens-center justify-content-center p-3 my-3">
                            <div className="text-left px-3 w-100">
                                <span className="align-middle"> Produto X </span>
                            </div>
                            <div className="d-flex w-100 align-itens-center justify-content-center">
                                <span className="align-middle px-3"> Qtd.: XX </span> 
                                <span className="align-middle px-3"> Preço: R$10,00/un. </span> 
                            </div>
                            <div className="d-flex w-100 justify-content-end">
                                <input className="adminProductListButton py-2 px-4" type="button" value="Ver mais"></input>
                            </div>
                        </li>

                        <li className="adminProductListItem shadow d-flex align-itens-center justify-content-center p-3 my-3">
                            <div className="text-left px-3 w-100">
                                <span className="align-middle"> Produto X </span>
                            </div>
                            <div className="d-flex w-100 align-itens-center justify-content-center">
                                <span className="align-middle px-3"> Qtd.: XX </span> 
                                <span className="align-middle px-3"> Preço: R$10,00/un. </span> 
                            </div>
                            <div className="d-flex w-100 justify-content-end">
                                <input className="adminProductListButton py-2 px-4" type="button" value="Ver mais"></input>
                            </div>
                        </li>

                        <li className="adminProductListItem shadow d-flex align-itens-center justify-content-center p-3 my-3">
                            <div className="text-left px-3 w-100">
                                <span className="align-middle"> Produto X </span>
                            </div>
                            <div className="d-flex w-100 align-itens-center justify-content-center">
                                <span className="align-middle px-3"> Qtd.: XX </span> 
                                <span className="align-middle px-3"> Preço: R$10,00/un. </span> 
                            </div>
                            <div className="d-flex w-100 justify-content-end">
                                <input className="adminProductListButton py-2 px-4" type="button" value="Ver mais"></input>
                            </div>
                        </li>

                        <li className="adminProductListItem shadow d-flex align-itens-center justify-content-center p-3 my-3">
                            <div className="text-left px-3 w-100">
                                <span className="align-middle"> Produto X </span>
                            </div>
                            <div className="d-flex w-100 align-itens-center justify-content-center">
                                <span className="align-middle px-3"> Qtd.: XX </span> 
                                <span className="align-middle px-3"> Preço: R$10,00/un. </span> 
                            </div>
                            <div className="d-flex w-100 justify-content-end">
                                <input className="adminProductListButton py-2 px-4" type="button" value="Ver mais"></input>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* ======================== USUÁRIOS ======================== */}
                <div className="row py-5 text-left">
                    <h2 className="adminText"> Usuários </h2>
                </div>
                <div className=" row bg-white shadow p-3 w-100">
                    <ul className="adminList">
                        <li className="adminProductListItem shadow d-flex align-itens-center justify-content-center p-3 my-3">
                            <div className="text-left px-3 w-50">
                                <span className="align-middle"> Usuário X </span>
                            </div>
                            <div className="d-flex w-100 align-itens-center justify-content-center">
                                <span className="align-middle px-3"> Nome Sobrenome - CPF: 123.456.789-0 </span> 
                            </div>
                            <div className="d-flex w-50 justify-content-end">
                                <input className="adminProductListButton py-2 px-4" type="button" value="Ver mais"></input>
                            </div>
                        </li>

                        <li className="adminProductListItem shadow d-flex align-itens-center justify-content-center p-3 my-3">
                            <div className="text-left px-3 w-50">
                                <span className="align-middle"> Usuário X </span>
                            </div>
                            <div className="d-flex w-100 align-itens-center justify-content-center">
                                <span className="align-middle px-3"> Nome Sobrenome - CPF: 123.456.789-0 </span> 
                            </div>
                            <div className="d-flex w-50 justify-content-end">
                                <input className="adminProductListButton py-2 px-4" type="button" value="Ver mais"></input>
                            </div>
                        </li>

                        <li className="adminProductListItem shadow d-flex align-itens-center justify-content-center p-3 my-3">
                            <div className="text-left px-3 w-50">
                                <span className="align-middle"> Usuário X </span>
                            </div>
                            <div className="d-flex w-100 align-itens-center justify-content-center">
                                <span className="align-middle px-3"> Nome Sobrenome - CPF: 123.456.789-0 </span> 
                            </div>
                            <div className="d-flex w-50 justify-content-end">
                                <input className="adminProductListButton py-2 px-4" type="button" value="Ver mais"></input>
                            </div>
                        </li>

                        <li className="adminProductListItem shadow d-flex align-itens-center justify-content-center p-3 my-3">
                            <div className="text-left px-3 w-50">
                                <span className="align-middle"> Usuário X </span>
                            </div>
                            <div className="d-flex w-100 align-itens-center justify-content-center">
                                <span className="align-middle px-3"> Nome Sobrenome - CPF: 123.456.789-0 </span> 
                            </div>
                            <div className="d-flex w-50 justify-content-end">
                                <input className="adminProductListButton py-2 px-4" type="button" value="Ver mais"></input>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
    else {
        adminScreen = (
            <div className="adminLoginBackground d-flex flex-column align-items-center justify-content-center container py-4">
                <div className="row text-center">
                    <h2 className="adminText"> ADMIN - LOG IN </h2>
                </div>
                <div className="row">
                    <form className="adminFormContainer col py-5 d-flex flex-column align-items-center justify-content-center shadow">
                        <input className="adminFormInput my-4 mx-3 p-3" type="username" id="username" name="username" placeholder="Nome de usuário" required></input>
                        <input className="adminFormInput my-4 mx-3 p-3" type="password" id="password" name="password" placeholder="Senha" required></input>
                    </form>
                </div>
                <div className="row">
                    <div className="col d-flex flex-column align-items-center justify-content-center">
                        <input className="adminFormButton my-4 py-3 px-5 shadow" type="button" value="Entrar" onClick={handleAdminLogin}></input>
                    </div>
                </div>
            </div>
        );
    }

    return (
    <div>
        {adminScreen}
        < Footer />
    </div>  
    );
}