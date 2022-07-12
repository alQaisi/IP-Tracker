import { Databox,DataboxItem } from "./DataBox.style";
import { useContext } from 'react';
import { AppContext } from '../../context/app.context';

function DataBox(){
    const {ipInfo}=useContext(AppContext);
    const {ip,city,country,timezone,isp}=ipInfo;
    return(
        <Databox>
            <DataboxItem title="IP ADDRESS">{ip}</DataboxItem>
            <DataboxItem title="LOCATION">{city+" , "+country}</DataboxItem>
            <DataboxItem title="TIMEZONE">{timezone}</DataboxItem>
            <DataboxItem title="ISP">{isp}</DataboxItem>
        </Databox>
    );
}
export default DataBox;