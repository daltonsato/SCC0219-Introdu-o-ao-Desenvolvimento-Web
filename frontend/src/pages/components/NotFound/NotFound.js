import React from 'react';

import HomeHeader from '../Headers/HomeHeader'

export default function NotFound() {
    return (
        <div className="h-100" style={{'backgroundColor' : '#FFCC65'}}>
            <HomeHeader />
            <h1 className="text-center pt-5"> 404 - PÁGINA NÃO ENCONTRADA </h1>
        </div>
    );
}