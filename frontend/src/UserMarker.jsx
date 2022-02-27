import { Marker } from 'react-leaflet';
import { UserIcon } from './leafletIcons';

const UserMarker = ({lat, lng}) =>  {
    return <Marker position={[lat, lng]} icon={UserIcon}></Marker>
};

export default UserMarker;