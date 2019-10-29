import React from 'react';
import styled from 'styled-components';

const styledDiv = styled.div``;

const WrapperDiv = styled.div`

   width: 100%
   color: green;
   height: 100%;

`; 

const SWcard = props => {

    return (
        <WrapperDiv>
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
            <br></br>>
        </WrapperDiv>
    )
}

export default SWcard;