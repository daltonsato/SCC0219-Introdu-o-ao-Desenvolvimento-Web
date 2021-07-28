import React from 'react';
import './App.css';

import Routes from './routes';

const dotenv = require('dotenv');
dotenv.config();


function App() {
  return (
    <React.Fragment>
      <Routes />
    </React.Fragment>
  );
}

export default App;

// https://blog.logrocket.com/how-to-use-bootstrap-with-react-a354715d1121/