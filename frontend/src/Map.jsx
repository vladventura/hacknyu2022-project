import 'leaflet/dist/leaflet.css';
import './Map.css';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import UserMarker from './UserMarker';
import DisposalMarker from './DisposalMarker';

const MapView = ({ disposals, userLat, userLon }) => {

    const AutoRecenter = ({center, zoom}) => {
        const map = useMap();
        map.setView(center, zoom);
        return null;
    }

    return <div className='map-container'>
        <MapContainer center={[userLat, userLon]} zoom={20}>
            <AutoRecenter center={[userLat, userLon]} zoom={20} />
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <UserMarker lat={userLat} lng={userLon}/>
            {disposals.map(disposal => <DisposalMarker lat={disposal.lat} lng={disposal.lon} />)}
        </MapContainer>
    </div>

};

export default MapView;