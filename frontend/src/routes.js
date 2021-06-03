import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Homepage from './pages/Homepage/Homepage';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
import Store from './pages/Store/Store';
import AboutUs from './pages/AboutUs/AboutUs';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={`/`} exact component={ Homepage }/> {/* sem o exact, o router não irá diferenciar essa das outras Routes, pois o Router compara o começo da rota somente (startsWith)*/ }
                <Route path={'/about-us'} exact component={AboutUs}/>
				<Route path={'/shopping-cart'} exact component={ShoppingCart}/>
                <Route path={'/store'} exact component={Store}/>
            </Switch>
        </BrowserRouter>
    );
}