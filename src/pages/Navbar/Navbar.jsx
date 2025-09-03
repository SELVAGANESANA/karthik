import React from "react";
import './Navbar.css';
import { Link } from "react-router-dom";
import logo2 from '../../assets/logo2.PNG';
import logo1 from '../../assets/logo1.PNG';
import logonon from '../../assets/logonon.png';
import logodar from '../../assets/logodar.png';
import logo from '../../assets/logo.png';
import { FaWhatsapp } from "react-icons/fa";
const Navbar = () => {
    const phoneNumber = "919840600638"; // your WhatsApp number with country code
    const message = "Hi, I am interested in your services!";
    return (
        <div className="overallnav">
            <div className="navleft">
                <img src={logo} alt="" />
            </div>
            <div className="navright">
                <Link to='/'>Home</Link>
                <Link to='/about' >About</Link>
                <Link to="/work" >Workshop</Link>
                <Link to='/gallery' >Gallery</Link>
                <Link to="/Contact">Contact</Link>
            </div>

            <div className="whatsapp">
                <a
                    href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaWhatsapp color="green" size={40} />
                </a>
            </div>

        </div>
    )
}

export default Navbar;