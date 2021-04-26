import React, { Component } from 'react';
import Header from './Header';
import Banner from './Banner';
import Product from './Products';
import ListArticles from './ListArticles';
import Footer from './Footer';
import Newsletter from './Newsletter';
import axios from 'axios';
import {productURL} from '../../Constant';

class Home extends Component{
    state ={
        products:[],
        loading: false,
        error: null
    };
    componentDidMount(){
        this.setState({loading:true});
        axios
            .get(productURL)
            .then(res=>{
               
                this.setState({products:res.data});
                console.log(this.state.products);
            })
            .catch(err=>{
                this.setState({error:err,loading:false})
            })
    }
    render(){
        const {products,loading,error} = this.state;
        return(
            <>
                <Header />
                <Banner />
                <Product list={products} title='Nouveaux Produits'/>
                <Product list={products} title='Produits Populaire' />
                <ListArticles />
                <Newsletter />
                <Footer />
                
            </>
        )
    }
}

export default Home;