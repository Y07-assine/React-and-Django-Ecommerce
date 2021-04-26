import React, { Component } from 'react';
import Header from './Header';
import Banner from './Banner';
import Product from './Products';
import ListArticles from './ListArticles';

class Home extends Component{
    render(){
        return(
            <>
                <Header />
                <Banner />
                <Product />
                <Product />
                <ListArticles />
            </>
        )
    }
}

export default Home;