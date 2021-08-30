import React, {useEffect,useState } from 'react';
import axios from 'axios';
import {listproductURL} from '../Constant';
import 'semantic-ui-css/semantic.min.css';
import { Select } from 'semantic-ui-react';
import ProductItem from './Home/ProductItem';
import Filter from './Filter';
import {Spinner} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ListProducts =(props)=>{
    const [products, setproducts] = useState([]);
    const [filtredProduct, setfiltredProduct] = useState([]);
    const [loading, setloading] = useState(false);
    const [pack, setpack] = useState([]);
    const [latest, setlatest] = useState([]);
    const [error, seterror] = useState(null);
    const [category, setcategory] = useState([]);
    const [count, setcount] = useState(0);
    const [sort, setsort] = useState('Pertinence');
    const [Filtercategory, setFiltercategory] = useState(props.match.params.category);
    const [brand, setbrand] = useState([]);

    useEffect(()=>{
        setloading(true);
        axios
            .get(listproductURL)
            .then(res=>{
                setproducts(res.data.product);
                setfiltredProduct(res.data.product);
                setbrand(res.data.brand);
                setcategory(res.data.category);
                setloading(false);
                if(Filtercategory !=='nutrition-sportive'){
                    setproducts(products.filter(p=>p.category.indexOf(this.state.Filtercategory)>=0))
                }
                setcount(products.length);
            })
            .catch(err=>{
                seterror(err);
                setloading(false);
            })
        },[]);
    const handelChangeSort=(e)=>{
        setsort(e.target.value);
        listProducts();
    }
    const listProducts=()=>{
        
            if(sort !== 'p'){
                setproducts(products.sort((a,b)=>(sort === 'd')?
                (a.price < b.price?1:-1):
                (a.price > b.price?1:-1)
                ));
            }else{
                setproducts(products.sort((a,b)=>(a.id>b.id?1:-1)));
            }
            return setfiltredProduct(products);

    }
    return(
        <section className=" filter py-5">
            <div className="container py-5">
                <div className="row">
                    <div className="col-sm-3 mt-5">
                        <h4 className="font-size-24 font-baloo">FILTRER PAR</h4>
                        <Filter brand={brand} category={category} filter={Filtercategory} />
                    </div>
                    <div className="col-sm-9 mt-5 ">
                        <div className="count_product">
                        <h4 className="font-size-24 font-baloo">{count} Produits</h4>
                        <select onChange={handelChangeSort} className="sort form-control" value={sort}>
                            <option disabled>Trier par:</option>
                            <option value="p">Pertinence</option>
                            <option value="d">Prix(Décroissant)</option>
                            <option value="c">Prix(Croissant)</option>
                        </select>
                        </div>
                        <hr />
                        {loading && (
                            <Spinner animation="border" role="status" variant="primary">
                                <span className="sr-only">Loading...</span>
                            </Spinner>
                        )}
                        <div className="list_product grid-container py-5">
                            {products.map((product)=>(
                                <Link to={`/product/${product.slug}`}><ProductItem product={product} key={product.id}/>  </Link>
                                                                        
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default ListProducts;