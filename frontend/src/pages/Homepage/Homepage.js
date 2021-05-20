import React from 'react';

import './Homepage.css';
import HomeHeader from '../components/Headers/HomeHeader';

// Images
import chickenImg from '../../images/chicken_homepage.png';

export default function Homepage() {
    return (
        <React.Fragment>
            <HomeHeader />
            <div className="container gradiantMainContainer">
                <div className="row d-flex justify-content-center py-4">
                    <div className="col">
                        <h1 className="homepageBrandName"> T A M A G O V O </h1>
                        <p className="homepageMainText">Conheça o maior mercado de ovos de todo o Brasil!</p>
                        <p className="homepageMainText">A TAMAGOVO trabalha com ovos de qualidade de todos os tipos, com grande variedade e preço bom.</p>
                        <p className="homepageMainText">Aqui você encontra ovos de galinha, de cordorna, de avestruz, ovos centenários, exóticos e até mesmo ovo em pó!</p>
                    </div>
                    <div className="col">
                        <img className="img-fluid" src={chickenImg} alt="Galinha gigante simpática" />
                    </div>
                </div>
                <div className="row">
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                </div>
            </div>
        </React.Fragment>
    );
}