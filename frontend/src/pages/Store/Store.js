import React from 'react';

import './Store.css';
import HomeHeader from '../components/Headers/HomeHeader';

// Images

import ovo from '../../images/ovo.png';



export default function Store() {
    return (
        <React.Fragment>
            <HomeHeader />
            <div className="backGround">
                <div className = "container p-4">


                <div className="row d-flex justify-content-end align-items-center py-3">
                        <h3 className = "p-3 col">Todos os produtos</h3>
                        <h5 className="py-3 col-3 text-center searchBar">Pesquisar produto</h5>
                </div>


                    <div className = "row justify-content-around productBar">
                            <div className = "col">
                                <div className = "productContainer ">
                                    <img className="img-fluid w-50 rounded mx-auto d-block" src={ovo} alt="ovo" />
                                    <h6> Ovo milenar</h6>
                                    <h6 className = "pb-2"> Preço: 1000 R$</h6>
                                    <div className = "add mx-auto  w-50">
                                         <h6>Adicionar ao carrinho</h6>
                                    </div>
                                </div>
                            </div>
                            <div className = "col">
                                <div className = "productContainer ">
                                    <img className="img-fluid w-50 rounded mx-auto d-block" src={ovo} alt="ovo" />
                                    <h6> Ovo milenar</h6>
                                    <h6 className = "pb-2"> Preço: 1000 R$</h6>
                                    <div className = "add mx-auto  w-50">
                                         <h6>Adicionar ao carrinho</h6>
                                    </div>
                                </div>
                            </div>
                            <div className = "col">
                                <div className = "productContainer ">
                                    <img className="img-fluid w-50 rounded mx-auto d-block" src={ovo} alt="ovo" />
                                    <h6> Ovo milenar</h6>
                                    <h6 className = "pb-2"> Preço: 1000 R$</h6>
                                    <div className = "add mx-auto w-50">
                                         <h6>Adicionar ao carrinho</h6>
                                    </div>
                                </div>
                            </div>
                    </div>

                

                    <h3 className = "pt-5 pb-3">Em promoção</h3>
                    <div className = "row justify-content-around productBar">
                        <div className = "col">
                            <div className = "productContainer">
                                <img className="img-fluid w-50 rounded mx-auto d-block" src={ovo} alt="ovo" />
                                <h6> Ovo milenar</h6>
                                <h6 className = "pb-2"> Preço: 1000 R$</h6>
                                <div className = "add mx-auto  w-50">
                                        <h6>Adicionar ao carrinho</h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>
        </React.Fragment>
    );
}