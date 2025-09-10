import React from "react";
import './Navbar.css';
import { Link } from "react-router-dom";
import { IoLogoWhatsapp } from "react-icons/io";
import reallogo from '../../assets/reallogo.png';
import { FaWhatsapp } from "react-icons/fa";
import relogo  from '../../assets/relogo.jpeg';
const Navbar = () => {
    const phoneNumber = "919840187701"; // your WhatsApp number with country code
    const message = "Hi, I am interested in your services!";
    return (
        <div className="overallnav">
            <div className="navleft">
                <img src={relogo} alt="" />
               
            </div>
            <div className="navright">
                <Link to='/'>Home</Link>
                <Link to='/about' >About</Link>
                <Link to="/work" >Workshop</Link>
                <Link to='/gallery' >Gallery</Link>
                <Link to="/Contact">Contact</Link>
               
            </div>

            <div className="navdownload">
                 <a href="https://drive.google.com/file/d/1agr_5zZrtS-5GaTBnyZ3gvVDB5pQa2V6/view?usp=drive_link">Download</a>
            </div>

            <div className="whatsapp">
                <a
                    href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <IoLogoWhatsapp color="green" size={40} />
                </a>
            </div>

        </div>
    )
}

export default Navbar;