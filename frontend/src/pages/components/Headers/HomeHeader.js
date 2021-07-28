// Header used in almost all pages

import React from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';

// CSS
import './HomeHeader.css';

// Images
import EggLogo from '../../../images/egg_logo.png';
import ShoppingCart from '../../../images/shopping_cart_home.svg';
import MyProfileImg from '../../../images/my_profile_icon.svg';
class HomeHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogged: false
        };
    }

    componentDidMount() {
        const cookies = new Cookies();
        let sessionCookie;

        if (cookies.get('ADMIN_SESSION')) {
            sessionCookie = cookies.get('ADMIN_SESSION'); // session cookie from the user (if they have one)
        }
        else {
            sessionCookie = cookies.get('SESSION'); // session cookie from the user (if they have one)
        }   

        if (sessionCookie) {
            console.log(window.BACKEND_URL);
            fetch(window.BACKEND_URL + '/user/validate', {
                method: 'POST',
                headers: {
                    'x-access-token': sessionCookie
                }
            })
            .then((res) => res.json())
            .then((result) => {
                this.setState({
                    isLogged: true, 
                });
            });
        }
    }

    render() {
        const { isLogged } = this.state;

        let isLoggedComponent; // components that changes based on wether the user is logged or not (shows some different info)

        if (isLogged) { // if user is logged in...
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
        else { // user is not logged in
            isLoggedComponent = (
                <li className="nav-item">
                    <Link className="nav-link navBarLinkLogin py-1 px-2 mx-2" to="/login">Login / Criar conta</Link>
                </li>
            );
        }

        return (
            <nav className="navbar navbar-default navbar-expand-lg homepageHeader sticky-top py-2 px-4"> {/*navbar-expand-lg */}
            {/* COLLAPSE IS NOT WORKING!! CAN'T FIND A WAY TO FIX IT...
            <nav className="navbar navbar-inverse bg-inverse navbar-toggleable-sm fixed-top"></nav> */}
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