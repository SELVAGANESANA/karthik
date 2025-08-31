import React from 'react'
import "./work.css";
import { useNavigate } from "react-router-dom";  
// import the image
import corporate from "../../assets/pro4.jpg";
import pro20 from '../../assets/pro20.jpg'
const Work = ({ cards }) => {
    const cardData = [
        {
            icons: "ri-focus-line",
            title: "Results-Driven",
            className: "purple-icon",
            description: "Every workshop is designed with clear objectives and measurable outcomes that align with your business goals."
        },
        {
            icons: "ri-time-fill",
            title: "Time-Efficient",
            className: "purple-icon",
            description: "Our intensive formats maximize learning while minimizing time away from your core business activities."
        },
        {
            icons: "ri-award-line",
            title: "Expert-Led",
            className: "purple-icon",
            description: "Learn from industry experts with real- world experience and proven track records in organizational transformation."
        }
    ]

    const navigate = useNavigate();

    return (
        <>
            <main className="workshop-container">
                {/* ======== transform your team ============ */}
                <section className="transform">
                    <h2 className="title-transform">Transform Your Team</h2>
                    <p className="transform-para">Choose form our comprehensive workshop programs designed to unlock potential, drive innovation, and create lasting organizational change.</p>
                </section>

                {/* ============= corporate workshops =========== */}
                <section className="corporate-container">
                    <div className="container-workshop">
                        {/* ================ component one ============ */}
                        <div className="component-one">
                            <i className="ri-building-line custom-icon"></i>
                            <h3 className="corporate-title">Corporate Workshops</h3>
                            <h4 className="sub-title-corporate">Tailored Solutions for Organizations</h4>
                            <img src={corporate} alt="Corporate Workshop" className='corporate-img' />
                            <p className="corporate-para">Customized workshops designed specifically for your organization's unique challenges and goals.</p>
                            <button className='btn-learn' onClick={() => navigate("/corporate")}>Learn More <i class="ri-arrow-right-line righer-lineing"></i></button>
                        </div>
                        {/* ================== component two ============= */}
                        <div className="component-two">
                            <i class="ri-group-line custom-icon"></i>
                            <h3 className="public-title">Public Workshops</h3>
                            <h4 className="sub-title-public">Open Enrollment Programs</h4>
                            <img src={pro20} alt="Public Workshop" className='public-img' />
                            <p className="public-para">Join professionals from various industries in our comprehensive public workshop programs.</p>
                            <button className='btn-learn' onClick={() => navigate("/public")}>Learn More <i class="ri-arrow-right-line righer-lineing"></i></button>
                        </div>
                    </div>
                </section>

                {/* ============ choose the workshops ========= */}
                <section className="choose-workshop">
                    <h1 className="workshop-title">Why Choose Our Workshops?</h1>
                    <p className="para-workshop">Our workshops are designed with proven methodologies and delivered by expert
                        facilitators who understand the complexities of modern organizations.
                    </p>
                    <div className="cards-workshop">
                        {cardData.map((card, index) => (
                            <div className="card-container" key={index}>
                                <i className={`${card.icons} ${card.className}`}></i>
                                <h3 className='work-sub-title'>{card.title}</h3>
                                <p className='work-sub-para'>{card.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ============ start the container ============ */}
                <section className="started">
                    <h3 className="start-title">Ready to Get Started?</h3>
                    <p className="start-para-title">Contact us today to discuss which workshop format is right for your organization and how
                        we can help you achieve your transformation goals.
                    </p>
                    <div className="button-group">
                        <button className="schedule">Schedule Consultation <i class="ri-arrow-right-line righer-lineing"></i></button>
                        <button className='success'>View Success Stories <i class="ri-arrow-right-line righer-lineing"></i></button>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Work