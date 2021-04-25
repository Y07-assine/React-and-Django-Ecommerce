import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import item from '../../img/item2.jpg';
class Banner extends Component{
    render(){
        return(
            <div className="banner">
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100" src={item}/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={item}/>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}

export default Banner;