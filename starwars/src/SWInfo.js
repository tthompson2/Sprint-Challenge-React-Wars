import React from "react";

const SWInfo = props => {

    return (
        <div>
            {props.name}
            {props.height}
            {props.mass}
            {props.hair_color}
            {props.skin_color}
            {props.gender}
            {props.homeworld}
        </div>
    )
}

export default SWInfo;