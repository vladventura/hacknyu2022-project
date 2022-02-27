import L from 'leaflet';

export const UserIcon = new L.Icon({
    iconUrl: require('./assets/map-marker-green.png'),
    iconRetinaUrl: require('./assets/map-marker-green.png'),
    iconAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: [35, 35],
    className: 'leaflet-user-icon'
});

export const DisposalIcon = new L.Icon({
    iconUrl: require('./assets/map-marker-black.png'),
    iconRetinaUrl: require('./assets/map-marker-black.png'),
    iconAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: [35, 35],
    className: 'leaflet-disposal-icon'
});