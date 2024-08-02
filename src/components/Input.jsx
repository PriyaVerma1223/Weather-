import React from "react";
import { useWeather } from "../context/Weather";

const Input = () => {
const weather = useWeather();
console.log("Weather",weather);

   return(
    <input
    className="input-field"
    placeholder="Search Here"
    value={weather.SearchCity}
    onChange={(e) => weather.setSearchCity(e.target.value)} 
    />
   )
}

export default Input;




// ----------------------------------LAKSHYA-----------------------------

// import React from "react";

// const Input = (props) => {
//     return (
//         <Input 
//         className="input"
//         plaseholder={props.placeholder}
//         value={props.value}/>
        
//     )
// };

// export default Input;