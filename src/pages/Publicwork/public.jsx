import React from 'react'
import "./public.css";
// import the images
import publicimg from "../../assets/pro2.jpg";
// import the image four
import img1 from '../../assets/pro18.jpg'
import img2 from '../../assets/pro30.jpg';
import img3 from '../../assets/pro39.jpg';
import pro36 from '../../assets/pro36.jpg'
import pro38 from '../../assets/pro38.jpg'
import pro27 from '../../assets/pro27.jpg'
import pro18 from '../../assets/pro18.jpg';
import pro11 from '../../assets/pro11.jpg'
import { useNavigate } from 'react-router-dom';
// import the image of sixth section
import participate from "../../assets/pro2.jpg";

const Public = () => {
    const cardThree = [
        {
            icon: "ri-lightbulb-flash-line",
            title: "Learn by Doing",
            className: "purple-three",
            description: "Experience powerful games, simulations, and activities that make learning practical, fun, and unforgettable."
        },
        {
            icon: "ri-fire-line",
            title: "Break Barriers",
            className: "purple-three",
            description: "Step outside your comfort zone with unique challenges like glass walks, storytelling, and team strategy games."
        },
        {
            icon: "ri-brain-line",
            title: "Life Skills That Matter",
            className: "purple-three",
            description: "Develop skills in communication, leadership, problem-solving, and collaboration that you can apply instantly."
        },
        {
            icon: "ri-user-heart-line",
            title: "Connect & Grow",
            className: "purple-three",
            description: "Meet diverse participants, exchange ideas, and build meaningful networks in an open, supportive environment."
        },
        {
            icon: "ri-star-smile-line",
            title: "Lasting Impact",
            className: "purple-three",
            description: "Walk away with renewed motivation, deeper insights, and confidence to transform your personal and professional journey."
        }
    ]

    const cardFour = [
        {
            title: "Entrepreneurial and Scale Up Masterclass",
            day: "4 hours",
            role: "Freelancers, Entrepreneurs, Job Seekers",
            description: "Discover how to build a compelling personal brand that resonates with your audience and opens new career opportunities.",
            image: img1
        },
        {
            title: "Creative Problem Solving",
            day: "4 hours",
            role: "Anyone seeking innovation skills",
            description: "Unlock your creative potential and learn innovative techniques to approach and solve complex problems in your personal and professional life.",
            image: img2
        },
        {
            title: "Financial Literacy for Beginners",
            day: "4 hours",
            role: "Young Professionals, Students, Individuals",
            description: "Gain foundational knowledge in personal finance, including budgeting, saving, investing, and debt management for a secure future.",
            image: img3
        },
        {
            title: "Leadership Essentials",
            day: "4 hours",
            role: "Aspiring Leaders, Team Leads",
            description: "Develop essential leadership skills such as decision-making, delegation, and motivating teams to achieve collective goals.",
            image: pro36
        },
        {
            title: "Stress Management Workshop",
            day: "4 hours",
            role: "Students, Professionals, Anyone seeking balance",
            description: "Learn practical tools and techniques to manage stress, build resilience, and maintain mental well-being in daily life.",
            image: pro11
        },
        {
            title: "Innovation & Design Thinking",
            day: "4 hours",
            role: "Entrepreneurs, Innovators, Managers",
            description: "Explore design thinking methods and creative frameworks to spark innovation and drive impactful solutions.",
            image: pro27
        }
    ]

    const cardFive = [
        {
            spots: "8 spots remaining",
            title: "Leadership Excellence Workshop",
            month: "March 15-16, 2024",
            location: "New York City"
        },
        {
            spots: "12 spots remaining",
            title: "Innovation & Change Management",
            month: "April 22-23, 2024",
            location: "Virtual"
        },
        {
            spots: "5 spots remaining",
            title: "Team Dynamics & Collaboration",
            month: "May 10-11, 2024",
            location: "San Francisco"
        }
    ]
   
    const navigate = useNavigate();
    return (
        <>
            {/*=================== overall public container ================ */}
            <main>
                {/* ============== section one ============= */}
                <section className="public-one">
                    <span className="one-first">Workshops</span>
                    <span className='slazae'>  /  </span>
                    <span className="sub-title-one">Personal Branding</span>
                </section>

                {/* ============== section two ==================== */}
                <div className="public-two">
                    <div className="public-two-container">
                        <h3 className="public-soluc">
                            <i className="ri-group-line custom-publicicon"></i> Open Enrollment
                        </h3>
                        <h1 className="title-public-two">Personal Branding</h1>
                        <p className="para-public-two">
                            Join professionals from diverse industries in our comprehensive
                            public workshop programs designed to accelerate your career and expand your network.
                        </p>
                        <div className="public-groups-btn">
                            <button className="register-btn" onClick={()=> navigate("/Contact")} >
                                Register Now <i className="ri-arrow-right-line righer-line"></i>
                            </button>
                            <button className="public-btn2"  onClick={()=> navigate("/work")}>
                                <i className="ri-arrow-left-line"></i> Back to Workshops
                            </button>
                        </div>
                        <div className="img-wrapper-two">
                            <img src={pro18} alt="public session image" className='public-img1' />
                        </div>
                    </div>
                </div>

                {/* ================= section three ================= */}
                <section className="public-three">
                    <h1 className="three-heading1">Why Join Our Personal Branding?</h1>
                    <p className="three-para">
                        Our public workshops offer unique opportunities to learn, grow, and connect
                        with professionals from various industries and backgrounds.
                    </p>
                    <div className="three-card-container">
                        {cardThree.map((card, index) => (
                            <div className="three-card" key={index}>
                                <i className={`${card.icon} ${card.className}`}></i>
                                <h3 className="three-sub-heading">{card.title}</h3>
                                <p className="three-sub-para">{card.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* =============== section four ============= */}
                <section className="public-four">
                    <h1 className="four-heading">Available Personal Branding</h1>
                    <p className="four-para">
                        Explore our range of public workshop offerings, each designed to provide valuable skills and insights for professional growth.
                    </p>
                    <div className="four-img-container">
                        {cardFour.map((card, index) => (
                            <div className="cardimg-content" key={index}>
                                <img src={card.image} alt="four section image" className='public-four-img' />
                                <div className="four-content">
                                    <h2 className="cardimg-title">{card.title}</h2>
                                    <div className="time-dater">
                                        <div className="timeing">
                                            <div className="time-content">
                                                <i className="ri-time-line icon-fourth"></i>
                                                <span className="shift">{card.day}</span>
                                            </div>
                                            <div className="date-content">
                                                <i className="ri-group-line icon-fourth"></i>
                                                <span className="role-fourth">{card.role}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="four-sub-para">{card.description}</p>
                                    <button className="four-btn" onClick={()=>navigate("/Contact")}>
                                        Register Now <i className="ri-arrow-right-line"></i>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ============== six section container ================ */}
                <section className="public-six">
                    <h1 className="six-heading">What You'll Gain</h1>
                    <p className="six-para">
                        Our public workshops provide comprehensive learning experiences that
                        deliver immediate value and long-term career benefits.
                    </p>
                    <table>
                        <tbody>
                            <tr>
                                <td><i className="ri-checkbox-circle-line purple-circle-icon"></i></td>
                                <td className='table-data'>Practical skills you can apply immediately in work, studies, and daily life</td>
                            </tr>
                            <tr>
                                <td><i className="ri-checkbox-circle-line purple-circle-icon"></i></td>
                                <td className='table-data'>Increased confidence and clarity to express yourself and lead effectively</td>
                            </tr>
                            <tr>
                                <td><i className="ri-checkbox-circle-line purple-circle-icon"></i></td>
                                <td className='table-data'>A creative mindset to think differently and solve problems innovatively</td>
                            </tr>
                            <tr>
                                <td><i className="ri-checkbox-circle-line purple-circle-icon"></i></td>
                                <td className='table-data'>Resilience and balance through stress management tools and techniques</td>
                            </tr>
                            <tr>
                                <td><i className="ri-checkbox-circle-line purple-circle-icon"></i></td>
                                <td className='table-data'>Stronger connections and collaboration with diverse participants</td>
                            </tr>
                            <tr>
                                <td><i className="ri-checkbox-circle-line purple-circle-icon"></i></td>
                                <td className='table-data'>Personal transformation with renewed motivation and sense of purpose</td>
                            </tr>
                            <tr>
                                <td><i className="ri-checkbox-circle-line purple-circle-icon"></i></td>
                                <td className='table-data'>Interactive and engaging learning through games, stories, and simulations</td>
                            </tr>
                            <tr>
                                <td><i className="ri-checkbox-circle-line purple-circle-icon"></i></td>
                                <td className='table-data'>Ability to apply concepts immediately to real-world challenges</td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="img-wrapper-fifth">
                        <img src={pro38} alt="team img" className='team-img' />
                    </div>
                </section>

                {/* ============= seven section container =========== */}
                <section className="public-seven">
                    <h1 className="seven-heading">Ready to Accelerate Your Growth?</h1>
                    <p className="seven-para">
                        Join our next public workshop and connect with like-minded professionals while developing the skills you need to excel in your career.
                    </p>
                    <div className="button-group">
                        <button className="register-seven-btn">
                            Register Today <i className="ri-arrow-right-line righer-lineing"></i>
                        </button>
                        <button className='view-btn-seven'>View Past Events</button>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Public
