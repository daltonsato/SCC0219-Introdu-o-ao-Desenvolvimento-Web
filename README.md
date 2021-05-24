# Web Dev Project - Egg Store

## Group 7
- Dalton Hiroshi Sato - 11275172
- Pedro Guerra Lourenço - 11218747
- Vitor Souza Amim - 11218772


## Overview 

This is a website developed for "SCC0219 - Introduction to Web Development" at the University of São Paulo (USP). Using Node.js, Bootstrap and the usual web development stack (HTML, CSS, Javascript), this is a website for a (fake) store that sells eggs (the most impressive and exotic ones!).

For now, we're also using React.js, but we'll change for Vue.js in the future (this is a project requirement).

## Requirements
The system has 2 types of users: Clients and Administrators
Administrators are yet to be implemented, but they are responsible for registering/managing products and users.
Customers are users who access the system to buy products.

Each customer's record includes, at least: name, id, email
Product records include, at least: name, id, photo, description, price, quantity in stock and quantity sold.
Selling Products: Products are selected, their quantity chosen, and are included in a cart. Products are purchased using a credit card number (any number is accepted by the system), a debit card number or even a bank slip. The quantity of product sold is added to the quantity sold and subtracted form the stock. Carts are emptied only on payment or by customers.
Product Management: Administrators can create/update/read/delete (crud) new products and services. For example, they can change the stock quantity.

Functionalities yet to be implemented:
- Easily buy eggs;
- Register and login into an account;
- Choose payment method;
- Insert addresses to deliver the eggs;
- Change profile details (name, email, password, payment methods etc.);
- Check and manage the shopping cart;
- Check history of purchases;
- Add eggs to shopping cart (and, if necessary, remove them);
- Read about the company/store and its creators;
- Contact the website's creators

## Project Description
Our store is made with Javascript, CSS, Node.js and React (we'll change for Vue.js). When entering the main page (or running with `npm start`), you will see homepage welcoming the user, containing an opening message, a brief description about our products and an about us section, containing our history and a list of our contacts.
Using React, we designed our screens, applying the Single Page Application style.
Our pages will contain clickable buttons, and they will be used to navigate between other pages and also to do specific actions, like log-in and log-out, create an account, choose method payment, check history of purchases and manage the shopping cart. There will be also areas to input information, such as address to deliver the eggs, and insert personal information to manage the account.

## Comments About the Code
_// TO DO: Any comment you may want to add to help understand your code. This is good programming practice_

## Test Plan
_// TO DO: Text describing the tests that will be performed. If an automatic test tool/framework is used (ex: Selenium, jUnit, Spock), the code for the tests can be used_

## Test Results
_// TO DO: Text describing the test results. If an automatic test tool/framework is used, its output can be used_

## Build Procedures

### First milestone
For now, to build and run the project, there's a standard guide [here](https://github.com/daltonsato/SCC0219-Introdu-o-ao-Desenvolvimento-Web/blob/master/frontend/README.md).

You must have `node.js` installed on your machine. To download and install it, check [the official Node.js page](https://nodejs.org/en/). Node.js will install the NPM (Node Package Manager).

As an alternative to the standard guide, if you are using Linux, what you can do is:
1. Inside `/frontend`, run `npm install` to install all dependencies from the project (a folder `node_modules` will be created)
2. Run `npm start` inside `/frontend` and you're done!
3. Wait until the development server is up (check your terminal) and then visit `http://localhost:3000/`.

_Obs.: for Windows, you can use WSL and follow these steps._

The pages that exist for now are: 
1. Homepage (source code [here](https://github.com/daltonsato/SCC0219-Introdu-o-ao-Desenvolvimento-Web/tree/master/frontend/src/pages/Homepage))
2. ShoppingCart (source code [here](https://github.com/daltonsato/SCC0219-Introdu-o-ao-Desenvolvimento-Web/tree/master/frontend/src/pages/ShoppingCart))
3. Store (source code [here](https://github.com/daltonsato/SCC0219-Introdu-o-ao-Desenvolvimento-Web/tree/master/frontend/src/pages/Store))

You can check the design for other pages in `mockup.pdf` (the raw idea is there, the details are or will be present in the HTML files) and a flow diagram (indicating the navigation flow) in `flowDiagram.png`.

**Important: the current design is temporary. After finishing it, we decided changing  everything!! For the next milestone, we'll have a different mockup. Sorry for this "inconvenience"...**

## Problems
_// TO DO: List any major problems you had._

## Comments: 
_// TO DO: Any comments you wish to add._

