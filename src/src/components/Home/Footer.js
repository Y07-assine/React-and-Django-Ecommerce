import React, { Component } from 'react';
import Svg from '../ui/Svg';

class Footer extends Component{
    render(){
        return(
            <footer className="footer">
                <div className="contianer">
                    <div className="footer__top">
                        <div className="footer-top__box">
                            <h3>SERVICE CLIENT</h3>
                            <a href="#">Service client</a>
                            <a href="#">Livraison</a>
                            <a href="#">Moyens de paiement</a>
                            <a href="#">Échange et retours</a>
                            <a href="#">Contactez-nous</a>
                        </div>
                        <div className="footer-top__box">
                            <h3>A PROPOS DE NOUS</h3>
                            <a href="#">About Universal Nutrition </a>
                            <a href="#">Nos marques</a>
                            <a href="#">Traitement des cookies</a>
                            <a href="#">Politique de confidentialité</a>
                            <a href="#">Conditions générales de vente</a>
                        </div>
                        <div className="footer-top__box">
                            <h3>FOLLOW US</h3>
                            <a href="#">Instagram</a>
                            <a href="#">Facebook</a>
                            <a href="#">Blog</a>
                            <a href="#">Newsletter</a>
                        </div>
                        <div className="footer-top__box">
                            <h3>CONTACT US</h3>
                            <div>
                        <span>
                        <Svg name={"location"}  size={40}/>
                        </span>
                                00 Bourgogne, Casablanca, Morocco
                            </div>
                            <div>
                        <span>
                        <Svg name={"envelop"}  size={40}/>
                        </span>
                                universal.nutrition@gmail.com
                            </div>
                            <div>
                        <span>
                        <Svg name={"phone"} size={40} />
                        </span>
                                0661616161
                            </div>
                            <div>
                        <span>
                        <Svg name={"paperplane"}  size={40}/>
                        </span>
                                Casablanca, Morocco
                            </div>
                        </div>

                    </div>
                    <div className="text-center text-white" style={{marginTop: 2+'rem'}}>Copyrights 2021. By EL MERZOUKI Yassine</div>
                </div>

   
        </footer>
        )
    }
}

export default Footer;