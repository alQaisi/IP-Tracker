import React, { PureComponent } from 'react';
import './Form.css';
import { FaAngleRight } from 'react-icons/fa';
class InputBox extends PureComponent{
    render(){
        const{onButtonClick,onInputChange}=this.props;
        return(
            <div className="InputBox">
                <input aria-label="IP bar" type='text' placeholder="Search for any IP address" onChange={onInputChange}/>
               <button aria-label="track button" onClick={onButtonClick}><FaAngleRight className="arrowButton"/></button>
            </div>
        )
    }
}
export default InputBox;