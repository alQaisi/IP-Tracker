import { useMapEvent } from 'react-leaflet/hooks'
import { useContext } from 'react';
import { AppContext } from '../../context/app.context';


function MapComponent() {
  const {changeMapPosition}=useContext(AppContext);
  // eslint-disable-next-line
    const map = useMapEvent({
      click: (evt) => {
        const position=Object.values(evt.latlng);
        changeMapPosition(position)
      }
    });
    return null
}
export default MapComponent;