import React,{useEffect,useState} from 'react';
import { connect } from "react-redux";
import { fetchCart } from '../store/actions/cart';
import { withRouter } from "react-router-dom";
const OrderSummary = (isAuthenticated,cart,refreshCart,fetchCart)=>{

    useEffect(() => {
        if (isAuthenticated){
            fetchCart();
        }
        console.log(cart.shoppingCart.order_products);
    }, [])

    return(
            <section className="py-5 primary-banner">
                <div className="container">
                    <div className="panier_achat ">
                        <h5 className="font-baloo color-primary font-size-30"><strong>Votre panier d'achat</strong> </h5>
                        <div className="btn-panier">
                            <button className=" font-size-14  btn-back-to-achat font-baloo"><a href="\" className="text-dark">Continuer mes achats</a></button>
                            <button className="color-primary-bg font-size-14  btn-paiement text-white font-baloo"><a href="#"> Procéder au paiement</a></button>
                        </div>
                    </div>

                    <div className="row">

                        <div className="col-sm-9 py-5">
                                <>
                                <hr className="m-0 color-primary-bg" />
                                <div className="row py-5 ">
                                    <div className="col-sm2">
                                        <img src="#" alt="product" id="cart__product" className="img-fluid" style={{display: 'flex', justifyContent: 'center' ,height: 120+'px', width: 120+'px' }}/>
                                    </div>
                                    <div className="col-sm-8">
                                        <h5 className="font-baloo font-size-24 color-primary"></h5>
                                        <small></small>
                                        <h5 className=" font-size-16 color-primary mt-2">Flavor : <span className="color-grey"> </span></h5>
                                        <div className=" quantite_value">
                                            <div ><br />Quantité :
                                                <button data-id="prod1" className="diminue_qt"><a href="{% url 'core:remove_single_product_from_cart' slug=order_product.product.slug  flavor=order_product.flavor%}">-</a></button>
                                                <input data-id="prod1" id="quantite" type="number" min="1" value="{{ order_product.quantity }}" className="quantite__input" />
                                                <button data-id="prod1" className="augmente_qt"  ><a href="{% url 'core:add_single_product_to_cart' slug=order_product.product.slug  flavor=order_product.flavor%}">+</a></button>
                                            </div>
                                        </div>
                                        <span className="font-baloo font-size-20 mt-3" id="price">Prix : <strong>
                                        
                                        </strong></span>
                                        <div className="d-flex pt-2">                              
                                            <a href="{{ order_product.product.get_remove_from_cart_url }}" className="btn font-rale text-danger font-size-16 px-4 ">Supprimer</a>
                                        </div>
                                    </div>
                                    <div className="col-sm-2 text-right">
                                        <span className="font-baloo font-size-20 " id="price"><strong>
                                        
                                        </strong></span><br />
                                        
                                    </div>
                                </div>
                                
                                <h3 className="mt-3 px-5 font-baloo font-size-24"> Votre panier est vide ! </h3>
                                </>

                        </div>

                        <div className="col-sm-3 py-5">
                            <div className=" border" style={{display: 'block'}}>
                                <div className=" d-flex total py-5">
                                    <h6 className="font-baloo font-size-20 color-primary mt-1 ml-5 ">APERÇU</h6>
                                    <h6 className="font-baloo font-size-20 mt-1 mr-5 "> Articles</h6>

                                </div>
                                <div className=" d-flex mt-2 total py-5">
                                    <h6 className="font-baloo font-size-16 color-primary mt-1 ml-5 ">Sous-total</h6>
                                    <span className="font-baloo font-size-16 mt-1 mr-5" id="price"><strong>0 Dhs</strong></span>
                                </div>
                                <div className=" d-flex  total py-5">
                                    <h6 className="font-baloo font-size-16 color-primary mt-1 ml-5 ">Livraison</h6>
                                    <span className="font-baloo font-size-16 mt-1 mr-5 text-danger" id="price"><strong>gratuit</strong></span>
                                </div><hr />
                                <div className=" d-flex total py-5">
                                    <h6 className="font-baloo font-size-16 color-primary mt-1 ml-5 ">Total TTC</h6>
                                    <span className="font-baloo font-size-16 mt-1 mr-5" id="price"><strong>0 Dhs</strong></span>
                                </div>
                                <button className="color-primary-bg font-size-14  btn-paiement text-white font-baloo" style={{width:100+'%'}}><a href="{% url 'core:checkout' %}"> Procéder au paiement</a></button>
                            </div>
                        </div>
                    </div>


                </div>

</section>

    )
}

const mapStateToProps = state =>{
    return{
      isAuthenticated: state.auth.token !== null,
      cart: state.cart.shoppingCart,
    }
  }

const mapDispatchToProps = dispatch =>{
    return{
        refreshCart: ()=> dispatch(fetchCart()),
        fetchCart:()=>dispatch(fetchCart())
    };
};

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ) (OrderSummary)
);