import React from "react";
import { useWeather } from "../context/Weather";

const Card = () => {
    const weather = useWeather();

    return(
        <div className="card">
              <img src={weather.Data?.current?.condition?.icon}  />
              <h2>{weather.Data?.current?.temp_c} °C</h2>
              <h5>{weather.Data?.location?.name},{weather.Data?.location?.region},{weather.Data?.location?.country}</h5>
        </div>
    )
}

export default Card;



// ------------------------------------LAKSHYA--------------------------------


// import React from "react";

// const Card = () => {
//     return (
//         <div calssName="card">
//           <p>londan</p>
//         </div>
//     )
// };

// export default Card;