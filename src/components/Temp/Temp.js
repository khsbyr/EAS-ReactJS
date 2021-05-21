import React from 'react'
import './Temp.css'

const Temp = props => {
    return <div className="Temp">
        <div className="min">{props.minTemp}&#176;</div>
        <div className="max">{props.maxTemp}&#176;</div>
    </div>
}

export default Temp;