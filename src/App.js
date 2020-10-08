import React, {useState,useEffect} from 'react';
import './App.css';
import Header from './component/Header/Header';
import MapLayer from './component/Map/MapLayer';
import loaderImg from './loader.svg';
const App=()=>{
  const [inputIp,setInput]=useState('');
  const [ip,changeIP]=useState('192.212.174.101');
  const [position,changePosition]=useState([40.72091662099322,-74.00060176849367]);
  const [loaderVisability,changeLoaderVis]=useState(false);
  const [count,incrementCount]=useState(0);
  const [ipInfo,setInfo]=useState({
    ip:'192.212.174.101',
    city:'BROOKLYN',
    country:'NY',
    timezone:'UTC-500',
    isp:'SpaceX Starlink'
  });

  useEffect(()=>{
    if(count>0){
    fetch('https://hidden-citadel-03585.herokuapp.com/fetchIP',{
    method:'post',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({
      inputIp:ip
    })
    }).then(response=>response.json())
      .then(data=>{
        changePosition([data.location.lat,data.location.lng]);
        changeLoaderVis(false);
        setInfo({
          ip:ip,
          city:data.location.city,
          country:data.location.country,
          timezone:data.location.timezone,
          isp:data.isp
        })
    }).catch(err=>{
      changeLoaderVis(false);
      alert('ADD A VALID IP ADDRESS OR CHECK YOUR INTERNET CONNECTION');
    })
  }
  },[ip,count])
  const mapOnClick=e=>{
    changePosition(e.latlng)
  }
  const onInputChange=e=>{
    setInput(e.target.value);
  }
  const onButtonClick=()=>{
    if(inputIp.length!==0){
      changeLoaderVis(true);
      changeIP(inputIp);
      incrementCount(count+1);
    }
  }
    let loader=null;
    if(loaderVisability){
      loader=<div className="loader">
               <img src={loaderImg} alt="loader"/>
             </div>
    }
    return (
      <div className="App">
        <Header data={ipInfo} onInputChange={onInputChange} onButtonClick={onButtonClick}/>
        <MapLayer mapOnClick={mapOnClick} position={position}/>
        {loader}
      </div>
    )
}
export default App;
