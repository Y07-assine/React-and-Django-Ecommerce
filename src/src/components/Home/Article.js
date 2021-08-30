import React, { Component } from 'react';
import {Card} from 'react-bootstrap';

const Article =(props)=>{
        return(
            <div>
                <Card >
                    <Card.Img variant="top" src={props.img} />
                    <Card.ImgOverlay>
                        <Card.Title>
                            {props.cardTitle}
                        </Card.Title>
                    </Card.ImgOverlay>
                    <Card.Text>{props.text}</Card.Text>
                </Card>
            </div>
        )
    }

export default Article;