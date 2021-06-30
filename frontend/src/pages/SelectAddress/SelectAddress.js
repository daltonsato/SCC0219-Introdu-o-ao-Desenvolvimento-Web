import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';

import HomeHeader from '../components/Headers/HomeHeader';
import Footer from '../components/Footer/Footer';

import './SelectAddress.css';

export default function SelectAddress() {
    let params = useParams(); // params in URL (see routes.js)
    let history = useHistory();
    const cookies = new Cookies();
    
    let purchaseCode = params.code;

    var [ nickname, setNickname ] = useState("");
    var [ street, setStreet ] = useState("");
    var [ number, setNumber ] = useState("");
    var [ complement, setComplement ] = useState("");
    var [ city, setCity ] = useState("");
    var [ state, setState ] = useState("");
    var [ CEP, setCEP ] = useState("");
    var [ message, setMessage ] = useState("");

    let handleSubmit = (event) => {
        event.preventDefault();

        // should send data to server
        history.push("/buy/payment");
    };

    let addAddrToProfile = () => {
        if(Object.keys(window.userAddress).length >= 3) { 
            // console.log("Limite de endereços atingidos");
            setMessage("Limite de endereços já atingidos!");
            return;
        }

        let newProdId;
        do {
            newProdId = "addr" + Math.floor(Math.random() * 1001); // random from 0 to 1000
        } while (newProdId in window.userAddress);
        
        window.userAddress[newProdId] = {
            "nickname" : nickname,
            "street" : street,
            "number" : number,
            "complement" : complement,
            "city" : city,
            "state" : state,
            "CEP" : CEP,
            "main" : "0" 
        };

        setMessage("Endereço adicionado ao perfil!");
        // console.log(window.userAddress);
    }

    if (purchaseCode === null || purchaseCode === undefined) {
        history.push("/store");
    }
    else if (window.purchaseCodes[cookies.get("SESSION")] !== purchaseCode) {
        history.push("/store")
    }

    var userAddresses = [];
    for (const [addrID, addrInfo] of Object.entries(window.userAddress)) {
        userAddresses.push(
            <div key={"addrDiv_"+addrID} className="selectAddressMainBox col-md-3 col-sm-5 col-xs-12 d-flex flex-column justify-content-center align-items-center shadow m-2 p-3">
                <div className="d-flex justify-content-between align-items-center w-100">
                    <h3> {addrInfo.nickname} </h3>
                    { (addrInfo.main !== "1") ? 
                    (<input className="selectAddressRadio" type="radio" id={addrID} name="selectedAddress" value={addrID}></input>)
                    : 
                    (<input className="selectAddressRadio" type="radio" id={addrID} name="selectedAddress" value={addrID} defaultChecked></input>)}   
                </div>
                <div className="addressBoxDesc w-100">
                {addrInfo.street} <br />
                {addrInfo.number} {addrInfo.complement} <br />
                {addrInfo.city}/{addrInfo.state} <br />
                CEP: {addrInfo.CEP}
                </div>
                { (addrInfo.main !== "1") ? 
                    (<Link className="selectAddressLink shadow mt-4 mb-2 p-2" to="/my-profile"> Definir como padrão </Link>) 
                    : 
                    (<button className="selectAddressLink disabledCursor shadow mt-4 mb-2 p-2"> Endereço padrão </button>)
                }
            </div>
        );
    }

    return (
        <div className="">
            <HomeHeader />
            <div className="container px-3">
                <div className="row py-3 pt-5" >
                    <h1> Endereço de entrega</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="row py-3">
                        <h2> Selecione um já existente: </h2>
                    </div>
                    <div className="row d-flex justify-content-center align-itens-center m-0">
                        { userAddresses }
                    </div>
                    <div className="row py-3 px-2">
                        <h2> Ou adicione um novo à sua conta: </h2>
                        <div className="row selectAddressMainBox p-2 m-0">
                            <div className="col-12 d-flex justify-content-between align-items-center w-100 p-2">
                                <h3> “Apelido” do endereço (será exibido somente para você): </h3>
                                { (Object.keys(window.userAddress).length < 3) ? (<input className="selectAddressRadio" type="radio" id="addressNew" name="selectedAddress" value="addressNew"></input>) : (<b> NÃO É POSSíVEL ADICIONAR OUTRO ENDEREÇO </b>)}
                            </div>
                            <input className="col-12 selectAddressTextBox w-75 p-1 mx-2" type="text" value={nickname} onChange={(event) => {setNickname(event.target.value)}} placeholder="Apelido do endereço"></input>
                            
                            <h3 className="col-12 p-2 pt-4"> Logradouro (rua, avenida, alameda etc.): </h3>
                            <input className="col-12 selectAddressTextBox w-75 p-1 mx-2" type="text" value={street} onChange={(event) => {setStreet(event.target.value)}} placeholder="Rua, avenida, alameda..."></input>

                            <div className="col-6">
                                <h3 className="p-2 pt-4"> Número: </h3>
                                <input className="selectAddressTextBox w-75 p-1 mx-2" type="text" value={number} onChange={(event) => {setNumber(event.target.value)}}></input>
                            </div>
                            <div className="col-6">
                                <h3 className="p-2 pt-4"> Complemento: </h3>
                                <input className="selectAddressTextBox w-75 p-1 mx-2" type="text" value={complement} onChange={(event) => {setComplement(event.target.value)}}></input>
                            </div>
                            <div className="col-6">
                                <h3 className="p-2 pt-4"> CEP: </h3>
                                <input className="selectAddressTextBox w-75 p-1 mx-2" type="text"value={CEP} onChange={(event) => {setCEP(event.target.value)}} ></input>
                            </div>
                            <div className="col-6">
                                <h3 className="p-2 pt-4"> Cidade: </h3>
                                <input className="selectAddressTextBox w-75 p-1 mx-2" type="text" value={city} onChange={(event) => {setCity(event.target.value)}}></input>
                            </div>
                            <div className="col-6 mb-2">
                                <h3 className="p-2 pt-4"> Estado: </h3>
                                <input className="selectAddressTextBox w-75 p-1 mx-2" type="text" value={state} onChange={(event) => {setState(event.target.value)}}></input>
                            </div>
                            <div className="col-6 d-flex align-items-end justify-content-end">
                                { (Object.keys(window.userAddress).length < 3) ?
                                    (<button className="selectAddressLink shadow mt-4 mb-2 p-2" onClick={addAddrToProfile}>
                                        Adicionar endereço ao perfil
                                    </button>) :
                                    (<p className="addrLimitParag p-3"> Limite de endereços atingidos </p>)
                                }
                            </div>
                        </div>
                    </div>
                    <div className="row py-3 px-2">
                        <input type="submit" value="Ir para pagamento" className="goToPaymentButton shadow py-3 mb-4"></input>
                    </div>
                </form>
                <h3 className="selectAddressWarningMessage py-3 w-100 text-center">{message}</h3>
            </div>
            <Footer />
        </div>
    );
}