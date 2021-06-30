import React from 'react';

import './Userpage.css';
import HomeHeader from '../components/Headers/HomeHeader';
import Footer from '../components/Footer/Footer';

// Images
import add from '../../images/Add.png';




function deleteAddr() {
    let tmp;
    tmp = document.getElementsByClassName("address");
    console.log(tmp[0].innerHTML);
    document.getElementsByClassName("address")
}

function setToMain() {
    console.log(document.getElementById("addr0"));
    let str =  <div className = "mainAddress d-inline mx-4 py-2 px-1">Endereço padrão</div>;
    document.getElementById("addr0").innerHTML = str ;
}

export default function Userpage() {
    
    
    const purchases = [];
    const addresses = [];
    
    //  const obj = window.purchaseHistory;
    //  obj["purchase0"].name = "UWU";
    //  console.log(obj["purchase0"]);

    for (const [purchaseID, purchaseDetails] of Object.entries(window.purchaseHistory)) {

        purchases.push(
            <li className="historyItem shadow d-flex align-itens-center justify-content-center p-3 my-3">
                <div className="text-left px-3 w-50">
                    <span className="align-middle"> {purchaseDetails.name} </span>
                </div>
                <div className="d-flex w-100 align-itens-center justify-content-center d-none d-sm-none d-md-none d-lg-inline">
                    <span className="align-middle px-3"> Qtd.: {purchaseDetails.quantity} </span> 
                    <span className="align-middle px-3"> Preço: {purchaseDetails.price} </span>
                    <span className="align-middle px-3"> Data: {purchaseDetails.data} </span> 
                    <span className="align-middle px-3"> CEP: {purchaseDetails.address}</span>
                </div>
            </li>
        );

      
    }

    var setMain;
    for (const [addressID, addressDetails] of Object.entries(window.userAddress)) {

        if(addressDetails.main === "1"){
            setMain = (
                 <div className = "mainAddress d-inline mx-4 py-2 px-1">Endereço padrão</div>
            );
        }else{
            setMain = (
                <div id = {addressID} className = "d-inline">
                    <input id= "setMain" className="makeMain py-2 mx-4" type="button" value="Definir Padrão" onClick = {setToMain}></input>
                </div>
           );
        }
        addresses.push(
   
            <div className = "address p-4">
                <h5> {addressDetails.street} </h5>  
                <h5>{addressDetails.number}</h5>
                <h5>{addressDetails.city}</h5>
                <h5> {addressDetails.CEP}</h5>
                <div className = "py-4">
                <input id= "delete" className="delete py-2 px-4" type="button" value="Excluir" onClick = {deleteAddr}></input>
                    {setMain}
                </div>   
            </div>
      
        );
    }
    if(addresses.length < 3){
        addresses.push(
                <div className = "address p-5 text-center addAddress">
                    <img className="img-fluid rounded mx-auto d-block py-3" src={add} alt="add" />
                    <h2 >Adicionar endereço</h2>
                </div> 
        );
    }else{
        addresses.push(
            <div className = "address p-5 text-center">
                <h2 >Limite maximo de endereços alcançado</h2>
            </div> 
        );
    }

   
    
    
    
    return (
        <React.Fragment>
            <HomeHeader />
            <div className="Container eggBackgroundUser">
               <div className = "d-flex row-3 pt-5">

                    <div className="col bg-white shadow mx-1 p-3">
                        <ul className="History">
                            <h2>Histórico de compras</h2>
                            {purchases}
                        </ul>
                    </div>
                    
                    <div className = "col-2 m-4">
                        {addresses[0]}
                        <div className = "d-flex row-3 pt-5">
                            <div className = "col">
                            {addresses[2]}
                            </div>
                        </div>
                    </div>

                    <div className = "col-2 m-4">
                        {addresses[1]}
                        <div className = "d-flex row-3 pt-5">
                            <div className = "col">
                            {addresses[3]}
                            </div>
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