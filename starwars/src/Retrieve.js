import React, {useState, useEffect}from 'react';
import axios from "axios";
import SWcard from "./SWcard";

export default function Retrieve() {

    const[value, setValue] = useState([]);

    useEffect(() => {

    axios
         .get("https://swapi.co/api/people/")
         .then(response => {
          console.log(response);
          setValue(response.data.results);
          console.log(value);

         })
         .catch(error => {
          console.log(`This is the error that we encounter:${error}`)
         });
        }, [])

    return (
      <div>
        {
          value.map(element => (
            <SWcard name={element.name}
              height={element.height}
              mass={element.mass}
              hair_color={element.hair_color}
              skin_color={element.skin_color}
              birth_color={element.eye_color}
              gender={element.gender}
              homeworld={element.homeworld}
              />)
        )
        }
      </div>
    )
}
