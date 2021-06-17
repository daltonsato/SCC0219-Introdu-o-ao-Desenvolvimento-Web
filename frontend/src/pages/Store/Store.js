import React from 'react';

import './Store.css';
import HomeHeader from '../components/Headers/HomeHeader';
import Footer from '../components/Footer/Footer';

// Images

import ovo from '../../images/ovos.png';
import ovoPo from '../../images/ovoPo.png';



export default function Store() {
    return (
        <React.Fragment>
            <HomeHeader />
            <div className="backGround">
                <div className = "container">
                    <div className="d-flex justify-content-end align-items-center pt-4">
                            <h1 className = "py-3 col">Produtos</h1>
                            <h5 className="py-3 col-3 text-center searchBar">Pesquisar produto</h5>
                    </div>

                    <p>Conheça nosso catálogo</p>
  
                    <h3 className = "pt-5 pb-5 d-flex justify-content-center category">Ovos caipira</h3>
                    <div className = "row d-flex justify-content-start align-items-start productBar pb-5">
                        <div className= "d-flex justify-content-center align-itens-center col-12 col-sm-6 col-lg-4 col-xl-3 my-2">
                            <div className = "productContainer">
                                <h6 > Ovo caipira</h6>
                                <img className="img-fluid w-50 rounded mx-auto d-block py-4" src={ovo} alt="ovo" />
                                <h6 className = "pb-2"> Preço: R$ 1000,00 </h6>
                                <div className = "buy mx-auto  w-50">
                                        <h6 className = "py-2">Comprar</h6>
                                </div>
                            </div>
                        </div>
                        <div className= "d-flex justify-content-center align-itens-center col-12 col-sm-6 col-lg-4 col-xl-3 my-2">
                            <div className = "productContainer">
                                <h6 > Ovo caipira</h6>
                                    <img className="img-fluid w-50 rounded mx-auto d-block py-4" src={ovo} alt="ovo" />
                                <h6 className = "pb-2"> Preço: R$ 1000,00 </h6>
                                <div className = "buy mx-auto  w-50">
                                    <h6 className = "p-2">Comprar</h6>
                                </div>
                            </div>
                        </div>
                        <div className= "d-flex justify-content-center align-itens-center col-12 col-sm-6 col-lg-4 col-xl-3 my-2">
                            <div className = "productContainer">
                                <h6 > Ovo caipira</h6>
                                <img className="img-fluid w-50 rounded mx-auto d-block py-4" src={ovo} alt="ovo" />
                                <h6 className = "pb-2"> Preço: R$ 1000,00 </h6>
                                <div className = "buy mx-auto  w-50">
                                    <h6 className = "p-2">Comprar</h6>
                                </div>
                            </div>
                        </div>
                        <div className= "d-flex justify-content-center align-itens-center col-12 col-sm-6 col-lg-4 col-xl-3 my-2">
                            <div className = "productContainer">
                                <h6 > Ovo caipira</h6>
                                <img className="img-fluid w-50 rounded mx-auto d-block py-4" src={ovo} alt="ovo" />
                                <h6 className = "pb-2"> Preço: R$ 1000,00 </h6>
                                <div className = "buy mx-auto  w-50">
                                    <h6 className = "p-2">Comprar</h6>
                                </div>
                            </div>
                        </div>
                    </div>


                    <h3 className = "pt-5 pb-5 d-flex justify-content-center category">Ovos Brancos</h3>
                    <div className = "row d-flex justify-content-start align-items-start productBar pb-5">
                        <div className ="d-flex justify-content-center align-itens-center col-12 col-sm-6 col-lg-4 col-xl-3 my-2">
                            <div className = "productContainer">
                                <h6 > Ovo branco</h6>
                                <img className="img-fluid w-50 rounded mx-auto d-block py-4" src={ovo} alt="ovo" />
                                <h6 className = "pb-2"> Preço: 1000 R$</h6>
                                <div className = "buy mx-auto  w-50">
                                        <h6 className = "p-2">Comprar</h6>
                                </div>
                            </div>
                        </div>
                        <div className ="d-flex justify-content-center align-itens-center col-12 col-sm-6 col-lg-4 col-xl-3 my-2">
                            <div className = "productContainer">
                                <h6 > Ovo branco</h6>
                                <img className="img-fluid w-50 rounded mx-auto d-block py-4" src={ovo} alt="ovo" />
                                <h6 className = "pb-2"> Preço: 1000 R$</h6>
                                <div className = "buy mx-auto  w-50">
                                    <h6 className = "p-2">Comprar</h6>
                                </div>
                            </div>
                        </div>
                        <div className ="d-flex justify-content-center align-itens-center col-12 col-sm-6 col-lg-4 col-xl-3 my-2">
                            <div className = "productContainer">
                                <h6 > Ovo branco</h6>
                                <img className="img-fluid w-50 rounded mx-auto d-block py-4" src={ovo} alt="ovo" />
                                <h6 className = "pb-2"> Preço: 1000 R$</h6>
                                <div className = "buy mx-auto  w-50">
                                    <h6 className = "p-2">Comprar</h6>
                                </div>
                            </div>
                        </div>
                        <div className ="d-flex justify-content-center align-itens-center col-12 col-sm-6 col-lg-4 col-xl-3 my-2">
                            <div className = "productContainer">
                                <h6 > Ovo branco</h6>
                                <img className="img-fluid w-50 rounded mx-auto d-block py-4" src={ovo} alt="ovo" />
                                <h6 className = "pb-2"> Preço: 1000 R$</h6>
                                <div className = "buy mx-auto  w-50">
                                    <h6 className = "p-2">Comprar</h6>
                                </div>
                            </div>
                        </div>
                    </div>



                
                    <h3 className = "pt-5 pb-5 d-flex justify-content-center category">Ovos em pó</h3>
                    <div className = "row d-flex justify-content-start align-items-start productBar pb-5">
                        <div className ="d-flex justify-content-center align-itens-center col-12 col-sm-6 col-lg-4 col-xl-3 my-2">
                            <div className = "productContainer">
                                <h6 > Ovo em Pó</h6>
                                <img className="img-fluid w-50 rounded mx-auto d-block py-3" src={ovoPo} alt="ovo" />
                                <h6 className = "pb-2"> Preço: 1000 R$</h6>
                                <div className = "buy mx-auto  w-50">
                                        <h6 className = "p-2">Comprar</h6>
                                </div>
                            </div>
                        </div>
                        <div className ="d-flex justify-content-center align-itens-center col-12 col-sm-6 col-lg-4 col-xl-3 my-2">
                            <div className = "productContainer">
                                <h6 > Ovo em Pó</h6>
                                <img className="img-fluid w-50 rounded mx-auto d-block py-3" src={ovoPo} alt="ovo" />
                                <h6 className = "pb-2"> Preço: 1000 R$</h6>
                                <div className = "buy mx-auto  w-50">
                                    <h6 className = "p-2">Comprar</h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                </div>
                <Footer />
            </div>
        </React.Fragment>
    );
}