import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import "slick-carousel/slick/slick-theme.css";
import item from '../../img/item12.jpg';

class Products extends Component{
    render(){
        const settings = {
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [
                {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
                },
                {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
                },
                {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
                }
                
            ]
        }
        return(
            <div>
                <section id="slick-product">
                <div className="container py-5 mt-5">
                    <h4 className="font-baloo font-size-30 text-center ">Nouveaux Produits</h4>
                    <hr />
                    <Slider {...settings}>
                    <div className="item py-2 mt-5">
                        <div className="product font-rale ">
                            <a href="#"><img src={item} id="product" alt="product" />
                            </a><br />
                            <div className="text-center">
                                <h3 className="product-title">WHey Gold Standard </h3>
                                <div className="product__brand" style={{height: 20.4+'px'}}>Optimum nutrition</div>
                                <div className="rating color-primary font-size-12">
                                    <span><em className="fas fa-star"></em></span>
                                    <span><em className="fas fa-star"></em></span>
                                    <span><em className="fas fa-star"></em></span>
                                    <span><em className="fas fa-star"></em></span>
                                    <span><em className="fas fa-star"></em></span>
                                </div>
                                <div className="price py-2">

                                    <span className="product-discount">650,00 Dhs</span>
                                    <span><strong>700,00 Dhs</strong></span>
                                </div>
                                
                            </div>
                         </div>
                    </div>
                    <div className="item py-2 mt-5">
                        <div className="product font-rale ">
                            <a href="#"><img src={item} id="product" alt="product" />
                            </a><br />
                            <div className="text-center">
                                <h3 className="product-title">WHey Gold Standard </h3>
                                <div className="product__brand" style={{height: 20.4+'px'}}>Optimum nutrition</div>
                                <div className="rating color-primary font-size-12">
                                    <span><em className="fas fa-star"></em></span>
                                    <span><em className="fas fa-star"></em></span>
                                    <span><em className="fas fa-star"></em></span>
                                    <span><em className="fas fa-star"></em></span>
                                    <span><em className="fas fa-star"></em></span>
                                </div>
                                <div className="price py-2">

                                    <span className="product-discount">650,00 Dhs</span>
                                    <span><strong>700,00 Dhs</strong></span>
                                </div>
                                
                            </div>
                         </div>
                    </div>
                    <div className="item py-2 mt-5">
                        <div className="product font-rale ">
                            <a href="#"><img src={item} id="product" alt="product" />
                            </a><br />
                            <div className="text-center">
                                <h3 className="product-title">WHey Gold Standard </h3>
                                <div className="product__brand" style={{height: 20.4+'px'}}>Optimum nutrition</div>
                                <div className="rating color-primary font-size-12">
                                    <span><em className="fas fa-star"></em></span>
                                    <span><em className="fas fa-star"></em></span>
                                    <span><em className="fas fa-star"></em></span>
                                    <span><em className="fas fa-star"></em></span>
                                    <span><em className="fas fa-star"></em></span>
                                </div>
                                <div className="price py-2">

                                    <span className="product-discount">650,00 Dhs</span>
                                    <span><strong>700,00 Dhs</strong></span>
                                </div>
                                
                            </div>
                         </div>
                    </div>
                    <div className="item py-2 mt-5">
                        <div className="product font-rale ">
                            <a href="#"><img src={item} id="product" alt="product" />
                            </a><br />
                            <div className="text-center">
                                <h3 className="product-title">WHey Gold Standard </h3>
                                <div className="product__brand" style={{height: 20.4+'px'}}>Optimum nutrition</div>
                                <div className="rating color-primary font-size-12">
                                    <span><em className="fas fa-star"></em></span>
                                    <span><em className="fas fa-star"></em></span>
                                    <span><em className="fas fa-star"></em></span>
                                    <span><em className="fas fa-star"></em></span>
                                    <span><em className="fas fa-star"></em></span>
                                </div>
                                <div className="price py-2">

                                    <span className="product-discount">650,00 Dhs</span>
                                    <span><strong>700,00 Dhs</strong></span>
                                </div>
                                
                            </div>
                         </div>
                    </div>
                    <div className="item py-2 mt-5">
                        <div className="product font-rale ">
                            <a href="#"><img src={item} id="product" alt="product" />
                            </a><br />
                            <div className="text-center">
                                <h3 className="product-title">WHey Gold Standard </h3>
                                <div className="product__brand" style={{height: 20.4+'px'}}>Optimum nutrition</div>
                                <div className="rating color-primary font-size-12">
                                    <span><em className="fas fa-star"></em></span>
                                    <span><em className="fas fa-star"></em></span>
                                    <span><em className="fas fa-star"></em></span>
                                    <span><em className="fas fa-star"></em></span>
                                    <span><em className="fas fa-star"></em></span>
                                </div>
                                <div className="price py-2">

                                    <span className="product-discount">650,00 Dhs</span>
                                    <span><strong>700,00 Dhs</strong></span>
                                </div>
                                
                            </div>
                         </div>
                    </div>
                    </Slider>
                    <button type="submit" class="btn color-primary-bg font-size-20  btn-achat-tout text-center text-white"><a href="#"> Voir tout </a></button>
                    </div>
                    </section>
            </div>
        )
    }
}

export default Products;