import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';

import EggLogo from '../../../images/egg_logo.png'

export default function Footer() {
    return (
        <div className="d-flex pb-3 pt-5" style={{ 'background' : '#FEC300'}}>
            <div className="col">
                <Link className="navbar-brand d-flex justify-content-center align-items-center" to="/"><img className="img-fluid footerLogo" src={EggLogo} alt="Egg Logo"/>
                    <span className="footerBrandName d-none d-sm-inline p-2 "> TAMAGOVO </span>
                </Link>
            </div>
            <div className="col d-flex justify-content-center align-items-stretch">
                <div className="d-flex align-items-end justify-content-center">
                    <span className="aboutUsAllRights d-none d-sm-none d-md-none d-lg-inline"> Todos os direitos reservados </span>
                </div>
            </div>
            <div className="aboutUsContatInfo col d-flex flex-column align-itens-center justify-content-center text-end px-4">
            Facebook: loja_tamagovo <br />
            Insta: @tamagovo <br />
            SAC: 123 456 789 <br />
            Email: contato@tamagovo.com.br <br />
            </div>
        </div>
    );
}