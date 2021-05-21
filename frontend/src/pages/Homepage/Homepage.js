import React from 'react';
import { Link } from 'react-router-dom';

import './Homepage.css';
import HomeHeader from '../components/Headers/HomeHeader';

// Images
import chickenImg from '../../images/chicken_homepage.png';
import Gudetama from '../../images/gudetama.png';

export default function Homepage() {
    return (
        <div className="gradiantMainContainer">
            <HomeHeader />
            <div className="container">
                <div className="row d-flex justify-content-center py-4">
                    <div className="col">
                        <h1 className="brandName"> T A M A G O V O </h1>
                        <p className="homepageMainText">Conheça o maior mercado de ovos de todo o Brasil!</p>
                        <p className="homepageMainText">A TAMAGOVO trabalha com ovos de qualidade de todos os tipos, com grande variedade e preço bom.</p>
                        <p className="homepageMainText">Aqui você encontra ovos de galinha, de cordorna, de avestruz, ovos centenários, exóticos e até mesmo ovo em pó!</p>
                    </div>
                    <div className="col">
                        <img className="img-fluid" src={chickenImg} alt="Galinha gigante simpática" />
                    </div>
                </div>
                <div className="row text-center d-flex justify-content-center align-items-center">
                    <Link className="buttonHomeScroll py-4 w-auto" to="#our_products"> \/ </Link>
                </div>
                <div className="row d-flex flex-column justify-content-center align-items-center" id="our_products">
                    <h1 className="brandName text-center pt-3"> Nossos produtos </h1>
                    <p className="homepageMainText text-center"> Encontre aqui a maior variedade de ovos do Brasil! </p>
                    <div className="row d-flex justify-content-around align-items-center">
                        { /* create component for egg display*/ }
                        <div className="highlightedProduct d-flex flex-column justify-content-center align-items-center col shadow mx-3 py-4">
                            <div className="innerHighlightedProduct d-flex justify-content-center align-items-center mx-4 py-4">
                                <img className="img-fluid w-75" src={Gudetama} alt="He's an egg" />
                            </div>
                            <div className="text-center pt-2">
                                <h3> Ovo Gudetama </h3>
                                <h3> R$ 13,37 </h3> 
                            </div>
                        </div>
                        <div className="highlightedProduct d-flex flex-column justify-content-center align-items-center col shadow mx-3 py-4">
                            <div className="innerHighlightedProduct d-flex justify-content-center align-items-center mx-4 py-4">
                                <img className="img-fluid w-75" src={Gudetama} alt="He's an egg" />
                            </div>
                            <div className="text-center pt-2">
                                <h3> Ovo Gudetama </h3>
                                <h3> R$ 13,37 </h3> 
                            </div>
                        </div>
                        <div className="highlightedProduct d-flex flex-column justify-content-center align-items-center col shadow mx-3 py-4">
                            <div className="innerHighlightedProduct d-flex justify-content-center align-items-center mx-4 py-4">
                                <img className="img-fluid w-75" src={Gudetama} alt="He's an egg" />
                            </div>
                            <div className="text-center pt-2">
                                <h3> Ovo Gudetama </h3>
                                <h3> R$ 13,37 </h3> 
                            </div>
                        </div>
                    </div>
                    <div className="row w-auto p-5 d-flex justify-content-center">
                        <input className="highlightedButton py-2 px-5" type="button" value="Conheça nosso catálogo!"></input>
                    </div>
                </div>
                <div className="row pt-5">
                    <div className="col px-3 m-2 pb-4">
                        <h1 className="aboutUsTitle"> Sobre Nós </h1>
                        <p className="aboutUsText"> Somos uma empresa que se originou no interior do estado de São Paulo, na cidade de Bastos, a Capital do Ovo, que conta com uma rica história que remete ao inicio da colonização japonesa no Brasil! </p>
                        <p className="aboutUsText"> Exemplo no ramo da avicultura, contamos com a parceria de diversas granjas consolidadas no mercado com uma história que é continuada a cada geração. </p>
                        <p className="aboutUsText"> Possuimos à disposição ovos das mais diversas categorias e da melhor qualidade disponível no mercado, abrangendo um grande leque de consumidores e especialistas da área. </p>
                        <p className="aboutUsText"> Há mais de 15 anos no mercado, garantimos excelência e prontidão na compra e na manutenção de um bom relacionamento com nossos clientes! </p>
                    </div>
                    <div className="col px-3">
                        <h1 className="aboutUsTitle"> Contato </h1>
                        <div className="aboutUsText">
                            <ul className="py-2"> 
                                Emails:
                                <li> brenopolpinha@gmail.com </li>
                                <li> joaosilva@gmail.com </li>
                            </ul>
                            
                            <ul className="py-2"> 
                                Email corporativo:
                                <li> contactus@tamagovo.com.br </li>
                            </ul>
                            
                            <ul className="py-2"> 
                                Telefone:
                                <li> (14)3478-5050 </li>
                            </ul>

                            <ul className="py-2"> 
                                Redes sociais:
                                <li> Telegram: @tamagovo </li>
                                <li> Instagram: @tamagovo </li>
                                <li> Twitter: @tamagovoficial </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>
        </div>
    );
}