import React from 'react';
import { Link } from 'react-router-dom';
import './HomeHeader.css';

// Images
import EggLogo from '../../../images/egg_logo_example.png';

class HomeHeader extends React.Component {
    render() {
        return (
            <div className="navbar navbar-expand-lg homepageHeader sticky-top py-2 px-4">
                <Link className="navbar-brand d-flex justify-content-center align-items-center" to="/"><img className="img-fluid headerLogo" src={EggLogo} alt="Egg Logo"/>
                    <span className="headerBrandName p-2"> T A M A G O V O </span>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex align-items-center justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto d-flex justify-content-center">
                        <li class="nav-item active">
                            <Link className="nav-link navBarLink p-2 mx-2" to="/">Produtos</Link>
                        </li>
                        <li class="nav-item active">
                            <Link className="nav-link navBarLink p-2 mx-2" to="/">Sobre nós</Link>
                        </li>
                        <li class="nav-item active">
                            <Link className="nav-link navBarLink p-2 mx-2" to="/">Contato</Link>
                        </li>
                        <li class="nav-item active">
                            <Link className="nav-link navBarLinkSpecial p-2 mx-2" to="/">Compre agora</Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default HomeHeader;