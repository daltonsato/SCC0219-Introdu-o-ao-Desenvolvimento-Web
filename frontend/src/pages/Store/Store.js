import React, { useState } from 'react';
import Cookies from 'universal-cookie'; // cookies used for testing

// CSS
import './Store.css';

import HomeHeader from '../components/Headers/HomeHeader';
import Footer from '../components/Footer/Footer';

// Images
import ovo from '../../images/ovos.png';
import ovoPo from '../../images/ovoPo.png';

export default function Store() {
    const cookies = new Cookies();
    let [ productsList, setProdsList ] = useState([]);
    let [ isLogged, setIsLogged ] = useState(false);
    const [ done, setDone ] = useState(false);

    // Function that shows the description of a product (triggered when user click on the item's image)
    let showDescription = (props) => {
        // console.log(props.target.parentNode.parentNode.id.split('_')[1]);
        let productID = props.target.parentNode.parentNode.id.split('_')[1]; // getting the product ID from parents
        let modalDescriptionBox = document.getElementById("modalBox_"+productID);
        modalDescriptionBox.classList.remove("d-none");
    };

    // Function to stop showing the modal box with description
    let closeModalBox = (props) => {
        props.target.parentNode.parentNode.classList.add("d-none");
    }

    // Function that searches for a string passed by the user over the products showed in the page
    // If found, product is highlighted and item is scrolled in to view smoothly
    let handleSearch = (props) => {
        if (props.key === 'Enter') {
            let wordToSearch = props.target.value.toLowerCase();
            
            for (const [eggID, eggDetails] of Object.entries(productsList)) {
                if (eggDetails.name.toLowerCase().includes(wordToSearch)) {
                    // console.log(document.getElementById("div_"+eggID));
                    document.getElementById("div_"+eggID).scrollIntoView({behavior: "smooth", block: "center"});
                    document.getElementById("div_"+eggID).classList.add("bg-warning");
                    document.getElementById("div_"+eggID).classList.add("rounded");
                    document.getElementById("div_"+eggID).classList.add("py-2");

                    setTimeout(() => { 
                        document.getElementById("div_"+eggID).classList.remove("bg-warning");
                        document.getElementById("div_"+eggID).classList.remove("rounded");
                        document.getElementById("div_"+eggID).classList.remove("py-2");
                    }, 2000);
                    break;
                }
            }

        }
    };

    // Function that adds an item to the user's shopping cart
    // A message is shown to alert the user about the action
    let addToCart = (props) => {
        if (!isLogged) {
            let popup = document.getElementById("addItemPopup");
            let popupText = document.getElementById("popupText");
            popupText.innerHTML = "Você precisa estar logado para adicionar itens ao carrinho!";

            popup.classList.remove("d-none");
            popup.classList.add("bg-danger");

            setTimeout(() => { 
                popup.classList.add("d-none");
                popup.classList.remove("bg-danger");
                popupText.innerHTML = "";
            }, 2500);

            return;
        }
        let productID = props.target.parentNode.id;
        let popup = document.getElementById("addItemPopup");
        let popupText = document.getElementById("popupText");
        if (window.shoppingCart[productID] === null || window.shoppingCart[productID] === undefined) {
            window.shoppingCart[productID] = {"prodName": productsList[productID].name, "quantity" : 1, "price" : productsList[productID].price, "slug" : productsList[productID].slug};
			popupText.innerHTML += "Item adicionado ao carrinho!<br/>";
			console.log(window.shoppingCart[productID]);
			console.log("Item adicionado ao carrinho: " + productID + ", qtd. atual: ", window.shoppingCart[productID]);
        }
		else
		{
			popupText.innerHTML = "Item já adicionado no carrinho!<br/>";
			console.log(window.shoppingCart[productID]);
		}
        

        popup.classList.remove("d-none");

        setTimeout(() => { 
            popup.classList.add("d-none"); 
            popupText.innerHTML = "";
        }, 2500);

        // must add: if something goes wrong, we must show message (in red)
       
    }

    var listProducts = async () => {
        var products = [];

        let respProducts = await fetch(window.BACKEND_URL + '/products/list-all');

        if(respProducts.status === 200) {
            let prodsData = await respProducts.json();

            prodsData.forEach((prod) => {
                products.push(prod);
            });

            return products;
        }
        else {
            return null;
        }
    };

    var checkIfLogged = async () => {
        if (isLogged)
            return true;
        
        let sessionCookie = cookies.get("ADMIN_SESSION");
        if (sessionCookie == null)
            sessionCookie = cookies.get("SESSION");
        
        let resp = await fetch(window.BACKEND_URL + '/user/validate', {
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

    const eggsCaipira = [];
    const eggsBranco = [];
    const eggsPo = [];

    if (productsList.length === 0) {
        listProducts().then((prods) => {
            setProdsList(prods);
        });
    }

    if (!isLogged && !done) {
        checkIfLogged().then((res) => {
            setIsLogged(res);
            setDone(true);
        });
    }
    
    // Loading all eggs to the page (3 categories)
    for (const [eggID, eggDetails] of Object.entries(productsList)) {
        // src={require("./../../images/ovos.png")} -> not working...
        //  Popper not working properly -> data-toggle="popover" data-content="Produto adicionado ao carrinho!"
        if (eggDetails.category === "caipira") {
            eggsCaipira.push(
                <div key={"div_" + eggID} id={"div_" + eggID} className= "d-flex justify-content-center align-itens-center col-12 col-sm-6 col-lg-4 col-xl-3 my-2">
                    <div className = "productContainer">
                        <h6 > {eggDetails.name} </h6>
                        <img className="storeImgHover img-fluid w-50 rounded mx-auto d-block py-4" src={ovo} alt="ovo" onClick={showDescription}/>
                        <h6 className = "pb-2"> Preço: R$ {eggDetails.price} </h6>
                        <div id={eggID} className = "storeBuyButton mx-auto w-50" onClick={addToCart}>
                                <h6 className="py-2">Comprar</h6>
                        </div>
                    </div>
                    <div id={"modalBox_"+eggID} className="modalBox d-none"> 
                        <div className="modalBoxContent">
                            <span className="closeModalButton" onClick={closeModalBox}>&times;</span>
                            <h1> Descrição - {eggDetails.name}: </h1>
                            <p> {eggDetails.description}</p>
                        </div>
                    </div>
                </div>
            );
        }
        else if (eggDetails.category === "branco") {
            eggsBranco.push(
                <div key={"div_" + eggID} id={"div_" + eggID} className= "d-flex justify-content-center align-itens-center col-12 col-sm-6 col-lg-4 col-xl-3 my-2">
                    <div className = "productContainer">
                        <h6 > {eggDetails.name} </h6>
                        <img className="storeImgHover img-fluid w-50 rounded mx-auto d-block py-4" src={ovo} alt="ovo" onClick={showDescription}/>
                        <h6 className = "pb-2"> Preço: R$ {eggDetails.price} </h6>
                        <div id={eggID} className = "storeBuyButton mx-auto w-50" onClick={addToCart}>
                                <h6 className="py-2">Comprar</h6>
                        </div>
                    </div>
                    <div id={"modalBox_"+eggID} className="modalBox d-none"> 
                        <div className="modalBoxContent">
                            <span className="closeModalButton" onClick={closeModalBox}>&times;</span>
                            <h1> Descrição - {eggDetails.name}: </h1>
                            <p> {eggDetails.description}</p>
                        </div>
                    </div>
                </div>
            );
        }
        else if (eggDetails.category === "pó") {
            eggsPo.push(
                <div key={"div_" + eggID} id={"div_" + eggID} className= "d-flex justify-content-center align-itens-center col-12 col-sm-6 col-lg-4 col-xl-3 my-2">
                    <div className = "productContainer">
                        <h6 > {eggDetails.name} </h6>
                        <img className="storeImgHover img-fluid w-50 rounded mx-auto d-block py-3" src={ovoPo} alt="ovo em pó" onClick={showDescription}/>
                        <h6 className = "pb-2"> Preço: R$ {eggDetails.price} </h6>
                        <div id={eggID} className = "storeBuyButton mx-auto w-50" onClick={addToCart}>
                            <h6 className="py-2">Comprar</h6>
                        </div>
                    </div>
                    <div id={"modalBox_"+eggID} className="modalBox d-none"> 
                        <div className="modalBoxContent">
                            <span className="closeModalButton" onClick={closeModalBox}>&times;</span>
                            <h1> Descrição - {eggDetails.name}: </h1>
                            <p> {eggDetails.description}</p>
                        </div>
                    </div>
                </div>
            );
        }
        else
        {
            console.log("Vazio");
        }
    }


    return (
        <React.Fragment>
            <HomeHeader />
            <div className="backGround">
                <div className = "container">
                    <div className="d-flex justify-content-end align-items-center pt-4">
                        <h1 className = "py-3 col">Produtos</h1>
                        <input type="text" className="py-3 col-3 text-center searchBar" placeholder="Pesquisar produto" onKeyDown={handleSearch}></input>
                    </div>

                    <p>Conheça nosso catálogo</p>
  
                    <h3 className = "pt-5 pb-5 d-flex justify-content-center category">Ovos caipira (dúzia de ovos)</h3>
                    <div className = "row d-flex justify-content-start align-items-start productBar pb-5">
                        {eggsCaipira}
                    </div>


                    <h3 className = "pt-5 pb-5 d-flex justify-content-center category">Ovos brancos (dúzia de ovos)</h3>
                    <div className = "row d-flex justify-content-start align-items-start productBar pb-5">
                        {eggsBranco}
                    </div>

                    <h3 className = "pt-5 pb-5 d-flex justify-content-center category">Ovos em pó (500g)</h3>
                    <div className = "row d-flex justify-content-start align-items-start productBar pb-5">
                        {eggsPo}
                    </div>                    
                </div>
                
                <div id="addItemPopup" className="addedToCartPopup d-flex align-items-center justify-content-center text-center shadow d-none py-3"> <span id="popupText"></span> </div>

                <Footer />
            </div>
        </React.Fragment>
    );
}