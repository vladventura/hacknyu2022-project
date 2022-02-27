import { useEffect, useState } from 'react';
import axios from 'axios';
import MapView from './Map';

const App = () => {

  const [disposals, setDisposals] = useState(null);
  const [distance, setDistance] = useState(0.5);
  const [userLat, setUserLat] = useState(42.3513);
  const [userLon, setUserLon] = useState(-71.0603);

  const setUserPosition = (position) => {
    setUserLat(position.coords.latitude);
    setUserLon(position.coords.longitude);
  };

  useEffect(() => {

    if ('geolocation' in navigator) {
      console.log("Geolocation information available.");
      navigator.geolocation.getCurrentPosition(setUserPosition);
      navigator.geolocation.watchPosition(setUserPosition);
    }

    axios.get(`http://localhost:5000/disposals?lat=${userLat}&lon=${userLon}&dis=${distance}`)
      .then(res => {
        const { data } = res.data;
        setDisposals(data);
      });
  }, [distance]);

  return (
    <div className="App">
      {disposals == null? <div>Loading...</div> 
      : 
      <MapView userLat={userLat} userLon={userLon} disposals={disposals} />
      }
    </div>
  );
}

export default App;
