import React, { Component } from 'react';
import Header from './Header';
import Banner from './Banner';
import Product from './Products';
import ListArticles from './ListArticles';
import Footer from './Footer';
import Newsletter from './Newsletter';


class Home extends Component{
    
    render(){
  
        return(
            <>
                <Header />
                <Banner />
                <Product  />
                <ListArticles />
                <Newsletter />
                <Footer />
                
            </>
        )
    }
}

export default Home;