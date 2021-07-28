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

    const [ isLogged, setIsLogged ] = useState(false);
    const [ done, setDone ] = useState(false);
    const [,setValue] = useState();

    //deletes an address
    function deleteAddr(props) {
     
       if(window.userAddress[props.target.id].main === "1"){
           alert("Nao se pode excluir seu endereço padrão");
           return;
        }
       
        delete window.userAddress[props.target.id];
		console.log(window.userAddress);
        //re-render the elements of the page
        setValue({}); 
        
    }
    
    //sets the value of an address to main
   function setToMain(props){

       if(props.target.classList.contains("mainAddress")){
           return;
       }
      
        let oldMain = document.getElementsByClassName("mainAddress")[0].id;

        window.userAddress[oldMain].main = "0";
        window.userAddress[props.target.id].main = "1";
        props.target.id = "";
        //re-render the elements of the page
        setValue({});
      
   }

    //change div to accepts some input values to create a new address 
    function addAddr(props){

        if(props.target.classList.contains("inputPhase")){
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

        let newAddr = document.getElementsByClassName("addAddress")[0];
       newAddr.innerText = "";
       newAddr.classList = []
       newAddr.classList.add("address", "text-center", "inputPhase");
       newAddr.appendChild(element1);
       newAddr.appendChild(element2);
       newAddr.appendChild(element3);
       newAddr.appendChild(element4);
       newAddr.appendChild(elementBtn);   

        document.getElementById("saveChanges").addEventListener("click", saveAddr, false);
    }
    
    //save the input values and creates a new address
    function saveAddr(props){
        //funtion only works if all input values are not null
        if(document.getElementById("street").value !== "" && document.getElementById("number").value !== "" && document.getElementById("city").value !== "" && document.getElementById("CEP").value !== ""){
                
            // Sets an ID for the new product and inserts it in the list of addresses
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
            //re-render the elements of the page
            history.push("");
            history.push("my-profile");
        }
        else{
            alert("Preencha todos os campos");
        }
    }

    var checkIfLogged = async () => {
        if (isLogged)
            return true;
        
        let sessionCookie = cookies.get("ADMIN_SESSION");
        if (sessionCookie == null)
            sessionCookie = cookies.get("SESSION");
            
        // process.env.BACKEND_URL + 
        let resp = await fetch('/user/validate', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-access-token': sessionCookie
            }
        });

        resp = await resp.json();

        if (resp.token_status === "OK")
            return true;
        else
            return false;
    };

    if (!isLogged && !done) {
        checkIfLogged().then((res) => {
            setIsLogged(res);
            setDone(true);
        });
    }

    if (done && !isLogged) {
        history.push('/store');
    }

	function logOut(props){
		if(isLogged){
			cookies.remove("SESSION");
            cookies.remove("ADMIN_SESSION");
			history.push("/");
		}
	}

    const purchases = [];
    const addresses = [];
  
    //loads the purchases 
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

    //loads user addresses
    var setMain;
    for (const [addressID, addressDetails] of Object.entries(window.userAddress)) {

        //if the address is the main address show it in the div
        if(addressDetails.main === "1"){
            setMain = (
                 <div id= {addressID} className = "mainAddress d-inline mx-4 py-2 px-1"  onClick = {setToMain}>Endereço padrão</div>
            );
        //if not set a button that can make it the main address
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

    //if the limit number of addresses has not been reached show an add address button
    if(addresses.length < 3){
        addresses.push(
            //todos os elementos dentro da div possuem o onClick
                <div className = "address p-5 text-center addAddress" onClick = {addAddr}>
                    <img className="img-fluid rounded mx-auto d-block py-3 inputPhase" src={add} alt="add" />
                    <h2 className = "inputPhase">Adicionar endereço</h2>
                </div> 
        );
    //if there are already 3 addresses make another div to show the limit has been reached
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

