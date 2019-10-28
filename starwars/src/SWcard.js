import React from 'react';

const SWcard = props => {

    return (
        <div>
            {props.name}
            {props.height}
            {props.mass}
            {props.hair_color}
            {props.skin_color}
            {props.eye_color}
            {props.birth_year}
            {props.gender}
            {props.homeworld}
        </div>
    )
}

export default SWcard;