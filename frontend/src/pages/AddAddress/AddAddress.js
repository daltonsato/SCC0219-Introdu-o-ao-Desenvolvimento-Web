import React from 'react';
import { Link } from 'react-router-dom'

import './AddAddress.css';
import HomeHeader from '../components/Headers/HomeHeader';
import Footer from '../components/Footer/Footer';

export default function AddAddress() {
    return (
        <div className="gradiantMainContainer">
            <HomeHeader />
			<h1 className="display-1 mx-5 my-5 px-5 py-5">Endereço de entrega</h1>
            <div className="container d-flex align-itens-center eggBackground">
				<div className="col d-flex flex-column justify-content-center">
					<div className="row d-flex flex-column col-4 dataBox align-self-center">
						<form className="d-flex flex-column align-items-center justify-content-center">
							<input className="inputData row col-8 my-4 mt-5 p-3" type="cidade" id="cidade" name="cidade" placeholder="Cidade" required></input>
							<input className="inputData row col-8 my-4 p-3" type="cep" id="cep" name="cep" placeholder="CEP" required></input>
							<input className="inputData row col-8 my-4 p-3" type="rua" id="rua" name="rua" placeholder="Rua" required></input>
							<input className="inputData row col-8 my-4 p-3" type="referencia" id="referencia" placeholder="Referência"></input>
							<Link className="row mb-3 shipping">Calcular frete</Link>
						</form>
					</div>
					<Link className="row justify-content-center followPayment my-5 mx-3 p-3 align-self-center" to="/payment">
						Seguir para pagamento
					</Link>
				</div>
			</div>
			<Footer />
        </div>
    );
}