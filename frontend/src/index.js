import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'popper.js';
import 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

// created for testing
window.productsList = {
  "product_0" : {
      "name" : "Ovo 0",
      "price" : 100,
      "quantity" : 14,
      "description" : "blablabla",
      "suppliers" : "Empresa1, Empresa2",
      "category" : "caipira"
  },
  "product_1" : {
      "name" : "Ovo 1",
      "price" : 85,
      "quantity" : 200,
      "description" : "blablabla",
      "suppliers" : "Empresa1, Empresa2, Empresa3",
      "category" : "caipira"
  },
  "product_2" : {
      "name" : "Ovo 2",
      "price" : 25,
      "quantity" : 30,
      "description" : "blablabla",
      "suppliers" : "Empresa2",
      "category" : "branco"
  },
  "product_3" : {
      "name" : "Ovo 3",
      "price" : 150,
      "quantity" : 44,
      "description" : "blablabla",
      "suppliers" : "Empresa1, Empresa2, Empresa3",
      "category" : "pó"
  },
  "product_4" : {
    "name" : "Ovo 4",
    "price" : 130,
    "quantity" : 111,
    "description" : "blablabla",
    "suppliers" : "Empresa1, Empresa2",
    "category" : "caipira"
  },
  "product_5" : {
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
  "user_0" : {
      "name" : "Suero Tiffani",
      "CPF" : "111.111.111-11"
  },
  "user_1" : {
    "name" : "Bergljot Antelmo",
    "CPF" : "222.222.222-22"
  },
  "user_2" : {
    "name" : "Byelobog Anapa",
    "CPF" : "333.333.333-33"
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
