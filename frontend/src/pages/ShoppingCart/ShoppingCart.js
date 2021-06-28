import React from 'react';

import Cookies from 'universal-cookie';
import { useHistory } from 'react-router-dom';

import './ShoppingCart.css';
import HomeHeader from '../components/Headers/HomeHeader';
import Footer from '../components/Footer/Footer';

export default function ShoppingCart() {
	const cookies = new Cookies();
    let history = useHistory(); // used to redict user

	let testCookie = "280E8410C4A05326EB815B577B05574FDFB4AE016C399ACF1B02CFE5C59D59FE"; // sha-256 -> ganeshtestlogin (used for testing)
	let activeUserSession = [ testCookie ];

	let shoppingCartComponent;
	let itensList = [];

	if (activeUserSession.includes(cookies.get("SESSION"))) {
		let totalApagar = 0;
		for (const [prodName, prodDetails] of Object.entries(window.shoppingCart)) {
			itensList.push( <div key={"div_"+prodName} className="row">
				<div className="col p-1 atributteDisplay justify-content-center"> {prodDetails.prodName} </div>
				<div className="col p-1 atributteDisplay justify-content-center"> {prodDetails.quantity} </div>
				<div className="col p-1 atributteDisplay justify-content-center"> {prodDetails.price} </div>
				<div className="col p-1 atributteDisplay justify-content-center"> {prodDetails.price*prodDetails.quantity} </div></div> );
			totalApagar += prodDetails.price*prodDetails.quantity;
		}

		shoppingCartComponent = (
			<div>
				<div className="row d-flex justify-content-between py-4">
					<div className="col">
						<h1 className="shoppingCart text-center py-3 mb-3">Meu carrinho de compras</h1>
						<div className="row d-flex justify-content-evenly py-1 generalBox">
							<div className="col p-3 atributteDisplay justify-content-center">
								Nome do produto
							</div>
							<div className="col p-3 atributteDisplay justify-content-center">
								Quantidade
							</div>
							<div className="col p-3 atributteDisplay justify-content-center">
								Preço unidade
							</div>
							<div className="col-2 p-3 atributteDisplay justify-content-center">
								Total
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col shoppingCartItensList">
						{ itensList }
					</div>
				</div>
				<div className="row d-flex justify-content-end py-3">
					<div className="col-3 totalPay p-3 text-left">Total a pagar:   R${totalApagar}</div>
				</div>
				<div className="row finishShop text-center ">
					<div className="col finishShopF py-3">
						FINALIZAR COMPRA
					</div>
				</div>
			</div>
		);
	}
	else {
		shoppingCartComponent = (
			<h1> Usuário não logado </h1>
		);
		history.push("/login");
	}

    return (
        <div className="gradiantMainContainer">
            <HomeHeader />
            <div className="container p-4">
				{ shoppingCartComponent }
			</div>
			<Footer />
		</div>
    );
}