// Admin Dashboard and Admin Login pages
// If user is logged in, he/she sees the dashboard
// Otherwise, he/she sees a login page

import React, { useState } from 'react';
import Cookies from 'universal-cookie'; // cookies used for testing
import { useHistory, Link } from 'react-router-dom';

import Footer from '../../components/Footer/Footer'

// CSS
import './AdminLogin.css';

export default function AdminLogin() {
    let history = useHistory(); // used to redict user
    let cookies = new Cookies();
    
    var [done, setDone] = useState(false);

    var [productsDivs, setProdDiv] = useState([]);
    var [usersDivs, setUsersDiv] = useState([]);

    // Trigger to see details about a product (should change when we have backend)
    var goToEditProdPage = (event) => {
        // console.log(event.target.id);
        history.push('/admin/edit-product/'+event.target.id); // redirects to /admin/product...   
    };

    // Trigger to see details about a user (should change when we have backend)
    var goToEditUserPage = (event) => {
        // console.log(event.target.id);
        history.push('/admin/edit-user/'+event.target.id); // redirects to /admin/user...   
    };

    var listUsers = async () => {
        let users = [];

        let respUsers = await fetch(window.BACKEND_URL + '/user/list-all', {
            method: 'GET',
            headers: {
                "x-access-token": cookies.get("ADMIN_SESSION")
            }
        });

        if (respUsers.status === 200) {
            respUsers.json().then((usersData) => {
                usersData.forEach((user) => {
                    users.push(user);
                })
            });

            return users;
        }
        else {
            return null;
        }
    }

    var listProducts = async () => {
        let products = [];

        let respProducts = await fetch(window.BACKEND_URL + '/products/list-all');

        if (respProducts.status === 200) {
            respProducts.json().then((prodsData) => {
                prodsData.forEach((prod) => {
                    products.push(prod);
                })
            });

            return products;
        }
        else {
            return null;
        }
    }

    // Function to handle admin login (should change when we have the backend)
    var handleAdminLogin = async () => {
        let email = document.getElementById("email").value;
        let passwd = document.getElementById("password").value;

        let creds = {
            "email": email,
            "password": passwd  
        };

        let resp = await fetch(window.BACKEND_URL + '/user/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(creds)
        });

        if (resp.status === 200) {
            resp.json().then((data) => {
                history.push('/admin');
            });
        }
    }

    let adminScreen;

    var loadUsersAndProducts = async () => {
        let users = await listUsers();
        let products = await listProducts();

        if (users && products) {
            // Creating divs with the data from products (see temporary dictinary in index.js)
            // for (const [productID, productDetails] of Object.entries(products)) {
                // let newElement = (
                //     <li key={"li_prod_"+productID} className="adminProductListItem shadow d-flex align-itens-center justify-content-center p-3 my-3">
                //         <div className="text-left px-3 w-100">
                //             <span className="align-middle"> {productDetails.name} </span>
                //         </div>
                //         <div className="d-flex w-100 align-itens-center justify-content-center d-none d-sm-none d-md-none d-lg-inline">
                //             <span className="align-middle px-3"> Qtd.: {productDetails.quantity} </span> 
                //             <span className="align-middle px-3"> Preço: R${productDetails.price}/un. </span> 
                //         </div>
                //         <div className="d-flex w-100 justify-content-end">
                //             <input id={productID} className="adminProductListButton productButton py-2 px-4" type="button" value="Ver mais" onClick={goToEditProdPage}></input>
                //         </div>
                //     </li>
                // );

                // setProdDiv(productsDivs => [...productsDivs, newElement]);
                // Isso causa um looping infinito devido a forma como o useEffect funciona
                // Tentei corrigir de mil formas diferentes mas nenhuma funciona
                // Desisto, o tempo dedico a esse projeto já foi infinitamente maior que o necessário/correto/saudável
                
            // }

            
            // console.log("productsDivs filled:", productsDivs);

            // Creating divs with the data from users (see temporary dictinary in index.js)
            // for (const [userID, userDetails] of Object.entries(users)) {
                // let newElement = (
                //     <li key={"li_user_"+userID} className="adminProductListItem shadow d-flex align-itens-center justify-content-center p-3 my-3">
                //         <div className="text-left px-3 w-50">
                //             <span className="align-middle"> {userID} </span>
                //         </div>
                //         <div className="d-flex w-100 align-itens-center justify-content-center text-center d-none d-sm-none d-md-none d-lg-inline">
                //             <span className="align-middle px-3"> {userDetails.name} - CPF: {userDetails.CPF} </span> 
                //         </div>
                //         <div className="d-flex w-50 justify-content-end">
                //             <input id={userID} className="adminProductListButton py-2 px-4" type="button" value="Ver mais" onClick={goToEditUserPage}></input>
                //         </div>
                //     </li>
                // );

                // setUsersDiv(usersDivs => [...usersDivs, newElement]);
                // Isso causa um looping infinito devido a forma como o useEffect funciona
                // Tentei corrigir de mil formas diferentes mas nenhuma funciona
                // Desisto, o tempo dedico a esse projeto já foi infinitamente maior que o necessário/correto/saudável
            // }
        }
            // console.log("usersDivs filled:", usersDivs);
    }
    
    if (cookies.get("ADMIN_SESSION") != null) {
        loadUsersAndProducts();

        // Defining admin screen (dashboard, because user is logged as admin)
        adminScreen = (
            <div className="adminLoginBackground container py-4">
                <div className="row text-center py-5">
                    <h1 className="col adminText bg-white shadow mx-3 py-1"> Admin Dashboard </h1>
                </div>

                { /* ======================= PRODUTOS ====================== */ }
                <div className="row py-5 text-left">
                    <h2 className="col adminText"> Produtos </h2>
                </div>
                <div className="row bg-white shadow mx-1 p-3 w-100">
                    <ul className="col adminList">
                        { productsDivs }
                    </ul>
                </div>

                {/* ======================== USUÁRIOS ======================== */}
                <div className="row py-5 text-left">
                    <h2 className="col adminText"> Usuários </h2>
                </div>
                <div className=" row bg-white shadow mx-1 p-3 w-100">
                    <ul className="col adminList">
                    {usersDivs}
                    </ul>
                </div>
                <div className="row pt-4">
                    <Link className="backToStoreButton" to="/"> Retornar à homepage </Link>
                </div>
            </div>
        );
    }
    else {
        // element that will contain the HTML related to the login page or to the admin dashboard
        adminScreen = ( // if user is not logged as admin, show admin login page
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