import React, {useState, useEffect} from 'react';
import axios from "axios";
import SWInfo from './SWInfo';

export default function SWDisplay(){
    const [value, setValue] = useState([]);

useEffect(() => {    

axios
    .get("https://swapi.co/api/people/")

    .then(repsonse => {
        console.log(repsonse);
        setValue(repsonse.data.results);
        console.log(value);
    })

    .catch(error => {
      console.log(error);
    })

    return (
        <div>
            <SWInfo
            name={value.name}
            height={value.height}
            mass={value.mass}
            hair_color={value.hair_color}
            skin_color={value.skin_color}
            gender={value.gender}
            homeworld={value.homeworld}
            />           
        </div>
    )
}, []);
}