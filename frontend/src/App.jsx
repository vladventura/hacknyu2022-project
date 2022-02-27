import { useEffect, useState } from 'react';
import axios from 'axios';
import MapView from './Map';

const App = () => {

  const [disposals, setDisposals] = useState([]);
  const [distance, setDistance] = useState(0.5);
  const [userLat, setUserLat] = useState(42.3513);
  const [userLon, setUserLon] = useState(-71.0603);

  useEffect(() => {
    axios.get(`http://localhost:5000/disposals?lat=${userLat}&lon=${userLon}&dis=${distance}`)
      .then(res => {
        const { data } = res.data;
        setDisposals(data);
      });
  }, [distance]);

  return (
    <div className="App">
      {disposals.length <= 0? <div>Nothing to see</div> 
      : 
      <MapView userLat={userLat} userLon={userLon} />
      }
    </div>
  );
}

export default App;
