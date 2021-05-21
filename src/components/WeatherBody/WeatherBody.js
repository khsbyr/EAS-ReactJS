import React from 'react'
import './WeatherBody.css'
import Days from '../Days/Days'
import Icon from '../Icon/Icon'
import Temp from '../Temp/Temp'
import {BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";

const WeatherBody = (props) => {
    
    return (
        <div className="WeatherBody card">
            <Days day={props.day} />
            <Icon icon={props.icon} />
            <Temp minTemp={props.minTemp} maxTemp={props.maxTemp} desctiption={props.desctiption}/>
        </div>
        
    )
}


export default WeatherBody;