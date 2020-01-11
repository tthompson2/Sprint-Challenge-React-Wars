import axios from 'axios';
import React, { useEffect, useState } from 'react';
import StarWarsCard from './StarWarsCard';

function Retrieval() {

    const[person, setPerson] = useState([]);

    useEffect(() => {
        
        axios

            .get('https://swapi.co/api/people/')

            .then(response => {

                setPerson(response.data.results);
                console.log(response.data.results);
                console.log(person);
            })

            .catch(error => {
                console.log(`The error is: ${error}`);
            })
    } , []);
   
    return (
        <div>
            <StarWarsCard 
            name={person.name}
            height={person.height}
            mass={person.mass}
            hair_color={person.hair_color}
            skin_color={person.skin_color}
            homeworld={person.homeworld}
            birth_year={person.birth_year}
            eye_color={person.eye_color}
            />
        </div>
    )
}

export default Retrieval;