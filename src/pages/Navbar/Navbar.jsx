import React, { useState } from "react";
import './Navbar.css';
import { Link } from "react-router-dom";
import { IoLogoWhatsapp } from "react-icons/io";
import reallogo from '../../assets/reallogo.png';
import { FaWhatsapp } from "react-icons/fa";
import relogo from '../../assets/relogo.jpeg';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
    const phoneNumber = "919840600638"; // your WhatsApp number with country code
    const message = "Hi, I am interested in your services!";

    const [menuOpen, setMenuOpen] = useState(false);


    return (
        <div className="overallnav">
           <div className="navalleft">
             <div className="navleft">
                <img src={relogo} alt="" />

            </div>
            <div className="navtitle">
                <h3>Agrisa Interactive</h3>
                <h3>Training</h3>
            </div>
           </div>
            <div className="navright">
                <Link to='/'>Home</Link>
                <Link to='/about' >About</Link>
                <Link to="/work" >Workshop</Link>
                <Link to='/gallery' >Gallery</Link>
                <Link to="/Contact">Contact</Link>

            </div>

           <div className="navhalf">
                   

            {/* Mobile Menu Button */}
            <div className="navmenu">
                <button onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
                </button>
            </div>

            {menuOpen && (
                <div className="mobilemenu">
                    <Link className="mobilelink" to='/'>Home</Link>
                    <Link className="mobilelink" to='/about' >About</Link>
                    <Link className="mobilelink" to="/work" >Workshop</Link>
                    <Link className="mobilelink" to='/gallery' >Gallery</Link>
                    <Link className="mobilelink" to="/Contact">Contact</Link>
                </div>
            )}

            <div className="navdownload">
                <a href="https://drive.google.com/file/d/1agr_5zZrtS-5GaTBnyZ3gvVDB5pQa2V6/view?usp=drive_link">Download Profile</a>
            </div>
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