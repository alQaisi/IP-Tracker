import { useMap } from 'react-leaflet'
import { useContext } from 'react';
import { AppContext } from '../../context/app.context';
function ChangeView({ center, zoom }) {
    const {position}=useContext(AppContext);
    const map = useMap();
    map.setView(position, zoom);
    setTimeout(function () {
        map.invalidateSize(true) ;
     },200);
    return null;
}
export default ChangeView;