import React from 'react';
import { Link } from 'react-router-dom';

import './Homepage.css';
import HomeHeader from '../components/Headers/HomeHeader';
import Footer from '../components/Footer/Footer';

// Images
import KawaiiEgg from '../../images/kawaii_egg.svg'
import ShoppingCart from '../../images/shopping_cart_home.svg';
import PaymentStep from '../../images/credit_cart_payment.svg';
import HappyFace from '../../images/happy_face_home.svg';
import EggPackExample from '../../images/generic_egg_product_home.svg'
import WomanWithChicken from '../../images/woman_chicken.svg';

export default function Homepage() {
    return (
        <div className="gradientMainContainer">
            <HomeHeader isLoggedIn={false}/>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6 d-flex flex-column justify-content-between align-items-center py-4">
                        <h1 className="homepageMainText text-center"> O maior mercado de ovos do Brasil</h1>
                        <div className="homepageMainDesc text-center">
                            <p> Aqui você vai encontrar as melhores opções e qualidades de ovos disponíveis no mercado. </p>
                            <p> Animais criados livres</p>
                            <p> Variedades de opções </p>
                            <p> Melhores preços do mercado </p>
                            <Link className="homepageBuyButton mt-3 py-2 px-5" type="button" to="/store"> Comprar </Link>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <img className="img-fluid" src={KawaiiEgg} alt="Cute egg" />
                    </div>
                </div>
                <div className="row text-center py-5">
                    <h1 className="howItWorksText mt-5 mb-3"> Como funciona? </h1>
                </div>
                <div className="row justify-content-center align-items-center">
                    <div className="homepageCard col-sm-12 col-md-3 d-flex flex-column justify-content-center align-items-center mx-4 my-2 p-3">
                        <div>
                            <b> 1. Você escolhe </b>
                            <br /><br />
                            Você adiciona nossos melhores produtos em seu carrinho.
                            <br /><br />
                        </div>
                        <img className="img-fluid pt-5 pb-2" src={ShoppingCart} alt="Shopping cart icon" />
                    </div>
                    <div className="homepageCard col-sm-12 col-md-3 d-flex flex-column justify-content-center align-items-center mx-4 my-2 p-3">
                        <div>
                            <b> 2. Você paga </b>
                            <br /><br />
                            Você realiza o pagamento de forma rápida e digital via Pix, cartão de crédito ou débito ou boleto bancário.
                            <br />
                        </div>
                        <img className="img-fluid pt-5 pb-2" src={PaymentStep} alt="Payment step icon" />
                    </div>
                    <div className="homepageCard col-sm-12 col-md-3 d-flex flex-column justify-content-center align-items-center mx-4 my-2 p-3">
                        <div>
                            <b> 3. Você relaxa e aguarda sua entrega :) </b>
                            <br /><br />
                            Nós garantimos sua satisfação com uma entrega rápida e eficiente.
                            <br /><br />
                        </div>
                        <img className="img-fluid pt-5 pb-2" src={HappyFace} alt="Payment step icon" />
                    </div>
                </div>
                <br /><br /><br /><br /><br /><br />
                <div className="row justify-content-center align-items-center"> { /* Change to carousel: https://getbootstrap.com/docs/4.0/components/carousel/ */ }
                    <div className="col-sm-12 col-md-3 d-flex flex-column justify-content-center align-items-center m-3 py-3">
                        <div className="homepageProductEggOuter d-flex justify-content-center align-items-center px-4 py-5">
                            <div className="homepageProductEggInner px-4 py-5">
                                <img className="img-fluid" alt="Example of egg's pack" src={EggPackExample} />
                            </div>
                        </div>
                        <div className="d-flex flex-column text-center justify-content-center align-items-center pt-5">
                            <b>Ovo X</b> R$ 100,00
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-3 d-flex flex-column justify-content-center align-items-center m-3 py-3">
                        <div className="homepageProductEggOuter scaledUp d-flex justify-content-center align-items-center px-4 py-5">
                            <div className="homepageProductEggInner px-4 py-5">
                                <img className="img-fluid" alt="Example of egg's pack" src={EggPackExample} />
                            </div>
                        </div>
                        <div className="d-flex flex-column text-center justify-content-center align-items-center pt-5">
                            <b>Ovo X</b> R$ 100,00
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-3 d-flex flex-column justify-content-center align-items-center m-3 py-3">
                        <div className="homepageProductEggOuter d-flex justify-content-center align-items-center px-4 py-5">
                            <div className="homepageProductEggInner px-4 py-5">
                                <img className="img-fluid" alt="Example of egg's pack" src={EggPackExample} />
                            </div>
                        </div>
                        <div className="d-flex flex-column text-center justify-content-center align-items-center pt-5">
                            <b>Ovo X</b> R$ 100,00
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center align-items-center py-5">
                    <Link className="homepageBuyButton text-center w-auto py-2 mb-5 px-5" type="button" to="/store"> Conheça nosso catálogo! </Link>
                </div>
                <div className="difBackgoundPanel row py-5 px-3">
                    <div className="col d-flex justify-content-center align-items-center">
                        <img className="img-fluid" style={{ 'borderRadius' : '20px'}} src={WomanWithChicken} alt="Woman with chicken" />
                    </div>
                    <div className="col d-flex justify-content-center align-items-center">
                        <div>
                            <p className="homeTextYellowPanel"> Nossas aves são criadas em um ambiente espaçoso e de forma totalmente livre! </p>
                            <p className="homeTextYellowPanel"> Nossos funcionários fazem questão de cuidá-las com muito carinho para que o produto chegue a você com a melhor qualidade possível! </p>
                        </div>
                    </div>
                </div>
                <div className="row py-5 d-flex flex-column justify-content-center align-items-center text-center">
                    <br /><br />
                    <h1 className="pt-5 pb-1"> Venha fazer parte da nossa granja </h1>
                    <h3> Aproveite nossos ovos e compre com a gente um delicioso ovo </h3>
                    <Link className="homepageBuyButton text-center w-auto py-2 my-5 px-5" type="button" to="/store"> Conheça nosso catálogo! </Link>
                    <br /><br /><br /><br /><br />
                </div>
            </div>
            <Footer />
        </div>
    );
}