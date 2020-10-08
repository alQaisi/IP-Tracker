import React, { PureComponent } from 'react';
import './DataBox.css';
class DataBox extends PureComponent{
    render(){
        const {ip,city,country,timezone,isp}=this.props.data;
        return(
            <div className="DataBox">
                    <p id="ip">{ip}</p>
                    <p id="location">{city+country}</p>
                    <p id="timezone">{timezone}</p>
                    <p id="isp">{isp}</p>
            </div>
        )
    }
}
export default DataBox;