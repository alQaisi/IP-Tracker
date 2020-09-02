import React from 'react';
import './DataBox.css';
const DataBox=(props)=>{
    const {ip,city,country,timezone,isp}=props.data;
    return(
        <div className="DataBox">
                <p id="ip">{ip}</p>
                <p id="location">{city+country}</p>
                <p id="timezone">{timezone}</p>
                <p id="isp">{isp}</p>
        </div>
    )
}
export default DataBox;