import React from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';

import './HomeHeader.css';

// Images
import EggLogo from '../../../images/egg_logo.png';
import ShoppingCart from '../../../images/shopping_cart_home.svg';
import MyProfileImg from '../../../images/my_profile_icon.svg';

class HomeHeader extends React.Component {
    render() {
        const activeSessions = [ "280E8410C4A05326EB815B577B05574FDFB4AE016C399ACF1B02CFE5C59D59FE" ]; // this will be treated in the backend
        
        let isLoggedComponent;

        const cookies = new Cookies();
        let sessionCookie = cookies.get('SESSION');

        if (activeSessions.includes(sessionCookie)) {
            isLoggedComponent = (
                <li className="nav-item d-flex">
                    <Link className="nav-link navBarLinkLoginImg d-flex align-items-center justify-content-center py-1 px-1 mx-1" to="/shopping-cart"> 
                        <img className="img-fluid w-25" src={ShoppingCart} alt="Carrinho de Compras" />
                    </Link>
                    <Link className="nav-link navBarLinkLoginImg d-flex align-items-center justify-content-center py-1 px-1 mx-1" to="/my-profile"> 
                        <img className="img-fluid w-25" src={MyProfileImg} alt="Ícone da página de meu perfil" />
                    </Link>
                </li> );
        }
        else {
            console.log("not in active sessions");
            isLoggedComponent = (
                <li className="nav-item">
                    <Link className="nav-link navBarLinkLogin py-1 px-2 mx-2" to="/login">Login / Criar conta</Link>
                </li>
            );
        }

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
                            <Link className="nav-link navBarLink py-1 px-2 mx-2" to="/contact-us">Contato</Link>
                        </li>
                        {isLoggedComponent}
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