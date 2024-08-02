import { useEffect } from 'react';
import Card from './components/Card';
import Input from './components/Input';
import Button from './components/Button';
import { useWeather } from './context/Weather';

import './App.css';

function App() {
  const weather = useWeather();
  console.log(weather);

  useEffect(()=> {
    // GET CURRENT LOCATION 
    weather.fetchUserCurrentLocationData();
  },[])
  
  return (
    <div className="App">
     <h1>WEATHER FORCAST</h1>
     <Input />
     <Button onClick={weather.fetchData} value="Search"/>
    <Card />
     <Button onClick={(e) => weather.setSearchCity(e.target.value)} value="Refresh"/>
    </div>
  );
}

export default App;

// ------------------------------LAKSHYA---------------------------------------------------


// import './App.css';
// import Card from './components/Card';
// import Input from './components/Input';
// import Button from './components/Button';

// function App() {
//   return (
//     <div className="App">
//       <h1>Weather Forcast</h1>
//       <Input />
//       <Card />
//       <Button />
     
//     </div>
//   );
// }

// export default App;
