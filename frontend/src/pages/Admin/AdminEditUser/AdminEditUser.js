import React from 'react';
import Cookies from 'universal-cookie';
import { Link, useHistory } from 'react-router-dom';
import { useParams } from "react-router";

import Footer from '../../components/Footer/Footer'

import './AdminEditUser.css';

export default function AdminEditUser() {
    const cookies = new Cookies();
    let history = useHistory(); // used to redict user
    let params = useParams(); // params in URL (see routes.js)

    let testCookieAdmin = "3D6C9103FE7C1073E52A94212A82EC95C87F35F37C697B2C338A5CB31458A66A"; // sha-256 -> ganeshadmin (used for testing)
    let activeAdminSession = [ testCookieAdmin ];

    let userComponent;

    var removeUser = () => {
        console.log("Antes da alteração: ", window.users[params.id])

        delete window.users[params.id];
        
        console.log("Usuário removido, ID = ", params.id);

        history.push("/admin");
    }

    if (!activeAdminSession.includes(cookies.get("ADMIN_SESSION"))) {
        history.push("/admin"); // not an admin, can't access this page
        return (<div> Redirecting... </div>);
    }
    else {
        if (window.users[params.id] !== undefined && window.users[params.id] !== null) {
            let user = window.users[params.id]
            userComponent = (
                <div className="col m-3 p-3 bg-white shadow">
                    <div className="row d-flex flex-column">
                        <div className="userToEditField d-flex justify-content-between py-2">
                            <span> Nome: </span>
                            <input className="userToEditTextArea w-50 py-1 px-3" type="text" name="name" id="name" defaultValue={user.name} disabled></input>
                        </div>
                        <div className="userToEditField d-flex justify-content-between py-2">
                            <span> CPF: </span>
                            <input className="userToEditTextArea w-50 py-1 px-3" type="text" name="cpf" id="cpf" defaultValue={user.CPF} disabled></input>
                        </div>
                        <div className="userToEditField d-flex justify-content-between py-2">
                            <span> Email: </span>
                            <input className="userToEditTextArea w-50 py-1 px-3" type="text" name="email" id="email" defaultValue={user.email} disabled></input>
                        </div>
                        <div className="userToEditField d-flex justify-content-between py-2">
                            <span> Telefone: </span>
                            <input className="userToEditTextArea w-50 py-1 px-3" type="text" name="tel" id="tel" defaultValue={user.telContact} disabled></input>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <input id="remove_user_button" className="removeUserButton w-auto py-2 px-4 mt-4" type="button" value="Remover usuário" onClick={removeUser}></input>
                    </div>
                </div>
            );
        }
    }

    return (
        <div>
            <div className="adminLoginBackground container py-4">
                <div className="row text-center py-5">
                    <Link to="/admin" style={{"textDecoration" : "none"}}> <h1 className="col adminText bg-white shadow mx-3 py-1"> Admin Dashboard </h1> </Link>
                </div>
                <div className="row">
                    {userComponent}
                </div>
                <div className="row">
                    <Link className="backToAdminButton" to="/admin"> Retornar à pagina de administrador </Link>
                </div>
            </div>
            < Footer />
        </div>  
    );
}