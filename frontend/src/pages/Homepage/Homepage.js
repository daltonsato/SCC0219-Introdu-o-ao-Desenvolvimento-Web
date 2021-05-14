import React from 'react';

import './Homepage.css';
import HomeHeader from '../components/Headers/HomeHeader'

export default function Homepage() {
    return (
        <React.Fragment>
            <HomeHeader />
            <h1> Hello World </h1>
        </React.Fragment>
    );
}