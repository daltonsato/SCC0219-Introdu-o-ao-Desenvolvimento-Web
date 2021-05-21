import React from 'react';

import './Homepage.css';
import HomeHeader from '../components/Headers/HomeHeader';

// Images
import chickenImg from '../../images/chicken_homepage.png';

export default function ShoppingCart() {
    return (
        <React.Fragment>
            <HomeHeader />
            <div className="container gradiantMainContainer">
				<div className="row d-flex justify-content-between py-4">
					<div className="col">
						<h1 className="shoppingCart text-center py-3">Meu carrinho de compras</h1>
						<div className="row d-flex justify-content-evenly py-1 px-4 generalBox">
							<div className="col p-3 atributteDisplay justify-content-center">
								Nome do produto
							</div>
							<div className="col p-3 atributteDisplay justify-content-center">
								Quantidade
							</div>
							<div className="col p-3 atributteDisplay justify-content-center">
								Preço unidade
							</div>
							<div className="col p-3 atributteDisplay justify-content-center">
								Total
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="generalBox"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div>
				</div>
				<div className="row d-flex justify-content-end">
					<div className="generalBox float-end col-3 px-3 py-3">Total a pagar:</div>
				</div>
					<div className="finishShop text-center py-3">
						<div className="finishShopF">
							FINALIZAR COMPRA
						</div>
					</div>
			</div>
        </React.Fragment>
    );
}