import { InputCont } from "./InputForm.style";
import { FaAngleRight } from "react-icons/fa";
import { useContext } from 'react';
import { AppContext } from '../../context/app.context';

function InputBox(){
    const {onInputChange,changeIpInfo}=useContext(AppContext);
    return(
        <InputCont>
            <input aria-label="IP bar" type="text" placeholder="Search for any IP address" onChange={onInputChange}/>
            <button aria-label="track button" onClick={changeIpInfo}><FaAngleRight className="arrowButton"/></button>
        </InputCont>
    );
}
export default InputBox;