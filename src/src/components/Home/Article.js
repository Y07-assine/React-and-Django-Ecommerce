import React, { Component } from 'react';
import {Card} from 'react-bootstrap';

class Article extends Component{
    render(){
        return(
            <div>
                <Card >
                    <Card.Img variant="top" src={this.props.img} />
                    <Card.ImgOverlay>
                        <Card.Title>
                            {this.props.cardTitle}
                        </Card.Title>
                    </Card.ImgOverlay>
                    <Card.Text>{this.props.text}</Card.Text>
                </Card>
            </div>
        )
    }
}

export default Article;