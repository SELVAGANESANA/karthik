import React, { useState } from "react";
import "./contact.css";
import { MdEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { FiMessageCircle } from "react-icons/fi";
import { IoMdTime } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";

export default function Contact() {
  const contInfo = [
    {
      icon: <MdEmail />,
      name: "Email us",
      para: "Send us an email and we'll respond within 24 hours",
      contact: "Karthik@agrisa.co.in",
      link: "mailto:Karthik@agrisa.co.in",
    },
    {
      icon: <IoCallSharp />,
      name: "Call us",
      para: "Speak directly with our team in business hours",
      contact: "+919840187701",
      link: "tel:+919840600638",
    },
    {
      icon: <FiMessageCircle />,
      name: "WhatsApp us",
      para: "Message us on WhatsApp for quick responses",
      contact: "9840600638",
      link: "https://wa.me/919840600638",
    },
  ];

  const officeHours = [
    {
      icon: <IoMdTime />,
      name: "Office Hours",
      schedule: [
        { day: "Monday - Friday", time: "09:00 AM - 06:00 PM" },
        { day: "Saturday", time: "10:00 AM - 04:00 PM" },
        { day: "Sunday", time: "Closed" },
      ],
    },
  ];

  const locat = [
    {
      icon: <FaLocationDot />,
      name: "Our location",
      address: "Karthik GF- B West Moor",
      add1: "Wingate Gardens, 4,60,",
      add2: "School Road, RA Puram, Chennai - 28",
    },
  ];

  // ---- Google Sheet Form ----
  // ---- Google Sheet Form ----
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false); // NEW state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // show loading message

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbx0WA5uH2GUs9x_kB81lKjUPiBSkU5qVlxsttnZwbqu6tnIaOB0v_F2zG9Vf4FpaiqK/exec",
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
          mode: "no-cors",
        }
      );

      alert("✅ Message sent successfully!");
      setFormData({ fullname: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Error:", error);
      alert("❌ Something went wrong!");
    } finally {
      setLoading(false); // hide loading message
    }
  };


  return (
    <div className="overall-cont">
      {/* Title Section */}
      <div className="title-con">
        <h1>Get in Touch</h1>
        <div className="title-con-p">
          <p>
            Ready to transform your organization? Let’s start a conversation
            about how we can help you achieve your goals.
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="input-cont">
        <div className="input-title">
          <h1>Send Us a Message</h1>
          <div className="input-cont-p">
            <p>
              Fill out the form below and we'll get back to you as soon as
              possible
            </p>
          </div>
        </div>
        <div className="Input">
          <div className="in-put">
            <form onSubmit={handleSubmit}>
              <label htmlFor="fullname">Full Name*</label>
              <input
                type="text"
                id="fullname"
                placeholder="Enter your Full Name"
                value={formData.fullname}
                onChange={handleChange}
                required
              />

              <label htmlFor="email">Email ID*</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your Email Id"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <label htmlFor="phone">Phone Number*</label>
              <input
                type="tel"
                id="phone"
                placeholder="Enter your Mobile Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />

              <label htmlFor="message">Write your message</label>
              <textarea
                id="message"
                placeholder="Enter messages..."
                value={formData.message}
                onChange={handleChange}
              ></textarea>

              <button type="submit" className="in-put-button" disabled={loading}>
                {loading ? "⏳ Please wait..." : "Send Message"}
              </button>

            </form>
          </div>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="cont-info">
        <h1>Contact Information</h1>
        <div className="cont-info-p">
          Choose the method that works best for you to get in touch with our
          team.
        </div>

        <div className="con-details">
          {contInfo.map((card, index) => (
            <div className="cards" key={index}>
              <div className="icons">{card.icon}</div>
              <div className="content">
                <h2 className="cardName">{card.name}</h2>
                <p className="cardPara">{card.para}</p>
                <a className="cardA" href={card.link}>
                  {card.contact}
                </a>
              </div>
            </div>
          ))}

          {/* Office Hours */}
          <div className="office-hours">
            {officeHours.map((oh, index) => (
              <div className="CAR" key={index}>
                <div className="icons">{oh.icon}</div>
                <div className="content">
                  <h2 className="cardName">{oh.name}</h2>
                  {oh.schedule.map((day, idx) => (
                    <p key={idx}>
                      <strong>{day.day}:</strong> {day.time}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Location */}
          <div className="our-locat">
            {locat.map((ol, index) => (
              <div className="Our" key={index}>
                <div className="icon">{ol.icon}</div>
                <div className="address">
                  <h2>{ol.name}</h2>
                  <p>{ol.address}</p>
                  <p>{ol.add1}</p>
                  <p>{ol.add2}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Media */}
        <div className="withus">
          <h1>Connect Us</h1>
          <div className="withus-p">
            <p>
              Follow us on social media for the latest updates, insights, and
              behind-the-scenes content from our workshops and events.
            </p>
          </div>
          <div className="ico">
            <div className="icons-with">
              <i>
                <FaLinkedinIn />
              </i>
            </div>
            <div className="icons-with">
              <i>
                <FaFacebookF />
              </i>
            </div>
            <div className="icons-with">
              <i>
                <FaInstagram />
              </i>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="ready">
          <h1>Ready to Start Your Transformation Journey?</h1>
          <div className="ready-p">
            <p>
              Don't wait to unlock your organization's potential. Contact us
              today and let's discuss how we can help you achieve extraordinary
              results.
            </p>
          </div>
          <div className="but">
            <a href="mailto:Karthik@agrisa.co.in?subject=Inquiry&body=Hi, I want to know more..." >
              <button>Email Us Now</button>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
