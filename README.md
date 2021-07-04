# Web Dev Project - Egg Store

## Group 7
- Dalton Hiroshi Sato - 11275172
- Pedro Guerra Lourenço - 11218747
- Vitor Souza Amim - 11218772


## Overview 

This is a website developed for "SCC0219 - Introduction to Web Development" at the University of São Paulo (USP). Using Node.js, Bootstrap, React.js and the usual web development stack (HTML, CSS, Javascript), this is a website for a (fake) store that sells eggs (the most impressive and exotic ones!).

## Requirements
The system has 2 types of users: Clients and Administrators
Administrators are yet to be implemented, but they are responsible for registering/managing products and users.
Customers are users who access the system to buy products.

Each customer's record includes, at least: name, id, email
Product records include, at least: name, id, photo, description, price, quantity in stock and quantity sold.
Selling Products: Products are selected, their quantity chosen, and are included in a cart. Products are purchased using a credit card number (any number is accepted by the system), a debit card number or even a bank slip. The quantity of product sold is added to the quantity sold and subtracted form the stock. Carts are emptied only on payment or by customers.
Product Management: Administrators can create/update/read/delete (crud) new products and services. For example, they can change the stock quantity.

Functionalities already implemented:
- Easily buy eggs;
- Login into an account;
- Insert addresses to deliver the eggs;
- Check and manage the shopping cart;
- Check history of purchases;
- Add eggs to shopping cart (and, if necessary, remove them);
- Read about the company/store and its creators;
- Contact the website's creators

Functionalities yet to be implemented:
- Register an account;
- Choose payment method;
- Change profile details (name, email, password, payment methods etc.);
- Report a problem
- Add a new address


## Project Description
Our store is made with Javascript, CSS, Node.js and React. When entering the main page (or running with `npm start`), you will see homepage welcoming the user, containing an opening message, a brief description about our products and an about us section, containing our history and a list of our contacts.

Using React, we designed our screens, applying the Single Page Application style. Our pages will contain clickable buttons, and they will be used to navigate between other pages and also to do specific actions, like log-in and log-out, create an account, choose method payment, check history of purchases and manage the shopping cart. There will be also areas to input information, such as address to deliver the eggs, and insert personal information to manage the account.

## Comments About the Code
_// TO DO: Any comment you may want to add to help understand your code. This is good programming practice_

## Test Plan
All tests were manually executed. We tested all functionalities already implement in the website. To conduct the tests, we forced some inputs (malformed and normal inputs) into the parts where we have user interacting with the server. For now, the server doesn't exist. We created some atribbutes in the "windon" (see the index.js) and used it as our "database". 

Some of the test flows we had were:

