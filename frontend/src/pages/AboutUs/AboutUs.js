import React from 'react';

import HomeHeader from '../components/Headers/HomeHeader';
import Footer from '../components/Footer/Footer';

import  './AboutUs.css'

import AboutUsImg from '../../images/about_us.svg';

export default function AboutUs() {
    return (
        <div>
            <HomeHeader />
            <div className="container pt-4">
                <div className="row py-4" >
                    <div className="col-sm-12 col-md-6" style={{ 'fontSize' : '24px'}}>
                        <h1 className="aboutUsTitle pb-4"> Sobre Nós </h1>
                        <p> Somos uma empresa que se originou no interior de São Paulo,na cidade de Basto, a capital do Ovo,que conta com uma rica história que remete ao início da colonização japonesa no Brasil! </p>
                        <p> Exemplo no ramo da avicultura,contamos com a parceria de diversas granjas consolidadas no mercado com uma história que é continuada a cada geração. </p>
                        <p> Possuímos a disposição ovos das mais diversas categorias e da melhor qualidade disponível no mercado,abrangendo um grande leque de consumidores. </p>
                        <p> Há mais de 15 anos no mercado,garantimos exelência e prontidão na compra e na manutenção de um bom relacionamento com nosssos clientes. </p>
                    </div>
                    <div className="col-sm-12 col-md-6 pt-5">
                        <img className="img-fluid pt-5" alt="Ilustração indicando o sobre nós" src={AboutUsImg} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}