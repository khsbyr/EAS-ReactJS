import React from "react";
import './Navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudRain, faFirstAid, faNewspaper, faPhone, faUser } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
        
        <nav>
        <ul class="menuItems">
        <li><a href='/' data-item='Цаг агаар'><FontAwesomeIcon icon={faCloudRain} /> Цаг агаар</a></li>
        <li><a href='/news' data-item='Мэдээ'><FontAwesomeIcon icon={faNewspaper} /> Мэдээ</a></li>
        <li><a href='/help' data-item='Тусламж'><FontAwesomeIcon icon={faFirstAid} /> Тусламж</a></li>
        <li><a href='/contact' data-item='Утас'><FontAwesomeIcon icon={faPhone} /> Утас</a></li>
        <li><a href="/register"><FontAwesomeIcon icon={faUser} /> </a></li>
        </ul>
        </nav>
    )

}

export default Navbar
