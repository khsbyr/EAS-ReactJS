import React from 'react'
import Spinner from '../../assets/Spinner.gif'
import './Loader.css'

const Loader = props => {
    return <div className="Loader">
        <img src={Spinner} alt={Spinner} />
        <h6 className="text-center-mt-3">{props.msg}</h6>
    </div>
}

export default Loader;