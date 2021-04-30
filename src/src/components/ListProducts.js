import React, { Component } from 'react';
import axios from 'axios';
import {listproductURL} from '../Constant';
import 'semantic-ui-css/semantic.min.css';
import { Select } from 'semantic-ui-react';
import ProductItem from './Home/ProductItem';
import Filter from './Filter';
import {Spinner} from 'react-bootstrap';

class ListProducts extends Component{
    constructor(props){
        super(props);
        this.state={
            loading:false,
            error:null,
            products:[],
            filtredProducts:[],
            category:[],
            count:0,
            sort:'Pertinence',
            Filtercategory:props.match.params.category,
            brand:[]
        };
        this.handelChangeSort=this.handelChangeSort.bind(this);
    }
    componentDidMount(){
        this.setState({loading:true});
        axios
            .get(listproductURL)
            .then(res=>{
                this.setState({products:res.data.product,brand:res.data.brand,category:res.data.category,loading:false});
                if(this.state.Filtercategory !=='nutrition-sportive'){
                    this.setState({products:this.state.products.filter(p=>p.category.indexOf(this.state.Filtercategory)>=0)});
                }
                this.setState({count:this.state.products.length});
            })
            .catch(err=>{
                this.setState({error:err,loading:false})
            })
    }
    handelChangeSort(event){
        this.setState({sort:event.target.value});
        this.listProducts();
    }
    listProducts(){
        
        this.setState(state =>{
            if(state.sort !== 'p'){
                state.products.sort((a,b)=>(state.sort === 'd')?
                (a.price < b.price?1:-1):
                (a.price > b.price?1:-1)
                )
            }else{
                state.products.sort((a,b)=>(a.id>b.id?1:-1));
            }
            return {filtredProducts:state.products};
            
        })
    }
    render(){
        const {products,count,sort,brand,category,loading,Filtercategory}=this.state;
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
                            <select onChange={this.handelChangeSort} className="sort form-control" value={sort}>
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
                                    <ProductItem product={product} key={product.id}/>                                       
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