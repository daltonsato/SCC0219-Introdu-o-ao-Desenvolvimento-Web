import React from 'react';
import { Link } from 'react-router-dom'

import './Payment.css';
import HomeHeader from '../components/Headers/HomeHeader';
import Footer from '../components/Footer/Footer';

export default function Payment() {
    return (
        <div className="gradiantMainContainer">
            <HomeHeader />
			<h1 className="display-1 mx-5 my-5 px-5 py-5">Pagamento</h1>
            <div className="container d-flex align-itens-center eggBackground">
				<div className="col d-flex flex-column justify-content-center">
					<div className="row d-flex flex-column col-4 dataBox align-self-center">
						<form className="d-flex flex-column align-items-center justify-content-center">
							<input className="inputData row col-8 my-4 mt-5 p-3" type="nome" id="nome" name="nome" placeholder="Nome" required></input>
							<input className="inputData row col-8 my-4 p-3" type="cpf" id="cpf" name="cpf" placeholder="CPF" required></input>
							<input className="inputData row col-8 my-4 p-3" type="cartaoNumero" id="cartaoNumero" name="cartaoNumero" placeholder="Número do cartão" required></input>
							<input className="inputData row col-8 my-4 mb-5 p-3" type="titular" id="titular" name="titular" placeholder="Nome do titular" required></input>
						</form>
					</div>
					<Link className="row justify-content-center col-2 confirmInfo my-5 mx-3 p-3 align-self-center" to="">
						Confirmar
					</Link>
				</div>
			</div>
			<Footer />
        </div>
    );
}