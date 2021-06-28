import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'popper.js';
import 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

// created for testing
window.productsList = {
  "product0" : {
      "name" : "Ovo 0",
      "price" : 100,
      "quantity" : 14,
      "description" : "blablabla",
      "suppliers" : "Empresa1, Empresa2",
      "category" : "caipira"
  },
  "product1" : {
      "name" : "Ovo 1",
      "price" : 85,
      "quantity" : 200,
      "description" : "blablabla",
      "suppliers" : "Empresa1, Empresa2, Empresa3",
      "category" : "caipira"
  },
  "product2" : {
      "name" : "Ovo 2",
      "price" : 25,
      "quantity" : 30,
      "description" : "blablabla",
      "suppliers" : "Empresa2",
      "category" : "branco"
  },
  "product3" : {
      "name" : "Ovo 3",
      "price" : 150,
      "quantity" : 44,
      "description" : "blablabla",
      "suppliers" : "Empresa1, Empresa2, Empresa3",
      "category" : "pó"
  },
  "product4" : {
    "name" : "Ovo 4",
    "price" : 130,
    "quantity" : 111,
    "description" : "blablabla",
    "suppliers" : "Empresa1, Empresa2",
    "category" : "caipira"
  },
  "product5" : {
    "name" : "Ovo 5",
    "price" : 15,
    "quantity" : 65,
    "description" : "blablabla",
    "suppliers" : "Empresa1",
    "category" : "caipira"
  }
};

// created for testing
window.users = {
  "user0" : {
      "name" : "Suero Tiffani",
      "CPF" : "111.111.111-11",
      "telContact" : "(11)1111-1111",
      "email" : "suerotiffani@email.com"
  },
  "user1" : {
    "name" : "Bergljot Antelmo",
    "CPF" : "222.222.222-22",
    "telContact" : "(22)2222-2222",
    "email" : "bergljot_antelmo@email.com"
  },
  "user2" : {
    "name" : "Byelobog Anapa",
    "CPF" : "333.333.333-33",
    "telContact" : "(33)3333-3333",
    "email" : "byelobog_anapa@email.com"
  }
};

// created for testing
window.shoppingCart = {};

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
