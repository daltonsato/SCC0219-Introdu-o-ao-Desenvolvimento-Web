import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'popper.js';
import 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

window.BACKEND_URL = 'http://localhost:1337';
window.FRONTEND_URL = 'http://localhost:3000';

// created for testing
window.productsList = {
  "product0" : {
      "name" : "Ovo de galinha",
      "price" : 100,
      "quantity" : 14,
      "description" : "blablabla",
      "suppliers" : "Empresa1, Empresa2",
      "category" : "caipira"
  },
  "product1" : {
      "name" : "Ovo de codorna",
      "price" : 85,
      "quantity" : 200,
      "description" : "blablabla",
      "suppliers" : "Empresa1, Empresa2, Empresa3",
      "category" : "caipira"
  },
  "product2" : {
      "name" : "Ovo de codorna",
      "price" : 25,
      "quantity" : 30,
      "description" : "blablabla",
      "suppliers" : "Empresa2",
      "category" : "branco"
  },
  "product3" : {
      "name" : "Ovo de avestruz",
      "price" : 150,
      "quantity" : 44,
      "description" : "blablabla",
      "suppliers" : "Empresa1, Empresa2, Empresa3",
      "category" : "pó"
  },
  "product4" : {
    "name" : "Ovo de T-Rex",
    "price" : 130,
    "quantity" : 111,
    "description" : "blablabla",
    "suppliers" : "Empresa1, Empresa2",
    "category" : "caipira"
  },
  "product5" : {
    "name" : "Ovo de jacaré",
    "price" : 15,
    "quantity" : 65,
    "description" : "blablabla",
    "suppliers" : "Empresa1",
    "category" : "caipira"
  }
};

//created for testing
window.purchaseHistory = {
  "purchase0" : {
    "name" : "Ovo caipira",
    "price" : 100,
    "quantity" : 4,
    "data" : "27/06/2021",
    "address" : "13566-590"
  },
  "purchase1" : {
    "name" : "Ovo Branco",
    "price" : 50,
    "quantity" : 2,
    "data" : "26/06/2021",
    "address" : "13566-590"
  },
  "purchase2" : {
    "name" : "Ovo em pó",
    "price" : 25,
    "quantity" : 1,
    "data" : "26/05/2021",
    "address" : "11111-222"
  },
  "purchase3" : {
    "name" : "Ovo em pó",
    "price" : 25,
    "quantity" : 1,
    "data" : "26/05/2021",
    "address" : "11111-222"
  },
  "purchase4" : {
    "name" : "Ovo em pó",
    "price" : 25,
    "quantity" : 1,
    "data" : "26/05/2021",
    "address" : "11111-222"
  },
  "purchase5" : {
    "name" : "Ovo em pó",
    "price" : 25,
    "quantity" : 1,
    "data" : "26/05/2021",
    "address" : "11111-222"
  },
};

window.userAddress = {
  "addr0" : {
    "nickname" : "Minha casa",
    "street" : "Av. Trab. São Carlense",
    "number" : "400",
    "complement" : "Apto. 301",
    "city" : "São Carlos",
    "state" : "SP",
    "CEP" : "13566-590",
    "main" : "0"
  },
  "addr1" : {
    "nickname" : "Trabalho",
    "street" : "Rua da Assembleia",
    "number" : "921",
    "complement" : "",
    "city" : "Rio de janeiro",
    "state" : "RJ",
    "CEP" : "11111-222",
    "main" : "1"
  },

};

// Only stored in the database after order is finished
window.shoppingCart = {};

// created for testing
// codes that indicate that a purchase is happening and is related to the shopping cart of a user
window.purchaseCodes = {};


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
