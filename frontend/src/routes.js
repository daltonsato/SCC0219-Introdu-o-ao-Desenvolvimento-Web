import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Homepage from './pages/Homepage/Homepage';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={`/`} exact component={ Homepage }/> {/* sem o exact, o router não irá diferenciar essa das outras Routes, pois o Router compara o começo da rota somente (startsWith)*/ }
            </Switch>
        </BrowserRouter>
    );
}