import React, { Component } from 'react';
import axios from 'axios';
import {listproductURL} from '../Constant';

class ListProducts extends Component{
    constructor(){
        super();
        this.state={
            loading:false,
            error:null,
            products:[],
            category:[],
            brand:[]
        };
    }
    componentDidMount(){
        this.setState({loading:true});
        axios
            .get(listproductURL)
            .then(res=>{
                this.setState({products:res.data.product,brand:res.data.brand,category:res.data.category,loading:false});
            })
            .catch(err=>{
                this.setState({error:err,loading:false})
            })
    }
    render(){
        const {products}=this.state;
        return(
            <section className=" filter py-5">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-sm-2">
                            <h4 className="font-size-24 font-baloo mb-5">FILTRER PAR</h4>
                            
                            <hr />
                        </div>
                        <div className="col-sm-10 ">
                            <div className="list_product grid-container py-5">
                                {products.map((product)=>(
                                    <div className="product">
                                        <a href="#"><img src={product.image} /></a>
                                        <div className="text-center font-baloo">
                                            <h3 className="font-baloo">{product.title}</h3>
                                            <h4 className="font-size-14 font-rale">{product.brand_name}</h4>
                                            <div className="rating font-size-12">
                                                <span><em className="fas fa-star"></em></span>
                                                <span><em className="fas fa-star"></em></span>
                                                <span><em className="fas fa-star"></em></span>
                                                <span><em className="fas fa-star"></em></span>
                                                <span><em className="fas fa-star"></em></span>
                                            </div>
                                            <div className="price">
                                            {product.discount_price ? (
                                                <>
                                                    <span className="product-discount">{product.discount_price} Dhs</span>
                                                    <span><strong>{product.price} Dhs</strong></span>
                                                </>
                                            ):
                                                <>
                                                    <span><strong>{product.price} Dhs</strong></span>
                                                </>
                                            }
                                            </div>
                                        </div>
                                    </div>
                                                                        
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default ListProducts;