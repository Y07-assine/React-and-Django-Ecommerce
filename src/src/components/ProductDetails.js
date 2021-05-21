import React,{useEffect,useState} from 'react';
import axios from 'axios';
import Svg from './ui/Svg';
import {addToCartURL} from '../Constant';
import { authAxios } from '../utils';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCart } from '../store/actions/cart';
import {Spinner} from 'react-bootstrap';

const ProductDetails=({match,refreshCart})=>{
    const [product,setproduct] =useState([]);
    const [flavor,setflavor] =useState([]);
    const [error,setError] =useState(null);
    const [loading,setLoading] = useState(false);
    
    const slug = match.params.slug
    useEffect(() => {
        console.log(flavor)
        axios
            .get(`http://localhost:8000/api/product/${slug}`)
            .then(res=>{
                setproduct(res.data);
            })
            .catch(err=>{
                setError(err);
            })
        axios
            .get(`http://localhost:8000/api/flavor/${slug}`)
            .then(res=>{
                setflavor(res.data);
            })
            .catch(err=>{
                setError(err);
            })
        
        },[]);
        function dropdown(e){
            const parent = document.getElementById(e.target.id);
            document.getElementById(parent.nextSibling.id).classList.toggle("show_content");
        }
        function qtyUp(e){
            var value = parseInt(document.getElementById('quantite').value);
            value = isNaN(value) ? 0 : value;
            if(value <9){
                value++;
            document.getElementById('quantite').value = value;
            }
            
        }
        function qtyDown(e){
            var value = parseInt(document.getElementById('quantite').value);
            value = isNaN(value) ? 0 : value;
            if(value >1){
                value--;
            document.getElementById('quantite').value = value;
            }


        }
        function handelAddToCart(slug){
            var variantflavor = document.getElementById('saveur').value;
            var quantity = parseInt(document.getElementById('quantite').value);
            setLoading(true);
            console.log(slug);
            authAxios
                .post(addToCartURL,{slug,variantflavor,quantity})
                .then(res =>{
                    console.log("test");
                    refreshCart();
                    setLoading(false);
                })
                .catch(err =>{
                    setError(err);
                    console.log(err.message);
                });
        };
    return(
        <div>
            {loading && (
                        <Spinner animation="border" role="status" variant="primary">
                        <span className="sr-only">Loading...</span>
                      </Spinner>
                    )}
            <div id="breadcrumb">
                <div>
                    <ul className="breadcrumb">
                        <li><a href="/">Accueil</a></li><li>/</li>
                        <li><a href="/products">Nutrition sportive</a></li><li>/</li>
                        <li><a href="/products/{{ object.category }}">{product.category}</a></li><li>/</li>
                        <li className="active">{product.title}</li>
                    </ul>
                </div>
            </div>
            <section className="pt-5 primary-banner">
                <div className="container">
                    <div className="row product-row">
                        <div className="col-sm-6 " >
                            <img src={product.image} alt={product.title} id="cart__product" className="img-fluid" style={{display: 'flex', justifyContent: 'center' }} />

                        </div>

                        <div className="col-sm-6 py-3  ">
                            <h5 className="font-baloo font-size-30 color-primary">{product.title}</h5>
                            <small>{product.brand_name}</small>
                            <div className="d-flex py-2">
                                <div className="rating color-primary font-size-12">
                                    <span><em className="fas fa-star"></em></span>
                                    <span><em className="fas fa-star"></em></span>
                                    <span><em className="fas fa-star"></em></span>
                                    <span><em className="fas fa-star"></em></span>
                                    <span><em className="fas fa-star"></em></span>
                                </div>
                                <a href="#" className="px-3 color-grey font-rale font-size-14">(1500) review(s)</a>
                            </div>
                            <hr className="m-0" />
                            <h5 className="font-baloo font-size-24 color-grey2 py-2">Avantages Principaux :</h5>
                            <ul className="m-0 avantages" style={{whiteSpace: 'pre-line'}} >
                               {product.details}
                            </ul>
                            <h5 className="font-baloo font-size-24 color-grey2 py-3 ">Saveurs :</h5>
                            
                            <form >
                            <select id="saveur" name="variantflavor">
                                {flavor.map((flavor)=>(
                                    <option name="flavor" value={flavor.flavor}>{flavor.flavor}</option>
                                ))}
                            </select>
                                <div className="price py-5">
                                {product.discount_price ? (
                                    <>
                                    <span className="product-old-price font-baloo font-size-20">{product.discount_price}.00 Dhs</span>
                                    <span className="font-baloo font-size-24 " id="price"><strong>{product.price}.00 Dhs</strong></span>
                                    <span className="font-baloo font-size-20 economise py-3 px-3 text-white">ÉCONOMISEZ {product.amount_saved}.00 Dhs </span>
                                    </>
                                    ):
                                    <span className="font-baloo font-size-24 " id="price"><strong>{product.price}.00 Dhs</strong></span>
                                }
                                </div>
                                <h5 className="font-baloo font-size-24 color-grey2  " id="quantité">Quantité:</h5>
                                <div className=" form-row font-size-14 font-baloo achat__spec">
                                    <div className=" col quantite_value" >
                                        <div >
                                            <input id="prod1" className="diminue_qt" onClick={qtyDown} type="button" value="-" />
                                            <input data-id="prod1" name="quantite" id="quantite" type="number" min="1" value="1" className="quantite__input" />
                                            <input id="prod1" className="augmente_qt" onClick={qtyUp} type="button" value="+" />
                                        </div>
                                    </div>
                                    <div className="col achat-product pt-3">
                                        <input className="color-primary-bg font-size-14  btn-achat-product text-white" type="button" value="Ajouter au panier" onClick={()=>{handelAddToCart(product.slug)}} /></div>
                                    </div>
                            </form>    
                                 <hr className="pt-4" />
                                <div className="details_livr">
                                    <span className="py-2">
                                        <Svg name={'truck'} size={12}  />
                                        Livraison offerte à partir de 500,00 Dhs de commande
                                    </span><br />
                                    <span className="py-2">
                                        <img src="/images/icons8-refresh.svg" alt="retour_produit" />
                                        Expédition Sous 24h
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 " id="product_spec"  >
                            <hr className="m-0 color-primary-bg" />
                            <div className="dropdown  " >
                                <button onClick={dropdown} id="drop1" className="dropbtn ">Description du produit</button>
                                <div id="myDropdown1" className="dropdown-content">
                                    <p>{product.description}</p>
                                </div>

                            </div>
                            <hr  />
                            <div className="dropdown  ">
                                <button onClick={dropdown} id="drop2" className="dropbtn ">Avantages</button>
                                <div id="myDropdown2" className="dropdown-content" >
                                   <p style={{whiteSpace: 'pre-line'}}>{product.details}</p> 
                                </div>

                            </div>
                            <hr />
                            <div className="dropdown  ">
                                <button onClick={dropdown} id="drop3" className="dropbtn ">Informations nutrititionnelles</button>
                                <div id="myDropdown3" className="dropdown-content">
                                    <img src={product.fiche_tec} alt="infos_nutri" style={{width: 100+'%'}} />
                                </div>
                            </div>
                            <hr />
                            <div className="dropdown  ">
                                <button onClick={dropdown} id="drop4" className="dropbtn ">Utilisation</button>
                                <div id="myDropdown4" className="dropdown-content">
                                    <p>{product.useCase}</p>
                                </div>
                            </div>
                            <hr />
                            <div className="dropdown  ">
                                <button onClick={dropdown} id="drop5" className="dropbtn ">Avis de clients  </button>
                                <div id="myDropdown5" className="dropdown-content">
                                    <div className="d-flex py-2">
                                        <div className="rating color-primary font-size-12">
                                            <span><em className="fas fa-star"></em></span>
                                            <span><em className="fas fa-star"></em></span>
                                            <span><em className="fas fa-star"></em></span>
                                            <span><em className="fas fa-star"></em></span>
                                            <span><em className="fas fa-star"></em></span>
                                        </div>
                                        <a href="#" className="px-3 color-grey font-rale font-size-14">(1500) review(s)</a>
                                    </div>
                                    <h3 className="font-baloo font-size-24 color-primary  ">Super goût et bonne miscibilité</h3>
                                    <p>Le goût à la vanille passe très bien avec du lait et aucun soucis de grumeaux avec cette poudre.</p>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>

        </div>
    )
}

const mapDispatchToProps = dispatch =>{
    return{
        refreshCart: ()=> dispatch(fetchCart())
    };
};

export default withRouter(
    connect(
        null,
        mapDispatchToProps
    ) (ProductDetails)
);