import React from 'react';
import PropTypes from 'prop-types';

const Svg =({name,color,size}) =>{
    return (
        <svg fill={color} width={size} height={size}>
           <use xlinkHref={`/images/sprite.svg#icon-${name}`} /> 
        </svg>
    );
}
Svg.defaultProps ={
    color:'black'
}

Svg.propTypes = {
    name: PropTypes.string.isRequired,
    color:PropTypes.string,
    size:PropTypes.number

}

export default Svg;