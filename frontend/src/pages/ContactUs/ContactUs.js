import React from 'react';

import HomeHeader from '../components/Headers/HomeHeader';
import Footer from '../components/Footer/Footer';

import  './ContactUs.css'

import Person1 from '../../images/person1_contactImg.svg'
import Person2 from '../../images/person2_contactImg.svg'
import Person3 from '../../images/person3_contactImg.svg'
import Chicken from '../../images/small_chicken.svg';

export default function ContactUs() {
    return (
        <div>
            <HomeHeader />
            <div className="container">
                <div className="row text-center pt-4 pb-5">
                    <h1 className="contactUsTitle"> Contato </h1>
                </div>
                <div className="row pt-5 pb-5">
                    <div className="col d-flex flex-column align-items-center justify-content-center">
                        <div className="contactImgFrame">
                            <img className="img-fluid p-3" src={Person1} alt="Person 1 from Tamagovo that you can contact" />
                        </div>
                        <div className="contactInfo text-center py-5 px-4 m-3">
                            <b> Rodriggo Tamago </b> <br />
                            Telefone: (12) 3456-7890 <br />
                            Email: tamagoRodrigo@tamagovo.com.br <br />
                        </div>
                    </div>
                    <div className="col d-flex flex-column align-items-center justify-content-center">
                        <div className="contactImgFrame">
                            <img className="img-fluid p-3" src={Person2} alt="Person 1 from Tamagovo that you can contact" />
                        </div>
                        <div className="contactInfo text-center py-5 px-4 m-3">
                            <b> Aaaa Bcccc </b> <br />
                            Telefone: (12) 3456-7890 <br />
                            Email: Ab@tamagovo.com.br <br />
                        </div>
                    </div>
                    <div className="col d-flex flex-column align-items-center justify-content-center">
                        <div className="contactImgFrame">
                            <img className="img-fluid p-3" src={Person3} alt="Person 1 from Tamagovo that you can contact" />
                        </div>
                        <div className="contactInfo text-center py-5 px-4 m-3">
                            <b> Aaaa Bcccc </b> <br />
                            Telefone: (12) 3456-7890 <br />
                            Email: Ab@tamagovo.com.br <br />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col m-3 d-flex align-items-end justify-content-center">
                        <img className="img-fluid px-4" src={Chicken} alt="Small chicken drawing 1" />
                        <div className="d-flex flex-column align-items-center justify-content-center">
                            <p> tamagovo@tamagovo.com.br</p>
                            <p> (12) 3456-7890 </p>
                        </div>
                    </div>
                </div>
            </div> 
            <Footer />
        </div>
    );
}