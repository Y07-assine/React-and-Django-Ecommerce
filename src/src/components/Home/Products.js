import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import "slick-carousel/slick/slick-theme.css";
import PropTypes from 'prop-types';

class Products extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        console.log(this.props);
    }
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
                    <h4 className="font-baloo font-size-30 text-center ">{this.props.title}</h4>
                    <hr />
                    <Slider {...settings}>
                    {this.props.list.map((product)=>{
                        <div className="item py-2 mt-5">
                        <div className="product font-rale ">
                            <a href="#"><img src={product.image.url} id="product" alt={product.slug} />
                            </a><br />
                            <div className="text-center">
                                <h3 className="product-title">{product.title} </h3>
                                <div className="product__brand" style={{height: 20.4+'px'}}>{product.brand}</div>
                                <div className="rating color-primary font-size-12">
                                    <span><em className="fas fa-star"></em></span>
                                    <span><em className="fas fa-star"></em></span>
                                    <span><em className="fas fa-star"></em></span>
                                    <span><em className="fas fa-star"></em></span>
                                    <span><em className="fas fa-star"></em></span>
                                </div>
                                <div className="price py-2">
                                    {product.discount_price ? (
                                        <>
                                        <span><strong>{product.price}0 Dhs</strong></span>
                                        </>
                                    ):
                                        <>
                                            <span className="product-discount">{product.discount_price}0 Dhs</span>
                                            <span><strong>{product.price}0 Dhs</strong></span>
                                        </>
                                    }
                                    
                                </div>
                                
                            </div>
                            </div>
                        </div>
                    })}
                    </Slider>
                    <button type="submit" class="btn color-primary-bg font-size-20  btn-achat-tout text-center text-white"><a href="#"> Voir tout </a></button>
                    </div>
                    </section>
            </div>
        )
    }
}


export default Products;