import React from 'react';
import styled from 'styled-components';

const Alert = styled.div`

    ${props => (props.color === 'primary' ? `background: #ff0000;` : null)}
    ${props => (props.color === 'secondary' ? `background: #00FF00;` : null)}
    ${props => (props.color === 'success' ? `background: #0000FF;` : null)}
    ${props => (props.color === 'danger' ? `background: #ffFF00;` : null)}
    ${props => (props.color === 'warning' ? `background: #ff00FF;` : null)}
    ${props => (props.color === 'info' ? `background: #00FFFF;` : null)}
    ${props => (props.color === 'light' ? `background: #f00000;` : null)}
    ${props => (props.color === 'dark' ? `background: #ffFF55;` : null)}

`;

const StarWarsCard = props => {

    return (
        <div>
            <Alert color="primary">
                {props.name}
                <br />
            </Alert>
            <Alert color="secondary">
                {props.height}
                <br />
            </Alert>
            <Alert color="success">
                {props.mass}
                <br />
            </Alert>
            <Alert color="danger">
                {props.hair_color}
                <br />
            </Alert>
            <Alert color="warning">
                {props.skin_color}
                <br />
            </Alert>
            <Alert color="info">
                {props.homeworld}
                <br />
            </Alert>
            <Alert color="light">
                {props.birth_year}
                <br />
            </Alert>
            <Alert color="dark">y
                {props.eye_color}
                <br />
            </Alert>
        </div>
    )
}

export default StarWarsCard;