import React, { Component } from 'react';

import Banner from './Banner';
import Product from './Products';
import ListArticles from './ListArticles';



class Home extends Component{
    
    render(){
  
        return(
            <>
                
                <Banner />
                <Product  />
                <ListArticles />
                
                
            </>
        )
    }
}

export default Home;