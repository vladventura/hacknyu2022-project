import { Marker } from 'react-leaflet';
import { DisposalIcon } from './leafletIcons';

const DisposalMarker = ({lat, lng}) =>  {
    return <Marker position={[lat, lng]} icon={DisposalIcon}></Marker>
};

export default DisposalMarker;