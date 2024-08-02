const baseURL = 
 "https://api.weatherapi.com/v1/current.json?key=dbbfa06c0b5d4cccb5c92930241804";

export const getWeatherDataForCity = async (city) => {
    const response = await fetch (`${baseURL}&q=${city}&aqi=yes`);
    return await response.json();
};

export const getWeatherDataForLocation = async (lat,lon) => {
    const response = await fetch (`${baseURL}&q=${lat},${lon}&aqi=yes`);
    return await response.json();
};








// const baseURL =
//   "https://api.weatherapi.com/v1/current.json?key=dbbfa06c0b5d4cccb5c92930241804";

// export const getWeatherDataForCity = async (city) => {
//   const response = await fetch(`${baseURL}&q=${city}&aqi=yes`);
//   return await response.json();
// };