import React, { useState } from 'react';

import './Userpage.css';
import HomeHeader from '../components/Headers/HomeHeader';
import Footer from '../components/Footer/Footer';
import Cookies from 'universal-cookie';
import { Link, useHistory } from 'react-router-dom';


// Images
import add from '../../images/Add.png';


export default function Userpage() {

    const cookies = new Cookies();
    let history = useHistory(); // used to redict user
   
    let testCookie = "280E8410C4A05326EB815B577B05574FDFB4AE016C399ACF1B02CFE5C59D59FE"; // sha-256 -> ganeshtestlogin (used for testing)
	let activeUserSession = [ testCookie ];

    const [,setValue] = useState();    

    function deleteAddr(props) {
     
       if(window.userAddress[props.target.id].main === "1"){
           alert("Nao se pode excluir seu endereço padrão");
           return;
        }
       
        delete window.userAddress[props.target.id];
		console.log(window.userAddress);
        history.push("/my-profile");
        //setValue({}); // needed to re-render elements of page (and remove the deleted element)
    }
    
   function setToMain(props){
       //console.log(props.target.id);
       //console.log(document.getElementsByClassName("mainAddress")[0]);

       if(props.target.classList.contains("mainAddress")){
           return;
       }
      
        let oldMain = document.getElementsByClassName("mainAddress")[0].id;

        window.userAddress[oldMain].main = "0";
        window.userAddress[props.target.id].main = "1";
        history.push("/my-profile");
      
   }

    function addAddr(props){
        //console.log(props.target.Children);

        if(props.target.classList.contains("inputPhase")){
            //alert();
            return;
        }

        let element1 = document.createElement("input");
        element1.id = "street";
        element1.classList.add("newAddress", "m-2", "inputPhase");
        element1.type = "text";
        element1.placeholder = "Rua";

        let element2 = document.createElement("input");
        element2.classList.add("newAddress", "m-2", "inputPhase");
        element2.id = "number";
        element2.type = "text";
        element2.placeholder = "Número";

        let element3 = document.createElement("input");
        element3.classList.add("newAddress", "m-2", "inputPhase");
        element3.id = "city";
        element3.type = "text";
        element3.placeholder = "Cidade";

        let element4 = document.createElement("input");
        element4.classList.add("newAddress", "m-2", "inputPhase");
        element4.id = "CEP";
        element4.type = "text";
        element4.placeholder = "CEP";

        let elementBtn = document.createElement("input");
        elementBtn.classList.add("saveAddr", "mx-5", "px-4", "py-1", "inputPhase");
        elementBtn.type = "button";
        elementBtn.value = "Salvar";
        elementBtn.id = "saveChanges";

        props.target.innerText = "";
        props.target.classList = []
        props.target.classList.add("address", "text-center", "inputPhase");
        props.target.appendChild(element1);
        props.target.appendChild(element2);
        props.target.appendChild(element3);
        props.target.appendChild(element4);
        props.target.appendChild(elementBtn);   


        document.getElementById("saveChanges").addEventListener("click", saveAddr);
    }
    
    function saveAddr(props){
        //console.log(document.getElementById("street").value);
        //console.log(props.target);
        if(props.target.id === "saveChanges"){

            if(document.getElementById("street").value !== "" && document.getElementById("number").value !== "" && document.getElementById("city").value !== "" && document.getElementById("CEP").value !== ""){
                let newProdId;
                do {
                    newProdId = "addr" + Math.floor(Math.random() * 1001); // random from 0 to 1000
                } while (newProdId in window.userAddress);
    
                window.userAddress[newProdId] = {
                    "nickname" : "",
                    "street" : document.getElementById("street").value,
                    "number" : document.getElementById("number").value,
                    "complement" : "",
                    "city" :  document.getElementById("city").value,
                    "state" : "",
                    "CEP" : document.getElementById("CEP").value,
                    "main" : "0"
                }
               //setValue({});
            }else{
                alert("Preencha todos os campos");
            }

         
       }
        
    }

    if (!activeUserSession.includes(cookies.get("SESSION"))) {
        history.push("/store");
        return (<div>Você precisa estar logado para ver essa página</div>);
    }

	function logOut(props){
		if(activeUserSession.includes(cookies.get("SESSION"))){
			cookies.remove("SESSION", {path: "/", domain: "localhost"});
			history.push("/");
		}
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
                <input id= {addressID} className="delete py-2 px-4 " type="button" value="Excluir" onClick = {deleteAddr}></input>
                    {setMain}
                </div>   
            </div>
      
        );
    }
    if(addresses.length < 3){
        addresses.push(
            //todos os elementos dentro da div possuem o onClick
                <div className = "address p-5 text-center addAddress" onClick = {addAddr}>
                    <img className="img-fluid rounded mx-auto d-block py-3 inputPhase" src={add} alt="add" />
                    <h2 className = "inputPhase">Adicionar endereço</h2>
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
            <div className="container-fluid eggBackgroundUser">
               <div className = "row d-flex pt-5">

                    <div className="col-12 col-md-6 bg-white shadow p-3">
                        <ul className="History">
                            <h2>Histórico de compras</h2>
                            {purchases}
                        </ul>
                    </div>
                    
                    <div className = "col-12 col-md-6 py-3">
                        <div className="row d-flex align-items-center justify-content-center">
                            <div className="col col-xl-6 my-2 d-flex align-items-center justify-content-center">{addresses[0]}</div>
                            <div className="col col-xl-6 my-2 d-flex align-items-center justify-content-center">{addresses[1]}</div>
                            <div className="col col-xl-6 my-2 d-flex align-items-center justify-content-center">{addresses[2]}</div>
                            <div className="col col-xl-6 my-2 d-flex align-items-center justify-content-center">{addresses[3]}</div>
                        </div>
                    </div>

                    
                </div>

                <div className = "row d-flex justify-content-end m-5 p-5">
                    <Link className = "functionBox reportProb col-12 col-sm-6 col-xl-3 h5 p-3 mx-5 text-center" to="/contact-us">Relatar problema</Link>
                    <h5 className = "functionBox col-12 col-sm-6 col-xl-3 h5 p-3 mx-5 text-center" onClick={logOut}>Log out</h5>
                </div>
               
                
            <Footer />
            </div>
            </React.Fragment>
    );
}

