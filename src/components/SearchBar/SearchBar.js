import React from 'react'
import './SearchBar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudRain, faFirstAid, faNewspaper, faPhone, faUser } from '@fortawesome/free-solid-svg-icons'

class SearchBar extends React.Component {
    state = {
        city: ""
    }

 
    constructor(props) {
        super(props);
        this.state = {
            latitude: null,
            longitude: null,
            userAddress: null,
        };
        this.getLocation = this.getLocation.bind(this);
        this.getCoordinats = this.getCoordinats.bind(this);
    
    }

    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getCoordinats, this.handleLocationError);
          } else {
            alert("Geolocation is not supported by this browser.");
          }
    }

    getCoordinats(position) {
        this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            userAddress: 'Narnii Rd, Ulaanbaatar, Mongolia'
        })
     
    }

    handleLocationError(error) {
            switch(error.code) {
              case error.PERMISSION_DENIED:
                alert("User denied the request for Geolocation.")
                break;
              case error.POSITION_UNAVAILABLE:
                alert("Location information is unavailable.")
                break;
              case error.TIMEOUT:
                alert("The request to get user location timed out.")
                break;
              case error.UNKNOWN_ERROR:
                alert("An unknown error occurred.")
                break;
              default:
                alert("An unknown error occurred.")
            }
    }

    onSubmit = e => {
        e.preventDefault();
        if (this.state.city === '') {
            alert('Хайсан аймаг, хот олдсонгүй')
        } else {
            this.props.searchCity(this.state.city)
        }

        this.setState({ city: '' })
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
            <div className="SearchBar">
                <div className="SearchbarChilds">
                    <ul className="SearchBarNav">
                        <li><a href="/"><FontAwesomeIcon icon={faCloudRain} /> Цаг агаар</a></li>
                        <li><a href="/news"><FontAwesomeIcon icon={faNewspaper} /> Мэдээ</a></li>
                        <li><a href="/help"><FontAwesomeIcon icon={faFirstAid} /> Тусламж</a></li>
                        <li><a href="/contact"><FontAwesomeIcon icon={faPhone} /> Утас</a></li>
                        <li><a href="/register"><FontAwesomeIcon icon={faUser} /> </a></li>
                    </ul>


                    <form onSubmit={this.onSubmit} className="formSearchCity">
                        <input type="text" name="city" id="inputSearchCity" onChange={this.onChange} placeholder="Аймаг, хотоор хайх" />
                        <button type="submit" className="btn btn-outline-info text-white">Хайх</button>
                    </form>

                    <div  className="text-white" style={{marginTop: '30px',}}>  
                        <button onClick={this.getLocation} style={{marginBottom: '30px', width: '180px', height: '35px'}}>Байршил тогтоох</button>
                        <p>Өргөрөг: {this.state.latitude}</p>
                        <p>Уртраг: {this.state.longitude}</p>
                        <p>Хаяг: {this.state.userAddress}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchBar;