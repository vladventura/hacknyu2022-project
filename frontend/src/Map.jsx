import 'leaflet/dist/leaflet.css';
import './Map.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import UserMarker from './UserMarker';

const MapView = ({ disposals, userLat, userLon }) => {
    return <div className='map-container'>
        <MapContainer center={[userLat, userLon]} zoom={13}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <UserMarker lat={userLat} lng={userLon}/>
        </MapContainer>
    </div>

};

export default MapView;