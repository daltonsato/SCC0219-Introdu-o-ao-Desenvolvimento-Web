import React from 'react';

import './Userpage.css';
import HomeHeader from '../components/Headers/HomeHeader';
import Footer from '../components/Footer/Footer';
import Cookies from 'universal-cookie';
import { Link, useHistory } from 'react-router-dom';
import { useParams } from "react-router";

// Images
import add from '../../images/Add.png';


export default function Userpage() {

    const cookies = new Cookies();
    let history = useHistory(); // used to redict user
    let params = useParams(); // params in URL (see routes.js)
    
    
    function deleteAddr(props) {
       console.log(props.target.id);
       console.log(window.userAddress);
        delete window.userAddress[props.target.id];
        if(props.target.classList.contains("mainAddress")){
            alert("ok");
            let newMain = document.getElementsByClassName("toMain")[0];
            newMain.classList = [];
            newMain.innerHTML = "";
            let element = document.createElement("input");
            element.classList.add("mainAddress", "d-inline", "mx-4", "py-2", "px-1");
            element.innerText = "Endereço principal";
            newMain.appendChild(element);
        }

        history.push("/my-profile");
    }
    
   function setToMain(props){
       console.log(props.target.parentNode);
       if(props.target.classList.contains("mainAddress")){
           return;
       }
       if(document.getElementsByClassName("mainAddress")[0] != undefined){
           let oldMain = document.getElementsByClassName("mainAddress")[0];
           oldMain.classList = [];
           oldMain.innerText = "";
           oldMain.classList.add("d-inline");
           let element = document.createElement("input");
           element.classList.add("makeMain", "py-2", "mx-4");
           element.value = 'Definir Padrão';
           element.type = "button";
           oldMain.appendChild(element);
       }
      
       props.target.parentNode.classList = [];
       props.target.parentNode.classList.add("mainAddress", "d-inline", "mx-4", "py-2", "px-1");
       props.target.parentNode.innerText =  "Endereço Padrão";
   }


    const purchases = [];
    const addresses = [];
  
    for (const [purchaseID, purchaseDetails] of Object.entries(window.purchaseHistory)) {

        purchases.push(
            <li key = {"li_"+purchaseID} className = "historyItem shadow d-flex align-itens-center justify-content-center p-3 my-3">
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
                 <div className = "mainAddress d-inline mx-4 py-2 px-1"  onClick = {setToMain}>Endereço padrão</div>
            );
        }else{
            setMain = (
                <div  className = "d-inline toMain"  onClick = {setToMain}>
                    <input className="makeMain py-2 mx-4" type="button" value="Definir Padrão"></input>
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
                <input id= {addressID} className="delete py-2 px-4" type="button" value="Excluir" onClick = {deleteAddr}></input>
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

