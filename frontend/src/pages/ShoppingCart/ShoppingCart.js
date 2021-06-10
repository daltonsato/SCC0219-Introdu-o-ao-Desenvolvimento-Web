import React from 'react';

import './ShoppingCart.css';
import HomeHeader from '../components/Headers/HomeHeader';
import Footer from '../components/Footer/Footer';

export default function ShoppingCart() {
    return (
        <div className="gradiantMainContainer">
            <HomeHeader />
            <div className="container p-4">
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
					<div className="col generalBox"><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></div>
				</div>
				<div className="row d-flex justify-content-end py-3">
					<div className="col-3 generalBox p-3 border border-primary text-left">Total a pagar:</div>
				</div>
				<div className="row finishShop text-center ">
					<div className="col finishShopF py-3">
						FINALIZAR COMPRA
					</div>
				</div>
			</div>
			<Footer />
		</div>
    );
}