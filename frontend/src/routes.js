import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Homepage from './pages/Homepage/Homepage';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
import Store from './pages/Store/Store';
import AboutUs from './pages/AboutUs/AboutUs';
import ContactUs from './pages/ContactUs/ContactUs';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import NotFound from './pages/components/NotFound/NotFound'
import AdminLogin from './pages/AdminLogin/AdminLogin';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={`/`} exact component={ Homepage }/> {/* sem o exact, o router não irá diferenciar essa das outras Routes, pois o Router compara o começo da rota somente (startsWith)*/ }
                <Route path={'/about-us'} exact component={AboutUs}/>
                <Route path={'/contact-us'} exact component={ContactUs}/>
				<Route path={'/shopping-cart'} exact component={ShoppingCart}/>
                <Route path={'/store'} exact component={Store}/>
                <Route path={'/login'} exact component={Login}/>
                <Route path={'/register'} exact component={Register}/>
                <Route path={'/admin'} exact component={AdminLogin}/>
                <Route path={'/'} component={NotFound}/>
            </Switch>
        </BrowserRouter>
    );
}