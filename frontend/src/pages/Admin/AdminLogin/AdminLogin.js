// Admin Dashboard and Admin Login pages
// If user is logged in, he/she sees the dashboard
// Otherwise, he/she sees a login page

import React from 'react';
import Cookies from 'universal-cookie'; // cookies used for testing
import { useHistory, Link } from 'react-router-dom';

import Footer from '../../components/Footer/Footer'

// CSS
import './AdminLogin.css';

export default function AdminLogin() {
    const cookies = new Cookies();
    let history = useHistory(); // used to redict user

    const adminPassDict = { "admin" : "admin" }; // hardcoded admin credentials used for testing
    // temporary hardcoded cookies used for testing (testing login functionalities)
    let testCookieAdmin = "3D6C9103FE7C1073E52A94212A82EC95C87F35F37C697B2C338A5CB31458A66A"; // sha-256 -> ganeshadmin (used for testing)
    let activeAdminSession = [ testCookieAdmin ];

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

    // Function to handle admin login (should change when we have the backend)
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


    // Change what is shown to user based on whether admin is logged or not
    let adminScreen; // element that will contain the HTML related to the login page or to the admin dashboard

    // If user has a cookie that represents an active admin session, he/she can see the dashboard. As a consequence, he/she seese the products and users
    // Users and products are loaded to a list of divs here
    if (activeAdminSession.includes(cookies.get("ADMIN_SESSION"))) {
        const productsDivs = [];
        const usersDivs = [];

        // Creating divs with the data from products (see temporary dictinary in index.js)
        for (const [productID, productDetails] of Object.entries(window.productsList)) {
            productsDivs.push(
                <li key={"li_"+productID} className="adminProductListItem shadow d-flex align-itens-center justify-content-center p-3 my-3">
                    <div className="text-left px-3 w-100">
                        <span className="align-middle"> {productDetails.name} </span>
                    </div>
                    <div className="d-flex w-100 align-itens-center justify-content-center d-none d-sm-none d-md-none d-lg-inline">
                        <span className="align-middle px-3"> Qtd.: {productDetails.quantity} </span> 
                        <span className="align-middle px-3"> Preço: R${productDetails.price}/un. </span> 
                    </div>
                    <div className="d-flex w-100 justify-content-end">
                        <input id={productID} className="adminProductListButton productButton py-2 px-4" type="button" value="Ver mais" onClick={goToEditProdPage}></input>
                    </div>
                </li>
            );
        }
        
        // Creating divs with the data from users (see temporary dictinary in index.js)
        // console.log(window.usersDivs);
        for (const [userID, userDetails] of Object.entries(window.users)) {
            usersDivs.push(
                <li key={"li_"+userID} className="adminProductListItem shadow d-flex align-itens-center justify-content-center p-3 my-3">
                    <div className="text-left px-3 w-50">
                        <span className="align-middle"> {userID} </span>
                    </div>
                    <div className="d-flex w-100 align-itens-center justify-content-center text-center d-none d-sm-none d-md-none d-lg-inline">
                        <span className="align-middle px-3"> {userDetails.name} - CPF: {userDetails.CPF} </span> 
                    </div>
                    <div className="d-flex w-50 justify-content-end">
                        <input id={userID} className="adminProductListButton py-2 px-4" type="button" value="Ver mais" onClick={goToEditUserPage}></input>
                    </div>
                </li>
            );
        }

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
        )
    }
    else { // if user is not logged as admin, show admin login page
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