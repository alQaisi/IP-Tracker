import { Icon } from "leaflet";
import { Map, Marker, TileLayer} from 'react-leaflet';
import iconLocation from './icon-location.svg';
import { useContext } from 'react';
import { AppContext } from '../../context/app.context';
import "./Map.style.css";

function MapLayer(){
    const {position,changeMapPosition}=useContext(AppContext);
    const newIcon= new Icon({
        iconUrl:iconLocation,
        iconSize:[25,40]
    });
    return(
        <Map zoomControl={false} className="Map" 
            center={position} 
            zoom={15}
            maxZoom={20}
            doubleClickZoom={true}
            scrollWheelZoom={true}
            dragging={true}
            animate={true}
            easeLinearity={0.35}
            onclick={changeMapPosition}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
            <Marker icon={newIcon} position={"position"} draggable={true}>
            </Marker>
        </Map>
    );
}
export default MapLayer;