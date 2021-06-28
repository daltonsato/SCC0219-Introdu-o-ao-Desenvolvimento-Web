import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Homepage from './pages/Homepage/Homepage';
import Userpage from './pages/Userpage/Userpage';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
import Store from './pages/Store/Store';
import Payment from './pages/Payment/Payment';
import AboutUs from './pages/AboutUs/AboutUs';
import ContactUs from './pages/ContactUs/ContactUs';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import NotFound from './pages/components/NotFound/NotFound'
import AddAddress from './pages/AddAddress/AddAddress';
import AdminLogin from './pages/Admin/AdminLogin/AdminLogin';
import AdminEditProduct from './pages/Admin/AdminEditProduct/AdminEditProduct';
import AdminEditUser from './pages/Admin/AdminEditUser/AdminEditUser';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={`/`} exact component={ Homepage }/> {/* sem o exact, o router não irá diferenciar essa das outras Routes, pois o Router compara o começo da rota somente (startsWith)*/ }
                <Route path={'/about-us'} exact component={AboutUs}/>
                <Route path={'/contact-us'} exact component={ContactUs}/>
				<Route path={'/shopping-cart'} exact component={ShoppingCart}/>
                <Route path={'/store'} exact component={Store}/>
				<Route path={'/payment'} exact component={Payment}/>
                <Route path={'/login'} exact component={Login}/>
                <Route path={'/register'} exact component={Register}/>
				<Route path={'/add-address'} exact component={AddAddress}/>
                <Route path={'/my-profile'} exact component={Userpage}/>
                <Route path={'/admin'} exact component={AdminLogin}/>
                <Route path={'/admin/edit-product/:id'} exact component={AdminEditProduct}/>
                <Route path={'/admin/edit-user/:id'} exact component={AdminEditUser}/>
                <Route path={'/'} component={NotFound}/>
            </Switch>
        </BrowserRouter>
    );
}