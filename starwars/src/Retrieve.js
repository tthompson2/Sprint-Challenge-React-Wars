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
          Object.keys(value).map(element => (
            <SWcard name={value.name}
              height={value.height}
              mass={value.mass}
              hair_color={value.hair_color}
              skin_color={value.skin_color}
              birth_color={value.eye_color}
              gender={value.gender}
              homeworld={value.homeworld}
              />)
        )
        }
      </div>
    )
}
