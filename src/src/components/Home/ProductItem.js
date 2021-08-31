import React, { Component } from 'react';

const ProductItem =({product})=>{
        return(
            <div className="item py-2">
                <div className="product ">
                    <a href="#"><img src={product.image} id="product" alt={product.slug} />
                    </a><br />
                    <div className="text-center product__infos">
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
                                    <div><strong>{product.price}.00 Dhs</strong></div>
                                    <div className="product-discount">{product.discount_price}.00 Dhs</div>
                                </>
                            ):
                                <>
                                    <span><strong>{product.price}.00 Dhs</strong></span>
                                </>
                            }
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }

export default ProductItem;