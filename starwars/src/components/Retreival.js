import axios from 'axios';
import React, { useEffect, useState } from 'react';
import StarWarsCard from './StarWarsCard';

function Retrieval() {

    const [person, setPerson] = useState([]);

    useEffect(() => {

        axios

            .get('https://swapi.co/api/people/')

            .then(response => {

                setPerson(response.data.results);
                console.log(response.data.results);
                console.log(response);
            })

            .catch(error => {
                console.log(`The error is: ${error}`);
            })

    }, []);

    return (
        <div>
            {person.map(element=> ( 
            <StarWarsCard
                name={element.name}
                height={element.height}
                mass={element.mass}
                hair_color={element.hair_color}
                skin_color={element.skin_color}
                homeworld={element.homeworld}
                birth_year={element.birth_year}
                eye_color={element.eye_color}
            />)
            )}
        </div>
    )
}

export default Retrieval;