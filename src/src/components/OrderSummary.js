import React,{useEffect,useState} from 'react';
import { connect } from "react-redux";
import { fetchCart } from '../store/actions/cart';
import { withRouter } from "react-router-dom";
import { removeFormCartURL,addToCartURL,updateOrderProductURL } from '../Constant';
import { authAxios } from '../utils';

const OrderSummary = ({isAuthenticated,cart,fetchCart})=>{

    useEffect(() => {
        if(isAuthenticated){
            fetchCart();
        }
   
    }, []);

    function handelRemoveFromCart(e){
        var id = e.target.id;
        authAxios
            .delete(removeFormCartURL(id))
            .then(res =>{
                fetchCart();
            })
            .catch(err =>{
                console.log(err.message);
            });
    }
    function handelAddProduct(e){
        var orderProduct=cart.order_products.filter(order=> order.id == e.target.id);
        var slug = orderProduct[0].product.slug;
        var variantflavor = orderProduct[0].flavor;
        var quantity=1;
        authAxios
            .post(addToCartURL,{slug,variantflavor,quantity})
            .then(res =>{
                fetchCart();
            })
            .catch(err =>{
                console.log(err.message);
            });
    }
    function handelUpdateOrderProduct(e){
        var orderProduct=cart.order_products.filter(order=> order.id == e.target.id);
        var slug = orderProduct[0].product.slug;
        var variantflavor = orderProduct[0].flavor;
        authAxios
            .post(updateOrderProductURL,{slug,variantflavor})
            .then(res =>{
                fetchCart();
            })
            .catch(err =>{
                console.log(err.message);
            });
    }
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
                    {cart!==null && (
                        <>
                        <div className="col-sm-9 py-5">
                                <hr className="m-0 color-primary-bg" />
                                {cart.order_products.map(order=>(
                                <>
                                <div className="row py-5 " key={order.id}>
                                    <div className="col-sm2">
                                        <img src={order.product.image} alt={order.product.slug} id="cart__product" className="img-fluid" style={{display: 'flex', justifyContent: 'center' ,height: 120+'px', width: 120+'px' }}/>
                                    </div>
                                    <div className="col-sm-8">
                                        <h5 className="font-baloo font-size-24 color-primary"></h5>
                                        <small></small>
                                        <h5 className=" font-size-16 color-primary mt-2">Flavor : <span className="color-grey">{order.flavor} </span></h5>
                                        <div className=" quantite_value">
                                            <div >Quantité :
                                            <input id="prod1" className="diminue_qt" type="button" value="-" onClick={handelUpdateOrderProduct} id={order.id} />
                                            <input data-id="prod1" name="quantite" id="quantite" type="number" min="1" value={order.quantity} className="quantite__input" />
                                            <input id="prod1" className="augmente_qt"  type="button" value="+" onClick={handelAddProduct} id={order.id} />
                                            </div>
                                        </div>
                                        <span className="font-baloo font-size-20 mt-3" id="price">Prix : <strong>
                                        {order.final_price}.00
                                        </strong></span>
                                        <div className="d-flex pt-2">                              
                                            <span className="btn font-rale text-danger font-size-16 px-4 " id={order.id}  onClick={handelRemoveFromCart}>Supprimer</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-2 text-right">
                                        <span className="font-baloo font-size-20 " id="price"><strong>
                                        
                                        </strong></span><br />
                                        
                                    </div>
                                </div>
                                </>
                        ))}
                               
                               
                        
                        </div>
                        <div className="col-sm-3 py-5">
                            <div className=" border" style={{display: 'block'}}>
                                <div className=" d-flex total py-5">
                                    <h6 className="font-baloo font-size-20 color-primary mt-1 ml-5 ">APERÇU</h6>
                                    <h6 className="font-baloo font-size-20 mt-1 mr-5 ">{cart.nomber_article} Articles</h6>

                                </div>
                                <div className=" d-flex mt-2 total py-5">
                                    <h6 className="font-baloo font-size-16 color-primary mt-1 ml-5 ">Sous-total</h6>
                                    <span className="font-baloo font-size-16 mt-1 mr-5" id="price"><strong>{cart.total}.00 Dhs</strong></span>
                                </div>
                                <div className=" d-flex  total py-5">
                                    <h6 className="font-baloo font-size-16 color-primary mt-1 ml-5 ">Livraison</h6>
                                    <span className="font-baloo font-size-16 mt-1 mr-5 text-danger" id="price"><strong>gratuit</strong></span>
                                </div><hr />
                                <div className=" d-flex total py-5">
                                    <h6 className="font-baloo font-size-16 color-primary mt-1 ml-5 ">Total TTC</h6>
                                    <span className="font-baloo font-size-16 mt-1 mr-5" id="price"><strong>{cart.total}.00 Dhs</strong></span>
                                </div>
                                <button className="color-primary-bg font-size-14  btn-paiement text-white font-baloo" style={{width:100+'%'}}><a href="{% url 'core:checkout' %}"> Procéder au paiement</a></button>
                            </div>
                        </div>
                        </>
                        )}
                    </div>
                    {cart ===null && 
                                <h3 className="mt-3 px-5 font-baloo font-size-24"> Votre panier est vide ! </h3>
                               }

                </div>

</section>

    )
}

const mapStateToProps = state =>{
    return{
      isAuthenticated: state.auth.token !== null,
      cart: state.cart.shoppingCart
    }
  }

const mapDispatchToProps = dispatch =>{
    return{
        fetchCart: ()=> dispatch(fetchCart())
    };
};

export default connect(
        mapStateToProps,
        mapDispatchToProps) (OrderSummary);