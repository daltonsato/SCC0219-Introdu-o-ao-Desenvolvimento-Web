// Page the admin uses to see the information about a user and if needed delete him/her from the system

import React, { useState } from 'react';
import Cookies from 'universal-cookie'; // temporary, used to test login functionalities
import { Link, useHistory } from 'react-router-dom';
import { useParams } from "react-router";

import Footer from '../../components/Footer/Footer'

// CSS
import './AdminEditUser.css';

export default function AdminEditUser() {
    const cookies = new Cookies();
    let history = useHistory(); // used to redict user
    let params = useParams(); // params in URL (see routes.js)

    const [ isLogged, setIsLogged ] = useState(false);
    const [ done, setDone ] = useState(false);

    const [ user, setUser ] = useState([]);

    let userComponent; // HTML component  that will contain details about the user and will be loaded in the page

    // Function that removes a user from the "database" (to be implementeded, for now the "database" is an element of window -> window.users)
    var removeUser = async () => {
        // console.log("Antes da alteração: ", window.users[params.id])

        let sessionCookie = cookies.get("ADMIN_SESSION");

        let resp = await fetch(window.BACKEND_URL + '/user/delete/'+user._id, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-access-token': sessionCookie
            }
        });

        resp = await resp.json();

        console.log("Mensagem do servidor:", resp.message);

        history.push("/admin"); // returns to the admin main page
    }

    var getUserInfo = async () => {
        let respUser = await fetch(window.BACKEND_URL + '/user/info/'+params.id);

        if(respUser.status === 200) {
            console.log(respUser);
            let userData = await respUser.json();
            console.log(userData);

            return userData;
        }
        else {
            return null;
        }
    };

    var checkIfLogged = async () => {
        if (isLogged)
            return true;
        
        let sessionCookie = cookies.get("ADMIN_SESSION");

        let resp = await fetch(window.BACKEND_URL + '/user/validate', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-access-token': sessionCookie
            }
        });

        resp = await resp.json();

        if (resp.token_status === "OK")
            return true;
        else
            return false;
    };

    if (!isLogged) {
        checkIfLogged().then((res) => {
            setIsLogged(res);
            if (res === true) {
                getUserInfo().then((userData) => {
                    setUser(userData);
                    setDone(true);
                });
            }
            else {
                setDone(true);
            }
        });
    }

    // if user has a cookie that represents an active admin session, he//she can see the page
    // otherwise, redirect him/her to admin login page
    if (!isLogged) {
        if (done)
            document.location = '/admin';
        return (<div> Redirecting... </div>);
    }
    else {
        // Checks if the user ID passed in the URL represents a real user
        // if so, loads his/her data and shows to the admin
        if (user !== undefined && user !== null) {
            userComponent = (
                <div className="col m-3 p-3 bg-white shadow">
                    <div className="row d-flex flex-column">
                        <div className="userToEditField d-flex justify-content-between py-2">
                            <span> Nome: </span>
                            <input className="userToEditTextArea w-50 py-1 px-3" type="text" name="name" id="name" defaultValue={user.name} disabled></input>
                        </div>
                        {/* <div className="userToEditField d-flex justify-content-between py-2">
                            <span> CPF: </span>
                            <input className="userToEditTextArea w-50 py-1 px-3" type="text" name="cpf" id="cpf" defaultValue={user.CPF} disabled></input>
                        </div> */}
                        <div className="userToEditField d-flex justify-content-between py-2">
                            <span> Email: </span>
                            <input className="userToEditTextArea w-50 py-1 px-3" type="text" name="email" id="email" defaultValue={user.email} disabled></input>
                        </div>
                        {/* <div className="userToEditField d-flex justify-content-between py-2">
                            <span> Telefone: </span>
                            <input className="userToEditTextArea w-50 py-1 px-3" type="text" name="tel" id="tel" defaultValue={user.telContact} disabled></input>
                        </div> */}
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