import React from 'react'
import "./corporate.css";
// import the image
import corsess1 from "../../assets/pro45.jpg";
// import fourth images
import img1 from '../../assets/pro45.jpg';
import img2 from '../../assets/pro3.jpg';
import img3 from '../../assets/pro4.jpg';
import pro28 from '../../assets/pro28.jpg';
import pro44 from '../../assets/pro44.jpg';
import pro9 from '../../assets/pro9.jpg';
import pro16 from '../../assets/pro16.jpg';
import pro19 from '../../assets/pro19.jpg';
// import the team image
import teamimg from "../../assets/pro4.jpg";
const Corporate = () => {
  const cardThird = [
    {
        icons: "ri-focus-2-line",
        title: "Tailored for Business Impact",
        className: "purple-iconer",
        description: "Each program is customized to align with your organization’s vision, culture, and specific challenges."
    },
    {
        icons: "ri-group-line",
        title: "Stronger Teams",
        className: "purple-iconer",
        description: "Experiential activities that build trust, improve collaboration, and strengthen team dynamics."
    },
    {
        icons: "ri-lightbulb-flash-line",
        title: "Innovation at Work",
        className: "purple-iconer",
        description: "Game-based formats and design thinking methods to foster creativity and problem-solving in real time."
    },
    {
        icons: "ri-bar-chart-box-line",
        title: "Proven Results",
        className: "purple-iconer",
        description: "Backed by 850+ workshops delivering measurable outcomes and sustainable growth for organizations."
    }
]
const cardFourth = [
    {
        title: "Strategic Leadership Development",
        day: "Full Day",
        role: "Senior Managers, Team Leaders",
        description: "An immersive program to strengthen decision-making, strategic vision, and leadership presence through simulations and role-play exercises.",
        image: pro16
    },
    {
        title: "Effective Communication for Teams",
        day: "Half Day",
        role: "All Employees, Project Teams",
        description: "Interactive sessions that build empathy, listening, and collaboration skills, helping teams resolve conflicts and communicate with impact.",
        image: pro9
    },
    {
        title: "Innovation & Digital Transformation",
        day: "2 Days",
        role: "Business Owners, IT Managers, Innovators",
        description: "A hands-on workshop that blends design thinking, creativity, and digital tools to help organizations embrace innovation and change.",
        image: pro44
    },
    {
        title: "Negotiation & Conflict Resolution",
        day: "1 Day",
        role: "Managers, HR, Client-Facing Teams",
        description: "Practical roleplays and simulations to master negotiation techniques, manage conflicts constructively, and achieve win–win solutions.",
        image: pro19
    },
    {
        title: "Team Building & Engagement Lab",
        day: "1 Day",
        role: "Cross-Functional Teams, New Joinees",
        description: "High-energy indoor and outdoor activities — from simulations to glass walks — designed to build trust, morale, and team synergy.",
        image: pro28
    }
]


   const cardSixth = [
    {
        num: "01",
        title: "Discovery & Needs Analysis",
        description: "We begin by understanding your organization’s vision, culture, and challenges to identify the right learning priorities."
    },
    {
        num: "02",
        title: "Custom Program Design",
        description: "Every workshop is tailor-made using experiential methods — games, simulations, and storytelling — aligned with your goals."
    },
    {
        num: "03",
        title: "Engaging Delivery",
        description: "Expert facilitators create interactive, high-energy sessions where participants learn by doing, reflecting, and applying."
    },
    {
        num: "04",
        title: "Reflection & Application",
        description: "Each activity is followed by guided debriefs, connecting workshop insights with real-world workplace applications."
    },
    {
        num: "05",
        title: "Follow-up & Sustained Impact",
        description: "We provide tools, resources, and support to reinforce learning, measure outcomes, and ensure lasting transformation."
    }
]

    return (
        <>
            {/* ========== overall corporate container ========= */}
            <main>
                {/* =========== section first ============ */}
                <section className="first">
                    <span className='title-first'>Workshops</span>
                    <span className='slazae'>  /  </span>
                    <span className='sub-title-first'>Corporate Workshops</span>
                </section>

                {/* ============== section second ============= */}
                <section className="second">
                    <div className="second-container">
                        <h3 className="second-soluc"><i className="ri-building-line custom-iconed"></i>  Corporate Solutions</h3>
                        <h1 className="title-second">Corporate Workshops</h1>
                        <p className="para1-second">Transform your organization with customized workshops designed</p>
                        <p className="para2-second">specifically for your team's unique challenges and strategic objectives.</p>
                        <div className="button-groups">
                            <button className="schedule-btn">Schedule Consultation <i class="ri-arrow-right-line righer-line"></i></button>
                            <button className="back-btn"><i className="ri-arrow-left-line lefter"></i> Back to Workshops</button>
                        </div>
                        <img src={corsess1} alt="corporate session 1" className='coress1-img' />
                    </div>
                </section>

                {/* ================= section third ============ */}
                <section className="third">
                    <h1 className="third-heading1">Why Choose Corporate Workshops?</h1>
                    <p className="third-para">Our corporate workshops are designed to address the specific needs of organizations
                        looking to drive meaningful change and achieve measurable results.
                    </p>
                    <div className="third-card-container">
                        {cardThird.map((card, index) => (
                            <div className="third-card" key={index}>
                                <i className={`${card.icons} ${card.className}`}></i>
                                <h3 className="third-sub-heading">{card.title}</h3>
                                <p className="third-sub-para">{card.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ============= section fourth ============= */}
                <section className="fourth">
                    <h1 className="fourth-heading">Available Corporate Workshops</h1>
                    <p className="fourth-para">Explore our range of corporate workshop offerings, each designed to address specific
                        organizational challenges and opportunities.
                    </p>
                    <div className="fourth-img-container">
                        {cardFourth.map((card, index) => (
                            <div className="cardimg-content" key={index}>
                                <img src={card.image} alt="fourth section images" className='fourth-img' />
                                <div className="fourth-content">
                                    <h2 className="cardimg-title">{card.title}</h2>
                                    {/* ======== shift and roles */}
                                    <div className="time-dater">
                                        <div className="timeing">
                                            <div className="time-content">
                                                <i class="ri-time-line icon-fourth"></i>
                                                <span className="shift">{card.day}</span>
                                            </div>
                                            <div className="date-content">
                                                <i class="ri-group-line icon-fourth"></i>
                                                <span className="role-fourth">{card.role}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="fourth-sub-para">{card.description}</p>
                                    <button className="fourth-btn">Learn More <i class="ri-arrow-right-line"></i></button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ============ section fifth ============ */}
                <section className="fifth">
                    <h1 className="fifth-heading">Expected Outcomes & Benefits</h1>
                    <p className="fifth-para">Our corporate workshops deliver tangible results that impact your bottom line and create
                        lasting organizational change.
                    </p>
                    <table>
                        <tr>
                            <td><i class="ri-checkbox-circle-line purple-circle-icon"></i></td>
                            <td className='table-data'>Enhanced leadership capabilities across all management levels</td>
                        </tr>
                        <tr>
                            <td><i class="ri-checkbox-circle-line purple-circle-icon"></i></td>
                            <td className='table-data'>Improved communication and collaboration between departments</td>
                        </tr>
                        <tr>
                            <td><i class="ri-checkbox-circle-line purple-circle-icon"></i></td>
                            <td className='table-data'>Increased employee engagement and job satisfaction</td>
                        </tr>
                        <tr>
                            <td><i class="ri-checkbox-circle-line purple-circle-icon"></i></td>
                            <td className='table-data'>Stronger organizational culture and shared values</td>
                        </tr>
                        <tr>
                            <td><i class="ri-checkbox-circle-line purple-circle-icon"></i></td>
                            <td className='table-data'>Better change management and adaptability</td>
                        </tr>
                        <tr>
                            <td><i class="ri-checkbox-circle-line purple-circle-icon"></i></td>
                            <td className='table-data'>Higher productivity and performance metrics</td>
                        </tr>
                        <tr>
                            <td><i class="ri-checkbox-circle-line purple-circle-icon"></i></td>
                            <td className='table-data'>Reduced turnover and improved talent retention</td>
                        </tr>
                        <tr>
                            <td><i class="ri-checkbox-circle-line purple-circle-icon"></i></td>
                            <td className='table-data'>Innovation mindset and creative problem-solving skills</td>
                        </tr>
                    </table>
                    <div className="img-wrapper-fifth">
                        <img src={teamimg} alt="team image" className="team-img" />
                    </div>
                </section>

                {/* =============== section sixth ========== */}
                <section className="sixth">
                    <h1 className="sixth-heading">Our Process</h1>
                    <p className="para-sixth">At AGRISA Interactive Trainings, we follow a structured yet flexible process to ensure every workshop delivers meaningful impact:                    </p>
                    <div className="sixth-card-container">
                        {cardSixth.map((card, index) => (
                            <div className="sixth-content" key={index}>
                                <h3 className="num-sixth">{card.num}</h3>
                                <h2 className="sixth-title">{card.title}</h2>
                                <p className="sixth-para">{card.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* =============== section seventh ======== */}
                <section className="seventh">
                    <h1 className="seventh-heading">Ready to Transform Your Organization?</h1>
                    <p className="seventh-para">Let's discuss how our corporate workshops can help your organization achieve its
                        transformation goals and drive measurable results.
                    </p>
                    <div className="button-group">
                        <button className="schedule">Schedule Free Consultation <i class="ri-arrow-right-line righer-lineing"></i></button>
                        <button className='success-btn-seventh'>View Success Stories </button>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Corporate;