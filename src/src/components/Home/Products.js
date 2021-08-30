import React, {useEffect,useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import {productURL} from '../../Constant';
import ProductItem from './ProductItem';
import {Spinner} from 'react-bootstrap';
import {Link} from 'react-router-dom';


const Products =()=>{
    const [products, setproducts] = useState([]);
    const [loading, setloading] = useState(false);
    const [pack, setpack] = useState([]);
    const [latest, setlatest] = useState([]);
    const [error, seterror] = useState(null);

    useEffect(()=>{
        setloading(true);
        axios
            .get(productURL)
            .then(res=>{
                setproducts(res.data.product);
                setpack(res.data.pack);
                setlatest(res.data.latest_product);
                setloading(false);
            })
            .catch(err=>{
                seterror(err);
                setloading(true);
            })
    },[]);
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
                slidesToShow: 2,
                slidesToScroll: 2
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
                        <Link to={`/product/${product.slug}`}><ProductItem product={product} key={product.id} /></Link>
                    ))}
                </Slider>
                <button type="submit" class="btn color-primary-bg font-size-20  btn-achat-tout text-center text-white"><Link to={`/products/categorie/nutrition-sportive`}>Voir tout </Link></button>
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
                            <Link to={`/product/${product.slug}`}><ProductItem product={product} key={product.id} /></Link>
                        ))}
                    </Slider>
                    <button type="submit" class="btn color-primary-bg font-size-20  btn-achat-tout text-center text-white"><Link to={`/products/categorie/nutrition-sportive`}>Voir tout </Link></button>
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
                            <Link to={`/product/${product.slug}`}><ProductItem product={product} key={product.id} /></Link>
                        ))}
                    </Slider>
                    <button type="submit" class="btn color-primary-bg font-size-20  btn-achat-tout text-center text-white"><Link to={`/products/categorie/nutrition-sportive`}>Voir tout </Link></button>
                </div>
            </section>
        </div>
    )
}



export default Products;