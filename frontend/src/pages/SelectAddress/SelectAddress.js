import React from 'react';
import { useHistory } from 'react-router';

import HomeHeader from '../components/Headers/HomeHeader';
import Footer from '../components/Footer/Footer';

import './SelectAddress.css';

export default function SelectAddress() {
    let history = useHistory();

    let handleAddressEntry = (props) => {
        
        // must check if data from address is accepted

        history.push("/buy/payment");
    };

    return (
        <div className="">
            <HomeHeader />
            <div className="container px-3">
                <div className="row py-3 pt-5" >
                    <h1> Endereço de entrega</h1>
                </div>
                <div className="row py-3">
                    <h2> Selecione um já existente: </h2>
                </div>
                <div className="row d-flex justify-content-center align-itens-center m-0">
                    <div className="selectAddressMainBox col-md col-sm-5 col-xs-12 d-flex flex-column justify-content-center align-items-center shadow m-2 p-3">
                        <div className="d-flex justify-content-between align-items-center w-100">
                            <h3> Minha casa </h3>
                            <input className="selectAddressRadio" type="radio" id="address0" name="selectedAddress" value="address0"></input>
                        </div>
                        <div className="addressBoxDesc w-100">
                        Av. Trab. São Carlense <br />
                        Nº 400 - Apto. 2 <br />
                        São Carlos/SP <br />
                        CEP: 13566-590
                        </div>
                        <button className="selectAddressButton shadow mt-4 mb-2 p-2">
                            Definir como padrão
                        </button>
                    </div>
                    <div className="selectAddressMainBox col-md col-sm-5 col-xs-12 d-flex flex-column justify-content-center align-items-center shadow m-2 p-3">
                        <div className="d-flex justify-content-between align-items-center w-100">
                            <h3> Endereço 2 </h3>
                            <input className="selectAddressRadio" type="radio" id="address0" name="selectedAddress" value="address0"></input>
                        </div>
                        <div className="addressBoxDesc w-100">
                        Av. ABC<br />
                        Nº 123 - Apto. 5 <br />
                        São Paulo/SP <br />
                        CEP: 12345-123
                        </div>
                        <button className="selectAddressButton shadow mt-4 mb-2 p-2">
                            Definir como padrão
                        </button>
                    </div>
                    <div className="selectAddressMainBox col-md col-sm-5 col-xs-12 d-flex flex-column justify-content-center align-items-center shadow m-2 p-3">
                        <div className="d-flex justify-content-between align-items-center w-100">
                            <h3> Trabalho </h3>
                            <input className="selectAddressRadio" type="radio" id="address0" name="selectedAddress" value="address0"></input>
                        </div>
                        <div className="addressBoxDesc w-100">
                        Rua XYY <br />
                        Nº 10 <br />
                        Bastos/SP <br />
                        CEP: 11111-000
                        </div>
                        <button className="selectAddressButton shadow mt-4 mb-2 p-2">
                            Definir como padrão
                        </button>
                    </div>
                </div>
                <div className="row py-3 px-2">
                    <h2> Ou adicione um novo à sua conta: </h2>
                    <div className="row selectAddressMainBox p-2 m-0">
                        <div className="col-12 d-flex justify-content-between align-items-center w-100 p-2">
                            <h3> “Apelido” do endereço (será exibido somente para você): </h3>
                            <input className="selectAddressRadio" type="radio" id="addressNew" name="selectedAddress" value="addressNew"></input>
                        </div>
                        <input className="col-12 selectAddressTextBox w-75 p-1 mx-2" type="text" placeholder="Apelido do endereço"></input>
                        
                        <h3 className="col-12 p-2 pt-4"> Logradouro (rua, avenida, alameda etc.): </h3>
                        <input className="col-12 selectAddressTextBox w-75 p-1 mx-2" type="text" placeholder="Rua, avenida, alameda..."></input>

                        <div className="col-6">
                            <h3 className="p-2 pt-4"> Número: </h3>
                            <input className="selectAddressTextBox w-75 p-1 mx-2" type="text"></input>
                        </div>
                        <div className="col-6">
                            <h3 className="p-2 pt-4"> Complemento: </h3>
                            <input className="selectAddressTextBox w-75 p-1 mx-2" type="text"></input>
                        </div>
                        <div className="col-6">
                            <h3 className="p-2 pt-4"> CEP: </h3>
                            <input className="selectAddressTextBox w-75 p-1 mx-2" type="text"></input>
                        </div>
                        <div className="col-6">
                            <h3 className="p-2 pt-4"> Cidade: </h3>
                            <input className="selectAddressTextBox w-75 p-1 mx-2" type="text"></input>
                        </div>
                        <div className="col-6 mb-2">
                            <h3 className="p-2 pt-4"> Estado: </h3>
                            <input className="selectAddressTextBox w-75 p-1 mx-2" type="text"></input>
                        </div>
                        <div className="col-6 d-flex align-items-end justify-content-end">
                            <button className="selectAddressButton shadow mt-4 mb-2 p-2">
                                Definir como padrão
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row py-3 px-2">
                    <button className="goToPaymentButton shadow py-3 mb-4" onClick={handleAddressEntry}> Continuar para pagamento </button>
                </div>
            </div>
            <Footer />
        </div>
    );
}