import React from "react";
import './Footer.css';
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ImLinkedin } from "react-icons/im";

import { Link } from "react-router-dom";
// import { HashRouter as Router } from "react-router-dom";

export default function Foot(){
    const Foot=[
        {
        title:"Portfolio",
        clik1:"Creating exceptional",
        clik2:"experiences through innovative",
        clik3:"workshops and professional",
        clik4:"Service"
        }
    ]
    const pages=[
        {
            title:"Quick Links",
            page1:"Home",
            page2:"About",
            page3:"Workshops",
            page4:"Gallery",
            page5:"Contact"
        }
    ]
    const connect=[
        {
            title:"Contact us",
            email:"karthy81@gmail.com",
            phNO:"+91 98406 00638",
            linkedin:"linkedin"
        }
    ]
    return(
        <>
        <div className="overall-foot">
            <div className="foot-all">
              <div className="foot-port">
                {Foot.map((FOOT,index)=>(
                    <div className="port" key={index}>
                        <h1>{FOOT.title}</h1>
                        <li><a href="Creating exceptional">{FOOT.clik1}</a></li>
                        <li><a href="experiences through innovative">{FOOT.clik2}</a></li>
                        <li><a href="workshops and professional">{FOOT.clik3}</a></li>
                        <li><a href="service">{FOOT.clik4}</a></li>
                    </div>
                ))}
              </div>
              <div className="foot-quick-link">
                 {pages.map((page,index)=>(
                    <div className="quick-link" key={index}>
                        <h1>{page.title}</h1>
                        <li><a href="home">{page.page1}</a></li>
                        <li><a href="about">{page.page2}</a></li>
                        <li><a href="workshop">{page.page3}</a></li>
                        <li><a href="Gallery">{page.page4}</a></li>
                        <li><a href="service">{page.page5}</a></li>
                    </div>
                ))}
              </div>
              <div className="contact-us">
                  {connect.map((con,index)=>(
                    <div className="cont" key={index}>
                        <h1>{con.title}</h1>
                        <li> <FaPhoneAlt />&nbsp;&nbsp;&nbsp; <a href="mailto:karthy81@gmail.com">{con.email}</a></li>
                        <li> <MdEmail />&nbsp;&nbsp;&nbsp;<a href="about">{con.phNO}</a></li>
                        <li> <ImLinkedin/>&nbsp;&nbsp;&nbsp;<a href="http://linkedin.com/in/karthik-k-swami-b074718">{con.linkedin}</a></li>
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