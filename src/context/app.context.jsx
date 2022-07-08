import { useReducer,createContext } from "react";

export const AppContext=createContext({});

const INITIAL_STATE={
    input:"",
    ip:"192.212.174.101",
    position:[40.72091662099322,-74.00060176849367],
    loaderVisability:false,
    ipInfo:{
        ip:'192.212.174.101',
        city:'BROOKLYN',
        country:'NY',
        timezone:'UTC-500',
        isp:'SpaceX Starlink'
    }
}
const AppReducer=function(state,action){
    const {type,payload}=action;
    switch(type){
        case "CHANGE_MAP_LOCATION":
            return {...state,position:payload};
        case "ON_INPUT_CHANGE":
            return {...state,input:payload};
        case "TOGGLE_LOADER":
            return {...state,loaderVisability:payload}
        case "CHANGE_IP_INFO":
            return{...state,...payload}
        default :
            return {...state};
    }
}
export function AppProvider({children}){
    const [{input,ip,position,loaderVisability,ipInfo},dispatch]=useReducer(AppReducer,INITIAL_STATE);
    
    function changeMapPosition(position){
        dispatch({type:"CHANGE_MAP_LOCATION",payload:position});
    }

    function onInputChange(evt){
        dispatch({type:"ON_INPUT_CHANGE",payload:evt.target.value});
    }

    function changeIpInfo(){
        dispatch({type:"TOGGLE_LOADER",payload:true});
        fetch("https://hidden-citadel-03585.herokuapp.com/fetchIP",{
            method:"post",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                inputIp:input
            })
        }).then(res=>res.json())
        .then(data=>{
            const newState={
                loaderVisability:false,
                position:[data.location.lat,data.location.lng],
                ipInfo:{
                    ip:input,
                    city:data.location.city,
                    country:data.location.country,
                    timezone:data.location.timezone,
                    isp:data.isp
                }
            };
            dispatch({type:"CHANGE_IP_INFO",payload:newState});
        }).catch(err=>{
            console.log(err);
            alert('ADD A VALID IP ADDRESS OR CHECK YOUR INTERNET CONNECTION');
            dispatch({type:"TOGGLE_LOADER",payload:false});
        });
    }
    const value={ip,loaderVisability,ipInfo,position,changeIpInfo,changeMapPosition,onInputChange};
    return(
        <AppContext.Provider value={value}>{children}</AppContext.Provider>
    );
}
