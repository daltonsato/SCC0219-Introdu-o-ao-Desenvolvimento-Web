import React from 'react';
import { Link } from 'react-router-dom';
import './HomeHeader.css';

// Images
import EggLogo from '../../../images/egg_logo.png';

class HomeHeader extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-default navbar-expand-lg homepageHeader sticky-top py-2 px-4"> {/*navbar-expand-lg */}
            {/* <nav className="navbar navbar-inverse bg-inverse navbar-toggleable-sm fixed-top"></nav> */}
                <Link className="navbar-brand d-flex justify-content-center align-items-center" to="/"><img className="img-fluid headerLogo" src={EggLogo} alt="Egg Logo"/>
                    <span className="headerBrandName p-2"> TAMAGOVO </span>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse navbar-right align-items-center justify-content-end" id="navbarNav">
                    <ul className="navbar-nav mr-auto d-flex justify-content-center">
                        <li className="nav-item">
                            <Link className="nav-link navBarLink py-1 px-2 mx-2" to="/">Produtos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link navBarLink py-1 px-2 mx-2" to="/about-us">Sobre nós</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link navBarLink py-1 px-2 mx-2" to="/">Contato</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link navBarLinkLogin py-1 px-2 mx-2" to="/">Login / Criar conta</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link navBarLinkSpecial py-1 px-3 mx-2" to="/store"> Comprar </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default HomeHeader;