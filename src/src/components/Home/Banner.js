import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';


const Banner =()=>{
        return(
            <div className="banner">
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100" src='/img/item2.jpg'/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src='/img/item2.jpg'/>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }

export default Banner;