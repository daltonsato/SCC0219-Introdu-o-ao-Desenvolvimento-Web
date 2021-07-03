// Page used by the admin to edit the details of a product

import React from 'react';
import Cookies from 'universal-cookie'; // temporary, just to test login and cookies 

import { Link, useHistory } from 'react-router-dom';
import { useParams } from "react-router";

import Footer from '../../components/Footer/Footer'

import './AdminEditProduct.css';

export default function AdminEditProduct() {
    const cookies = new Cookies();
    let history = useHistory(); // used to redict user
    let params = useParams(); // params in URL (see routes.js)

    // used to test cookies (repeated throughout pages...)
    let testCookieAdmin = "3D6C9103FE7C1073E52A94212A82EC95C87F35F37C697B2C338A5CB31458A66A"; // sha-256 -> ganeshadmin (used for testing)
    let activeAdminSession = [ testCookieAdmin ];

    let productComponent; // element that contains details about the product that will be edited

    // Function to save changes made to the product that was being modified
    var saveProductChanges = () => {
        let name = document.getElementById("name").value;
        let price = document.getElementById("price").value;
        let quantity = document.getElementById("quantity").value;
        let description = document.getElementById("description").value;
        let suppliers = document.getElementById("suppliers").value;

        // console.log("Antes da alteração: ", window.productsList[params.id])

        // (temporary) changing the details about the product to the new values set
        window.productsList[params.id].name = name;
        window.productsList[params.id].price = price;
        window.productsList[params.id].quantity = quantity;
        window.productsList[params.id].description = description;
        window.productsList[params.id].suppliers = suppliers;

        // console.log("Alteração feita com sucesso: ", window.productsList[params.id]);
        
        // Shows popup to admin telling that the modifications were made
        let popup = document.getElementById("saveChangesPopup");
        let popupText = document.getElementById("popupText");
        popupText.innerHTML += "Alterações salvas!<br/>";

        popup.classList.remove("d-none");

        setTimeout(() => { 
            popup.classList.add("d-none"); 
            popupText.innerHTML = "";
        }, 2500);
    }

    // If user is not logged as admin (doesn't have admin cookies), user can't access page
    if (!activeAdminSession.includes(cookies.get("ADMIN_SESSION"))) {
        history.push("/admin"); // not an admin, can't access this page
        return (<div> Redirecting... </div>);
    }
    else {
        // Checks if the product ID passed in the URL is related to a product (if so, shows details about the product)
        if (window.productsList[params.id] !== undefined && window.productsList[params.id] !== null) {
            let product = window.productsList[params.id]
            productComponent = (
                <div className="col m-3 p-3 bg-white shadow">
                    <div className="row d-flex flex-column">
                        <div className="productToEditField d-flex justify-content-between py-2">
                            <span> Nome: </span>
                            <input className="prodToEditTextArea w-50 py-1 px-3" type="text" name="name" id="name" defaultValue={product.name}></input>
                        </div>
                        <div className="productToEditField d-flex justify-content-between py-2">
                            <span> Preço: </span>
                            <input className="prodToEditTextArea w-50 py-1 px-3" type="text" name="price" id="price" defaultValue={product.price}></input>
                        </div>
                        <div className="productToEditField d-flex justify-content-between py-2">
                            <span> Qtd.: </span>
                            <input className="prodToEditTextArea w-50 py-1 px-3" type="text" name="quantity" id="quantity" defaultValue={product.quantity}></input>
                        </div>
                        <div className="productToEditField d-flex justify-content-between py-2">
                            <span> Fornecedores: </span>
                            <input className="prodToEditTextArea w-50 py-1 px-3" type="text" name="suppliers" id="suppliers" defaultValue={product.suppliers}></input>
                        </div>
                        <div className="productToEditField d-flex justify-content-between py-2">
                            <span> Categoria: </span>
                            <input className="prodToEditTextArea w-50 py-1 px-3" type="text" name="category" id="category" defaultValue={product.category}></input>
                        </div>
                        <div className="productToEditField d-flex justify-content-between py-2">
                            <span> Descrição: </span>
                            <input className="prodToEditTextArea w-50 py-1 px-3" type="text" name="description" id="description" defaultValue={product.description}></input>
                        </div>                        
                    </div>
                    <div className="row d-flex justify-content-center">
                        <input id="save_changes_button" className="editProdSaveChangesButton w-auto py-2 px-4 mt-4" type="button" value="Salvar alterações" onClick={saveProductChanges}></input>
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
                    {productComponent /* details about the product to edit*/} 
                </div>
                <div className="row">
                    <Link className="backToAdminButton" to="/admin"> Retornar à pagina de administrador </Link>
                </div>
                <div id="saveChangesPopup" className="changesOkPopup d-flex align-items-center justify-content-center text-center shadow d-none py-3"> <span id="popupText"></span> </div>
            </div>
            < Footer />
        </div>  
    );
}