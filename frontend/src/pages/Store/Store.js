import React from 'react';

import './Store.css';
import HomeHeader from '../components/Headers/HomeHeader';
import Footer from '../components/Footer/Footer';

// Images
import ovo from '../../images/ovos.png';
import ovoPo from '../../images/ovoPo.png';

export default function Store() {
    let addToCart = (props) => {
        let productID = props.target.parentNode.id;
        if (window.shoppingCart[productID] === null || window.shoppingCart[productID] === undefined) {
            window.shoppingCart[productID] = 1;
        }
        else {
            window.shoppingCart[productID] += 1;
        }
        console.log("Item adicionado ao carrinho: " + productID + ", qtd. atual: ", window.shoppingCart[productID]);
        
        let popup = document.getElementById("addItemPopup");
        let popupText = document.getElementById("popupText");
        popupText.innerHTML += "Item adicionado ao carrinho!<br/>";

        popup.classList.remove("d-none");

        setTimeout(() => { 
            popup.classList.add("d-none"); 
            popupText.innerHTML = "";
        }, 2500);

        // must add: if something goes wrong, we must show message (in red)
       
    }

    const eggsCaipira = [];
    const eggsBranco = [];
    const eggsPo = [];

    for (const [eggID, eggDetails] of Object.entries(window.productsList)) {
        // src={require("./../../images/ovos.png")} -> not working...
        //  Popper not working properly -> data-toggle="popover" data-content="Produto adicionado ao carrinho!"
        if (eggDetails.category === "caipira") {
            eggsCaipira.push(
                <div key={"div_" + eggID} className= "d-flex justify-content-center align-itens-center col-12 col-sm-6 col-lg-4 col-xl-3 my-2">
                    <div className = "productContainer">
                        <h6 > Ovo {eggDetails.category} </h6>
                        <img className="img-fluid w-50 rounded mx-auto d-block py-4" src={ovo} alt="ovo" />
                        <h6 className = "pb-2"> Preço: R$ {eggDetails.price} </h6>
                        <div id={eggID} className = "storeBuyButton mx-auto w-50" onClick={addToCart}>
                                <h6 className="py-2">Comprar</h6>
                        </div>
                    </div>
                </div>
            );
        }
        else if (eggDetails.category === "branco") {
            eggsBranco.push(
                <div key={"div_" + eggID} className= "d-flex justify-content-center align-itens-center col-12 col-sm-6 col-lg-4 col-xl-3 my-2">
                    <div className = "productContainer">
                        <h6 > Ovo {eggDetails.category} </h6>
                        <img className="img-fluid w-50 rounded mx-auto d-block py-4" src={ovo} alt="ovo" />
                        <h6 className = "pb-2"> Preço: R$ {eggDetails.price} </h6>
                        <div id={eggID} className = "storeBuyButton mx-auto w-50" onClick={addToCart}>
                                <h6 className="py-2">Comprar</h6>
                        </div>
                    </div>
                </div>
            );
        }
        else if (eggDetails.category === "pó") {
            eggsPo.push(
                <div key={"div_" + eggID} className= "d-flex justify-content-center align-itens-center col-12 col-sm-6 col-lg-4 col-xl-3 my-2">
                    <div className = "productContainer">
                        <h6 > Ovo em {eggDetails.category} </h6>
                        <img className="img-fluid w-50 rounded mx-auto d-block py-3" src={ovoPo} alt="ovo em pó" />
                        <h6 className = "pb-2"> Preço: R$ {eggDetails.price} </h6>
                        <div id={eggID} className = "storeBuyButton mx-auto w-50" onClick={addToCart}>
                            <h6 className="py-2">Comprar</h6>
                        </div>
                    </div>
                </div>
            );
        }
    }


    return (
        <React.Fragment>
            <HomeHeader />
            <div className="backGround">
                <div className = "container">
                    <div className="d-flex justify-content-end align-items-center pt-4">
                        <h1 className = "py-3 col">Produtos</h1>
                        <h5 className="py-3 col-3 text-center searchBar">Pesquisar produto</h5>
                    </div>

                    <p>Conheça nosso catálogo</p>
  
                    <h3 className = "pt-5 pb-5 d-flex justify-content-center category">Ovos caipira (dúzia de ovos)</h3>
                    <div className = "row d-flex justify-content-start align-items-start productBar pb-5">
                        {eggsCaipira}
                    </div>


                    <h3 className = "pt-5 pb-5 d-flex justify-content-center category">Ovos Brancos (dúzia de ovos)</h3>
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