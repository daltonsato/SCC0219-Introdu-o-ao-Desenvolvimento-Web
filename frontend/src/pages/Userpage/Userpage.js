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
            <div className="Container eggBackgroundUser">
               <div className = "d-flex row pt-5">

                    <div className="col bg-white shadow mx-1 p-3 w-100">
                        <ul className="History">
                            <h2>Histórico de compras</h2>
                            <li className="historyItem shadow d-flex align-itens-center justify-content-center p-3 my-3">
                                <div className="text-left px-3 w-50">
                                    <span className="align-middle"> Ovo caipira </span>
                                </div>
                                <div className="d-flex w-100 align-itens-center justify-content-center d-none d-sm-none d-md-none d-lg-inline">
                                    <span className="align-middle px-3"> Qtd.: 1 </span> 
                                    <span className="align-middle px-3"> Preço: R$ 100 </span>
                                    <span className="align-middle px-3"> Data: 01/01/2021 </span> 
                                    <span className="align-middle px-3"> CEP: 13560-572</span> 
                                </div>
                            </li>
                            <li className="adminProductListItem shadow d-flex align-itens-center justify-content-center p-3 my-3">
                                <div className="text-left px-3 w-50">
                                    <span className="align-middle"> Ovo branco </span>
                                </div>
                                <div className="d-flex w-100 align-itens-center justify-content-center d-none d-sm-none d-md-none d-lg-inline">
                                    <span className="align-middle px-3"> Qtd.: 2 </span> 
                                    <span className="align-middle px-3"> Preço: R$ 85 </span>
                                    <span className="align-middle px-3"> Data: 26/06/2021 </span> 
                                    <span className="align-middle px-3"> CEP: 14570-581</span> 
                                </div>
                            </li>
                        </ul>
                    </div>
                    

                   <div className = "col-2 m-4">
                        <div className = "address p-4">
                            <h5> Rua Amaral Gama</h5>  
                            <h5> Nº 369</h5>
                            <h5> São Paulo/SP</h5>
                            <h5> CEP: 12345-678</h5>
                            <div className = "py-4">
                                <input className="deleteButton" type="button" value="Excluir"></input>
                                <div className = "mainAddress d-inline mx-4 p-2">Endereço padrão</div>
                            </div>   
                        </div>
                   </div>
                   <div className = "d-flex col-2 m-4">
                        <div className = "address p-4">
                            <h5> Av. Trab. São Carlense</h5>
                            <h5> Nº 400</h5>
                            <h5> São Carlos/SP</h5>
                            <h5> CEP: 13566-590</h5>
                            <div className = "py-4">
                                <input className="deleteButton" type="button" value="Excluir"></input>
                                <input className="deleteButton mx-4" type="button" value="Definir como padão"></input>
                            </div>
                        </div>
                   </div>
                </div>

                
                <div className = "d-flex justify-content-end row">
                   <div className = "col-2 m-4">
                        <div className = "address p-4">
                            <h5> Rua da Assembleia</h5>
                            <h5> Nº 921</h5>
                            <h5> Rio de Janeiro/RJ</h5>
                            <h5> CEP: 11111-222</h5>
                            <div className = "py-4">
                                <input className="deleteButton" type="button" value="Excluir"></input>
                                <input className="deleteButton mx-4" type="button" value="Definir como padão"></input>
                            </div>
                        </div>
                   </div>
                   <div className = "d-flex col-2 m-4">
                        <div className = "address p-5 text-center">
                            <img className="img-fluid rounded mx-auto d-block py-3" src={add} alt="add" />
                            <h2>Adicionar endereço</h2>
                        </div>
                   </div>
                </div>
                

                    <div className = "d-flex justify-content-end  m-5 p-5">
                        <h5 className = "col-2 functionBox p-3  mx-5 text-center">Relatar problema</h5>
                        <h5 className = "col-1 functionBox p-3  mx-5 text-center">Log out</h5>
                    </div>
               
                
            <Footer />
            </div>
            </React.Fragment>
    );
}