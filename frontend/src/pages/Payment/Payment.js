import React from 'react';
import { Link } from 'react-router-dom'

import './Payment.css';
import HomeHeader from '../components/Headers/HomeHeader';
import Footer from '../components/Footer/Footer';

export default function Payment() {

	let confirmPayment = (props) => {
        // let productID = props.target.parentNode.id;
        
        let popup = document.getElementById("confirmedPayment");
        let popupText = document.getElementById("popupText");
        popupText.innerHTML += "Pagamento confirmado!<br/>";

        popup.classList.remove("d-none");

        setTimeout(() => { 
            popup.classList.add("d-none"); 
            popupText.innerHTML = "";
        }, 2500);

		window.shoppingCart = {};
    }

    return (
        <div className="gradiantMainContainer">
            <HomeHeader />
			<h1 className="display-1 mx-5 my-5 px-5 py-5">Pagamento</h1>
            <div className="container d-flex align-itens-center eggBackground">
				<div className="col d-flex flex-column justify-content-center">
					<div className="row d-flex flex-column col-sm-8 col-md-6 col-xl-4 col-4 dataBox align-self-center">
						<form className="d-flex flex-column align-items-center justify-content-center">
							<input className="inputData row col-8 col-sm-8 col-md-8 my-4 mt-5 p-3" type="nome" id="nome" name="nome" placeholder="Nome" required></input>
							<input className="inputData row col-8 col-sm-8 col-md-8 my-4 p-3" type="cpf" id="cpf" name="cpf" placeholder="CPF" required></input>
							<input className="inputData row col-8 col-sm-8 col-md-8 my-4 p-3" type="cartaoNumero" id="cartaoNumero" name="cartaoNumero" placeholder="Número do cartão" required></input>
							<input className="inputData row col-8 col-sm-8 col-md-8 my-4 mb-5 p-3" type="titular" id="titular" name="titular" placeholder="Nome do titular" required></input>
						</form>
					</div>
					<Link className="row justify-content-center col-2 confirmInfo my-5 mx-3 p-3 align-self-center" onClick={confirmPayment} to="">
						Confirmar
					</Link>
				</div>
			</div>
			<div id="confirmedPayment" className="confirmPaymentPopup d-flex align-items-center justify-content-center text-center shadow d-none py-3"> <span id="popupText"></span> </div>
			<Footer />
        </div>
    );
}