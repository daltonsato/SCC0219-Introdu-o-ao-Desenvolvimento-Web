import React from 'react';

import './AddAddress.css';
import HomeHeader from '../components/Headers/HomeHeader';
import Footer from '../components/Footer/Footer';

export default function AddAddress() {
    return (
        <div className="gradiantMainContainer">
            <HomeHeader />
            <div className="container my-5 d-flex align-itens-center">
				<h1>Endereço de entrega</h1>
				<div className="col my-5 d-flex flex-column justify-content-center">
					<div className="row d-flex flex-column col-5 dataBox align-itens-center">
						<form className="d-flex flex-column align-items-center justify-content-center">
							<input className="inputData row col-8 my-4 mx-3 p-3" type="cidade" id="cidade" name="cidade" placeholder="Cidade" required></input>
							<input className="inputData row col-8 my-4 mx-3 p-3" type="cep" id="cep" name="cep" placeholder="CEP" required></input>
							<input className="inputData row col-8 my-4 mx-3 p-3" type="rua" id="rua" name="rua" placeholder="Rua" required></input>
							<input className="inputData row col-8 my-4 mx-3 p-3" type="referencia" id="referencia" placeholder="Referência"></input>
							<div className="row">
								Calcular frete
							</div>
						</form>
					</div>
					<div className="row followPayment col-3 my-4 mx-3 p-3">
						Seguir para pagamento
					</div>
				</div>
			</div>
			<Footer />
        </div>
    );
}