import 'leaflet/dist/leaflet.css';
import './Map.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const MapView = ({ disposals, userLat, userLon }) => {
    return <div className='map-container'>
        <MapContainer center={[51.505, -0.09]} zoom={13}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer>
    </div>

};

export default MapView;