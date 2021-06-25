import React from 'react';

import './Userpage.css';
import HomeHeader from '../components/Headers/HomeHeader';
import Footer from '../components/Footer/Footer';

// Images
import add from '../../images/Add.png';

export default function Userpage() {
    return (
        <React.Fragment>
            <HomeHeader />
            <div className="Container">
               <div className = "d-flex justify-content-start row">
                   <div className = "col-2 m-5">
                        <div className = "address p-3">
                            <h6> Rua Amaral Gama</h6>  
                            <h6> Nº 369</h6>
                            <h6> São Paulo/SP</h6>
                            <h6> CEP: 12345-678</h6> 
                            <div className = "d-flex justify-content-end">
                                <input type = "radio" name = "main-address"></input>
                            </div>
                        </div>
                   </div>
                   <div className = "d-flex col-2 m-5">
                        <div className = "address p-4">
                            <h6> Av. Trab. São Carlense</h6>
                            <h6> Nº 400</h6>
                            <h6> São Carlos/SP</h6>
                            <h6> CEP: 13566-590</h6>
                            <div className = "d-flex justify-content-end">
                                <input type = "radio" name = "main-address"></input>
                            </div>
                        </div>
                   </div>

                   <div className = "col-6 d-flex justify-content-end p-3 m-5">
                       <h5 className = "functionBox p-3  mx-2 text-center">Alterar E-mail</h5>
                       <h5 className = "functionBox p-3  mx-2 text-center">Alterar Senha</h5> 
                   </div>
                </div>

                
                <div className = "d-flex justify-content-start row">
                   <div className = "col-2 m-5">
                        <div className = "address p-4">
                            <h6> Rua da Assembleia</h6>
                            <h6> Nº 921</h6>
                            <h6> Rio de Janeiro/RJ</h6>
                            <h6> CEP: 11111-222</h6>
                            <div className = "d-flex justify-content-end">
                                <input type = "radio" name = "main-address"></input>
                            </div>
                        </div>
                   </div>
                   <div className = "d-flex col-2 m-5">
                        <div className = "address p-2 text-center">
                            <img className="img-fluid rounded mx-auto d-block py-4" src={add} alt="add" />
                            <h2>Adicionar endereço</h2>
                        </div>
                   </div>
                </div>
                
            <Footer />
            </div>
            </React.Fragment>
    );
}