Test 1:
- Access /homepage
- log in to test account (user: test@test.com; password: test)
- Go to buy products (/store, or click in 'Comprar' buttom)
- Choose any quantity of eggs you wish for
- Access ShoppingCart (/shopping-cart, or cart buttom in header)
- Control the exact quantities off eggs you wish to buy (the value and total value must change accordingly to the sum of prices times the quantities
- Click 'FINALIZAR COMPRA'
- Select address to send the package
- Enter with payment data
- Automatic return to homepage

Test 2:
- Access /homepage
- log in to test account (user: test@test.com; password: test)
- Go to the user profile (/my-profile or click in the profile icon button)
- Make these three actions any number of times by clicking in their respective buttons:
  - Definir padrão: Should define the desired address as the new main address
  - Excluir: Should delete the desired address if possible
  - Adicionar endereço: Should ask for inputs to create a new address, after clicking in the 'salvar' button a new address should appear


## Test Results
Test 1:
- ShoppingCart must be empty (payment done)

Test 2: 
- The address designed configuration should be maintained, 'Adicionar endereço' button only showing if there are less than 3 addresses, limit exceded message showing if there are exactly 3 addresses. Addresses should be filled first from left to right then up to bottom






## Build Procedures and other relevant information

### First milestone
For now, to build and run the project, there's a standard guide [here](https://github.com/daltonsato/SCC0219-Introdu-o-ao-Desenvolvimento-Web/blob/master/frontend/README.md).

You must have `node.js` installed on your machine. To download and install it, check [the official Node.js page](https://nodejs.org/en/). Node.js will install the NPM (Node Package Manager).

As an alternative to the standard guide, if you are using Linux, what you can do is:
1. Inside `/frontend`, run `npm install` to install all dependencies from the project (a folder `node_modules` will be created)
2. Run `npm start` inside `/frontend` and you're done!
3. Wait until the development server is up (check your terminal) and then visit `http://localhost:3000/`.

_Obs.: for Windows, you can use WSL and follow these steps. However, it was tested with the latest avaible version of Ubuntu2 0.04 LTS, since Ubuntu 18.04 WSL version did not support node_

The pages that exist for now are: 
1. Homepage (source code [here](https://github.com/daltonsato/SCC0219-Introdu-o-ao-Desenvolvimento-Web/tree/master/frontend/src/pages/Homepage))
2. ShoppingCart (source code [here](https://github.com/daltonsato/SCC0219-Introdu-o-ao-Desenvolvimento-Web/tree/master/frontend/src/pages/ShoppingCart))
3. Store (source code [here](https://github.com/daltonsato/SCC0219-Introdu-o-ao-Desenvolvimento-Web/tree/master/frontend/src/pages/Store))
4. About Us (source code [here](https://github.com/daltonsato/SCC0219-Introdu-o-ao-Desenvolvimento-Web/tree/master/frontend/src/pages/AboutUs))
5. AddAddress (source code [here](https://github.com/daltonsato/SCC0219-Introdu-o-ao-Desenvolvimento-Web/tree/master/frontend/src/pages/AddAddress))
6. Admin (source code [here](https://github.com/daltonsato/SCC0219-Introdu-o-ao-Desenvolvimento-Web/tree/master/frontend/src/pages/Admin))
7. Login (source code [here](https://github.com/daltonsato/SCC0219-Introdu-o-ao-Desenvolvimento-Web/tree/master/frontend/src/pages/Login))
8. Payment (source code [here](https://github.com/daltonsato/SCC0219-Introdu-o-ao-Desenvolvimento-Web/tree/master/frontend/src/pages/Payment))
9. Register (source code [here](https://github.com/daltonsato/SCC0219-Introdu-o-ao-Desenvolvimento-Web/tree/master/frontend/src/pages/Register))
10. SelectAddress (source code [here](https://github.com/daltonsato/SCC0219-Introdu-o-ao-Desenvolvimento-Web/tree/master/frontend/src/pages/SelectAddress))
11. UserPage (source code [here](https://github.com/daltonsato/SCC0219-Introdu-o-ao-Desenvolvimento-Web/tree/master/frontend/src/pages/Userpage))

You can check the design for other pages in `mockup.pdf` (the raw idea is there, the details are or will be present in the HTML files) and a flow diagram (indicating the navigation flow) in `flowDiagram.png`.

### Second milestone

To build and run the project, this standard guide [here](https://github.com/daltonsato/SCC0219-Introdu-o-ao-Desenvolvimento-Web/blob/master/frontend/README.md) still works.

As an alternative to the standard guide, if you are using Linux, what you can do is:
1. Inside `/frontend`, run `npm install` to install all dependencies from the project (a folder `node_modules` will be created)
2. Run `npm start` inside `/frontend` and you're done!
3. Wait until the development server is up (check your terminal) and then visit `http://localhost:3000/`.

_Obs.: for Windows, you can use WSL and follow these steps. However, it was tested with the latest avaible version of Ubuntu2 0.04 LTS, since Ubuntu 18.04 WSL version did not support node_

Now, all pages are included in the project. You can navigate through most of them via `Homepage`. However, the `/admin` page is only accessible by typing in the URL: `http://localhost:3000/admin`. To see all the routes you can access, check the `routes.js` file [here](https://github.com/daltonsato/SCC0219-Introdu-o-ao-Desenvolvimento-Web/tree/master/frontend/src/routes.js).

Default credentials to test the system (in the format `username:password`):
- To access admin page: `admin:admin`
- As a normal user: `test@test.com:test`

The client side funcionality is implement and the user should be able to: login, add itens to the shopping cart and see it with information about price, quantity etc., add addresses and payment methods, buy eggs and navigate through the entire website.

We still need to make the part related to finalizing a purchase: selecting address, payment method and buying the item. For now, the pages exist and you can navigate through them, but can't selected address nor payment methods you've added.

As an admin, you can also login, change the details of a product (name, price, description etc.) and remove users from the application.

All the functionality is still under construction because there's no backend. For now, we are inserting **for testing** elements like list of products and list of users in the `window` component, so if you press `F5` or reload the page by typing a new URL instead of navigating using buttons from the website, all the modifications that you do (such as changing products and users) will be lost. The data we are using to show products, users, itens, addresses etc. are coming from lists ("JSON-like" components) inside the `index.js` file. Later, all of there information will be in the backend. In addition to that, we are using "hardcoded" cookies to test logged-in functionalities.

## Problems
- We've spent a lot of time on this, but the header is not working as it should on mobile phones (small screens). It looks like a problem with `popper.js`, but we didn't manage to solve it yet.
- The onClick funtion on the div that prompts to add another address is called by its children, an image and a text causing some problems if you click exactly on them. we coudnt resolve this issue properly, the sub-optimal solution makes that if you click in the image or text of the div the onClick function will not be called  

## Comments: 
_// TO DO: Any comments you wish to add._
### Next Steps:
- Add more modularization, remove redundancies
- Develop back-end using Node.js
- Use Passport to authenticate users
- Start using a real database to store users, products, shopping carts etc.
- Fix header when using small screens (it collapses into a menu icon but doesn't show the menu's options wen needed)

