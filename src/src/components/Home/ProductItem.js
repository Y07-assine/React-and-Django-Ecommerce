import React, { Component } from 'react';

const ProductItem =({product})=>{

        return(
            <div className="item py-2 mt-5">
                <div className="product font-rale ">
                    <a href="#"><img src={product.image} id="product" alt={product.slug} />
                    </a><br />
                    <div className="text-center">
                        <h3 className="product-title">{product.title} </h3>
                        <div className="product__brand" style={{height: 20.4+'px'}}>{product.brand_name}</div>
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
            </div>
        )
    }

export default ProductItem;