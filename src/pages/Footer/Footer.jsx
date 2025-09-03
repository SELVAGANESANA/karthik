import React from "react";
import './Footer.css';
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ImLinkedin } from "react-icons/im";
import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from "react-router-dom";


export default function Foot() {
    const Foot = [
        {
            title: "Portfolio",
            clik1: "Corporate Workshops",
            clik2: "Public Workshops",
            clik3: "Leadership Development",
            clik4: "Success Stories",
            clik5:"Team Building Activities"
        }
    ]
    const pages = [
        {
            title: "Quick Links",
            page1: "Home",
            page2: "About",
            page3: "Workshops",
            page4: "Gallery",
            page5: "Contact"
        }
    ]
    const connect = [
        {
            title: "Contact us",
            email: "karthy81@agrisa.co.in",
            phNO: "+919840600638",
            linkedin: "linkedin"
        }
    ]
    return (
        <>
            <div className="overall-foot">
                <div className="foot-all">
                    <div className="foot-port">
                        {Foot.map((FOOT, index) => (
                            <div className="port" key={index}>
                                <h1>{FOOT.title}</h1>
                                <li>{FOOT.clik1}</li>
                                <li>{FOOT.clik2}</li>
                                <li>{FOOT.clik3}</li>
                                <li>{FOOT.clik4}</li>
                                <li>{FOOT.clik5}</li>

                            </div>
                        ))}
                    </div>
                    <div className="foot-quick-link">
                        {pages.map((page, index) => (
                            <div className="quick-link" key={index}>
                                <h1>{page.title}</h1>
                                <li><Link to="/">{page.page1}</Link></li>
                                <li><Link to="/about">{page.page2}</Link></li>
                                <li><Link to="/work">{page.page3}</Link></li>
                                <li><Link to="/gallery">{page.page4}</Link></li>
                                <li><Link to="/Contact">{page.page5}</Link></li>
                            </div>
                        ))}
                    </div>
                    <div className="contact-us">
                        {connect.map((con, index) => (
                            <div className="cont" key={index}>
                                <h1>{con.title}</h1>
                                <li> <MdEmail />&nbsp;&nbsp;&nbsp; <a href="mailto:karthy81@gmail.com">{con.email}</a></li>
                                <li> <FaPhoneAlt />&nbsp;&nbsp;&nbsp;<a href="about">{con.phNO}</a></li>
                                <li> <IoLogoWhatsapp />&nbsp;&nbsp;&nbsp;<a href="https://wa.me/919840187701" target="_blank" rel="noopener" aria-label="WhatsApp">WhatsApp</a></li>
                                <li> <ImLinkedin />&nbsp;&nbsp;&nbsp;<a href="http://linkedin.com/in/karthik-k-swami-b074718">{con.linkedin}</a></li>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="foot-terms">

                    <p>© 2025 AGRISA Interactive Trainings |</p>
                    <p><Link to="/terms">Terms & Conditions</Link> <span>|</span></p>
                    <p><Link to="/privacy">Privacy Policy</Link> <span>|</span></p>

                </div>
            </div>
        </>
    )
}