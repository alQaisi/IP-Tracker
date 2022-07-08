import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import { useContext } from 'react';
import { AppContext } from '../../context/app.context';
import { Icon } from "leaflet";
import locationMarker from './location-marker-1719247-1460733.png'
import MapComponent from './mapComponent.component';
import ChangeView from './changeView.component';
import 'leaflet/dist/leaflet.css'
import "./Map.style.css";

function MapLayer(){
    const skater = new Icon({
        iconUrl: locationMarker,
        iconSize: [40,40]
    });

    const {position}=useContext(AppContext);
    return(
        <MapContainer center={position}  zoom={13} scrollWheelZoom={true}  dragging={true} animate={true} easeLinearity={0.35}>
            <MapComponent/>
            <ChangeView/>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            <Marker position={position} icon={skater} draggable={true} />
        </MapContainer>
    );
}
export default MapLayer;