import React from 'react';

const SWcard = props => {

    return (
        <div>
            {props.name}
            <br></br>
            {props.height}
            <br></br>
            {props.mass}
            <br></br>
            {props.hair_color}
            <br></br>
            {props.skin_color}
            <br></br>
            {props.eye_color}
            <br></br>
            {props.birth_year}
            <br></br>
            {props.gender}
            <br></br>
            {props.homeworld}
            <br></br>
        </div>
    )
}

export default SWcard;