import React from 'react';

const StarWarsCard = props => {

    return (
        <div>
            {props.name}
            {props.height}
            {props.mass}
            {props.hair_color}
            {props.skin_color}
            {props.homeworld}
            {props.birth_year}
            {props.eye_color}
        </div>
    )
}

export default StarWarsCard;