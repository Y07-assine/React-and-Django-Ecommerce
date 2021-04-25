import React, { Component } from 'react';
import Header from './Header';
import Banner from './Banner';
import Product from './Products';

class Home extends Component{
    render(){
        return(
            <>
                <Header />
                <Banner />
                <Product />
            </>
        )
    }
}

export default Home;