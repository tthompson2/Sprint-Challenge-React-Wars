import React from "react";

const SWInfo = props => {

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
            {props.gender}
            <br></br>
            {props.homeworld}
        </div>
    )
}

export default SWInfo;