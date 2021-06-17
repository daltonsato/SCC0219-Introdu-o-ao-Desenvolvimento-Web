import React from 'react';
import Cookies from 'universal-cookie';
import { Link, useHistory } from 'react-router-dom';
import { useParams } from "react-router";

import Footer from '../../components/Footer/Footer'

import './AdminEditProduct.css';

export default function AdminEditProduct() {
    const cookies = new Cookies();
    let history = useHistory(); // used to redict user
    let params = useParams(); // params in URL (see routes.js)

    let testCookieAdmin = "3D6C9103FE7C1073E52A94212A82EC95C87F35F37C697B2C338A5CB31458A66A"; // sha-256 -> ganeshadmin (used for testing)
    let activeAdminSession = [ testCookieAdmin ];

    let productComponent;

    var saveProductChanges = () => {
        let name = document.getElementById("name").value;
        let price = document.getElementById("price").value;
        let quantity = document.getElementById("quantity").value;
        let description = document.getElementById("description").value;
        let suppliers = document.getElementById("suppliers").value;

        console.log("Antes da alteração: ", window.productsList[params.id])

        window.productsList[params.id].name = name;
        window.productsList[params.id].price = price;
        window.productsList[params.id].quantity = quantity;
        window.productsList[params.id].description = description;
        window.productsList[params.id].suppliers = suppliers;

        console.log("Alteração feita com sucesso: ", window.productsList[params.id]);
    }

    if (!activeAdminSession.includes(cookies.get("ADMIN_SESSION"))) {
        history.push("/admin"); // not an admin, can't access this page
        return (<div> Redirecting... </div>);
    }
    else {
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
                            <input className="prodToEditTextArea w-50 py-1 px-3" type="text" name="suppliers" id="suppliers" defaultValue={product.category}></input>
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
                    {productComponent}
                </div>
                <div className="row">
                    <Link className="backToAdminButton" to="/admin"> Retornar à pagina de administrador </Link>
                </div>
            </div>
            < Footer />
        </div>  
    );
}