import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import {productURL} from '../../Constant';
import ProductItem from './ProductItem';
import {Spinner} from 'react-bootstrap';


class Products extends Component{
    constructor(){
        super();
        this.state={
            products:[],
            loading: false,
            pack:[],
            latest:[],
            error: null
        };
    }
    
    componentDidMount(){
        this.setState({loading:true});
        axios
            .get(productURL)
            .then(res=>{
                this.setState({products:res.data.product,pack:res.data.pack,latest:res.data.latest_product,loading:false});
            })
            .catch(err=>{
                this.setState({error:err,loading:false})
            })
    }
    render(){
        const {products,loading,error,pack,latest} = this.state;
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
                    {loading && (
                        <Spinner animation="border" role="status" variant="primary">
                        <span className="sr-only">Loading...</span>
                      </Spinner>
                    )}
                    <Slider {...settings}>
                        {latest.map((product)=>(
                            <ProductItem product={product} key={product.id}/>
                        ))}
                    </Slider>
                    <button type="submit" class="btn color-primary-bg font-size-20  btn-achat-tout text-center text-white"><a href="#"> Voir tout </a></button>
                    </div>
                </section>
                <section id="slick-product">
                    <div className="container py-5 mt-5">
                        <h4 className="font-baloo font-size-30 text-center ">Meilleures Ventes</h4>
                        <hr />
                        {loading && (
                        <Spinner animation="border" role="status" variant="primary">
                        <span className="sr-only">Loading...</span>
                        </Spinner>
                        )}
                        <Slider {...settings}>
                            {products.map((product)=>(
                                <ProductItem product={product} key={product.id}/>
                            ))}
                        </Slider>
                        <button type="submit" class="btn color-primary-bg font-size-20  btn-achat-tout text-center text-white"><a href="#"> Voir tout </a></button>
                    </div>
                </section>
                <section id="slick-product">
                    <div className="container py-5 mt-5">
                        <h4 className="font-baloo font-size-30 text-center ">Nos Packs</h4>
                        <hr />
                        {loading && (
                        <Spinner animation="border" role="status" variant="primary">
                        <span className="sr-only">Loading...</span>
                        </Spinner>
                        )}
                        <Slider {...settings}>
                            {pack.map((product)=>(
                                <ProductItem product={product} key={product.id} />
                            ))}
                        </Slider>
                        <button type="submit" class="btn color-primary-bg font-size-20  btn-achat-tout text-center text-white"><a href="#"> Voir tout </a></button>
                    </div>
                </section>
            </div>
        )
    }
}


export default Products;