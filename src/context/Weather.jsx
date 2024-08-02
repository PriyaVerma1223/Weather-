import { createContext, useContext, useState} from "react";
import { getWeatherDataForCity, getWeatherDataForLocation } from "../api";

 const WeatherContext = createContext(null);
 export const useWeather = () => {
    return useContext(WeatherContext);
 } 

 export const WeatherProvider = (props) => {
    const [Data,setData] = useState(null);
    const [SearchCity,setSearchCity] = useState(null);

    const fetchData = async () => {
        const response = await getWeatherDataForCity(SearchCity);
        setData(response);
    }

    const fetchUserCurrentLocationData = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            getWeatherDataForLocation(position.coords.latitude, position.coords.longitude).then((Data) => setData(Data))
        })   
     }

    return(
        <WeatherContext.Provider
         value={{
            SearchCity,
            Data,
            setSearchCity,
            fetchData,
            fetchUserCurrentLocationData
        }}
        >
            {props.children}
            </WeatherContext.Provider>
    )
 }