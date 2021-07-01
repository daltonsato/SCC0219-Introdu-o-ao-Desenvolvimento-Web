import React, { Children } from 'react';

import './Userpage.css';
import HomeHeader from '../components/Headers/HomeHeader';
import Footer from '../components/Footer/Footer';
import Cookies from 'universal-cookie';
import { Link, useHistory } from 'react-router-dom';


// Images
import add from '../../images/Add.png';
import { main } from '@popperjs/core';


export default function Userpage() {

    const cookies = new Cookies();
    let history = useHistory(); // used to redict user
   
    
    
    function deleteAddr(props) {
     
       if(window.userAddress[props.target.id].main == 1){
           alert("Nao se pode excluir seu endereço padrão");
           return;
        }
        delete window.userAddress[props.target.id];
        //alert(); //chega até aqui
        history.push("/my-profile");
    }
    
   function setToMain(props){
       console.log(props.target.id);
       console.log(document.getElementsByClassName("mainAddress")[0]);

       if(props.target.classList.contains("mainAddress")){
           return;
       }
      
        let oldMain = document.getElementsByClassName("mainAddress")[0];
        oldMain.classList = [];
        let oldMainID = oldMain.id;
        oldMain.id = ""
        oldMain.innerText = "";
        oldMain.classList.add("d-inline");
        let element = document.createElement("input");
        element.classList.add("makeMain", "py-2", "mx-4");
        element.id = oldMainID;
        element.value = 'Definir Padrão';
        element.type = "button";
        oldMain.appendChild(element);
        window.userAddress[oldMainID].main = "0";
     

        
        props.target.parentNode.classList = [];
        props.target.parentNode.classList.add("mainAddress", "d-inline", "mx-4", "py-2", "px-1");
        props.target.parentNode.id = props.target.id;
        props.target.parentNode.innerText =  "Endereço Padrão";
        window.userAddress[props.target.id].main = "1";
        
        console.log(document.getElementsByClassName("mainAddress")[0]);
        console.log(props.target);
   }

   function addAddr(props){
        console.log(props.target.Children);

        if(props.target.classList.contains("inputPhase")){
            //alert();
           return;
       }

        let element1 = document.createElement("input");
        element1.classList.add("newAddress", "m-2", "inputPhase");
        element1.type = "text";

        let element2 = document.createElement("input");
        element2.classList.add("newAddress", "m-2", "inputPhase");
        element2.type = "text";

        let element3 = document.createElement("input");
        element3.classList.add("newAddress", "m-2", "inputPhase");
        element3.type = "text";

        let element4 = document.createElement("input");
        element4.classList.add("newAddress", "m-2", "inputPhase");
        element4.type = "text";

        let elementBtn = document.createElement("input");
        elementBtn.classList.add("saveAddr", "mx-5", "px-4", "py-1", "inputPhase");
        elementBtn.type = "button";
        elementBtn.value = "Salvar"
        elementBtn.type = "button";

        props.target.innerText = "";
        props.target.classList = []
        props.target.classList.add("address", "text-center", "inputPhase");
        props.target.appendChild(element1);
        props.target.appendChild(element2);
        props.target.appendChild(element3);
        props.target.appendChild(element4);
        props.target.appendChild(elementBtn);
        
        
        //console.log(props.target.Children);
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
                 <div id= {addressID} className = "mainAddress d-inline mx-4 py-2 px-1"  onClick = {setToMain}>Endereço padrão</div>
            );
        }else{
            setMain = (
                <div  className = "d-inline"  onClick = {setToMain}>
                    <input  id= {addressID} className="makeMain py-2 mx-4" type="button" value="Definir Padrão"></input>
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
            //todos os elementos dentro da div possuem o onClick
                <div className = "address p-5 text-center addAddress" onClick = {addAddr}>
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

