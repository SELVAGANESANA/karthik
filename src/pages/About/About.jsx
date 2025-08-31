import React from "react";
import './About.css';
import { FaRegHeart } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import { RiGlobalLine } from "react-icons/ri";
import { PiMedalFill } from "react-icons/pi";
import profileimg from '../../assets/profile.jpg'
import logo2 from '../../assets/logo2.PNG';
import logo1 from '../../assets/logo1.PNG'
const About = () => {

    const aboutcomp = [{
        title: "Our Mission",
        content: "To design and deliver immersive, game-based, and experiential training programs that foster leadership, creativity, collaboration, and resilience — enabling participants to not only acquire skills but also transform perspectives and behaviors."
    },
    {
        title: "Our vission",
        content: "To revolutionize learning by making it experiential, impactful, and unforgettable, empowering individuals and organizations to thrive in an ever-changing world."
    }
    ];

    const aboutcore = [
        {
            icons: <FaRegHeart />,
            title: "Passion for Excellence",
            content: "Karthik is driven by an unwavering passion for excellence, ensuring that every program he designs is not just effective but unforgettable."
        },
        {
            icons: <GoPerson />,
            title: "People-Centered Approach",
            content: "At the heart of Karthik’s work lies a deep belief in people. His facilitation is designed to make participants feel seen, valued, and empowered."
        },
        {
            icons: <RiGlobalLine />,
            title: "Global Perspective",
            content: "With insights drawn from diverse industries, cultural contexts, and international best practices, Karthik brings a truly global perspective to his workshops."
        },
        {
            icons: <PiMedalFill />,
            title: "Proven Results",
            content: "Backed by 850+ workshops and collaborations with leading organizations across IT, BFSI, manufacturing, education, and public sectors"
        }
    ]

    return (
        <div className="aboutoverall">
            <div className="aboutheader">
                <h1>Our Learning Philosophy</h1>
                <p>“People don’t just need to learn. They need to feel seen, stretched, and maybe
                    even slightly stunned.”</p>
            </div>

            {/* aboutcomp  */}

            <div className="aboutcomp">
                <h1>Building Tomorrow's Organization Today</h1>
                <p>AGRISA, learning is approached as serious play — a process where games, storytelling, and interactive formats unlock leadership qualities, enhance team dynamics, and nurture problem-solving skills. </p>
                <p>The company designs customized learning journeys for a diverse spectrum of clients, ranging from Fortune 500 corporations and IT giants to manufacturing leaders, banks, public sector enterprises, and educational institutions. </p>
                <p>Whether it is a senior leadership team navigating complex decision-making through simulations, or a group of students experiencing collaboration through critical conversation games, AGRISA’s sessions are crafted to deliver both emotional resonance and practical outcomes.</p>
                <p>The company’s expertise covers a wide range of learning areas, including leadership and collaborative decision-making, negotiation and conflict resolution, communication and stress management, employee engagement programs, outbound team-building workshops, and campus-to-corporate transitions.</p>
                <p> What sets AGRISA apart is its unique integration of game mechanics, theatre-based learning, emotional catharsis techniques, and liberating structures — turning training into a transformative journey rather than a passive exercise.</p>
                <p>Over the years, AGRISA has collaborated with leading organizations across industries: Hyundai, Daimler India, Samsung, TVS, Citibank, Axis Bank, Canara Bank, HCL, Cognizant, Capgemini, Accenture, TCS, Vodafone, Airtel, Larsen & Toubro, Sterlite, Michelin, BPCL, Anna University, VIT, LIBA, and many others.</p>
                <p>These partnerships demonstrate AGRISA’s ability to tailor learning to the unique needs of corporate, public, and educational audiences.</p>

                <div className="aboutcomp-img">
                    <img src={logo1} alt="" />
                </div>
            </div>

            {/* Aboutvision  */}

            <div className="aboutvision">
                {aboutcomp.map((visiondata, index) => (
                    <div className="aboutvisionbox">
                        <h1 key={index}>{visiondata.title} </h1>
                        <p key={index}>{visiondata.content} </p>
                    </div>
                ))}
            </div>

            {/* Aboutcorevalue  */}

            <div className="aboutcorevalue">
                <div className="aboutcorehead">
                    <h1>Our Core Value</h1>
                    <p>At AGRISA Interactive Trainings, our foundation is built on values that guide every program, interaction, and outcome we create. </p>
                </div>

                {/* Aboutcorevalbox  */}

                <div className="aboutcorevalbox">
                    {aboutcore.map((corevalue, index) => (
                        <div className="aboutcorebox">
                            <span>{corevalue.icons} </span>
                            <h1>{corevalue.title} </h1>
                            <p>{corevalue.content} </p>
                        </div>
                    ))}
                </div>

                <div className="aboutceoimg">
                    <img src={profileimg} alt="" />
                </div>

                <div className="aboutowncontent">
                    <h1>Karthik</h1>
                    <h2>CEO & Lead Consultant</h2>
                    <p>Karthik K. Swami is a seasoned experiential facilitator, trainer, coach, and game designer, with over 19 years of professional experience and 12+ years dedicated to training and facilitation.</p>
                    <p>Karthik has earned recognition as a leading voice in game-based learning and experiential education in India.</p>
                    <p>His early career equipped him with a strong foundation in business acumen, negotiation, and leadership. However, his passion for people development and performance transformation inspired him to transition into the training industry.</p>
                    <p>In 2012, he left his corporate role as a Regional Sales Manager to fully embrace his calling as a facilitator. After several years of freelance training engagements, he founded AGRISA Interactive Trainings in 2020 to bring his creative, game-based methodologies to a larger audience.</p>

                    {/* aboutachivement  */}

                    <div className="aboutachive">
                        <h1>Certifications & Credentials</h1>
                        <p>Karthik is highly qualified in multiple domains of personal and organizational development:</p>
                        <ul>
                            <li>NLP Master Practitioner (Neuro Linguistic Programming – Science of Excellence)</li>
                            <li>IIPE-Certified Experiential Trainer (Canada)</li>
                            <li>CBT & REBT Practitioner (Cognitive and Rational Emotive Behavioural Therapy)</li>
                            <li>Certified Professional in Theatre-based Learning</li>
                            <li>TA 101 (Transactional Analysis)</li>
                            <li>Pace Palette, Enneagram & Ego States Profiling</li>
                            <li>Trained in Art Therapy Foundation & Heal Your Life (HYL) workshops</li>
                        </ul>
                    </div>

                </div>



            </div>

            <div className="abouttrainer">
                <h1>Expertise & Training Approach</h1>
                <p>Karthik is not a conventional trainer who relies on slides and lectures. Instead, he creates learning environments that are active, playful, and deeply reflective.</p>
                <p>His methodology combines games, theatre, simulations, storytelling, catharsis exercises, and team challenges, ensuring that participants don’t just sit and listen, but stand up, engage, and transform.</p>
                <p>From board games, murder mysteries, and space survival missions to barefoot fire/glass walks, emotional release formats, and liberating structures, his toolkit is vast and versatile.</p>
                <p>is sessions often push participants into meaningfully uncomfortable spaces — designed to test leadership, negotiation, decision-making, collaboration, and creativity under pressure.</p>
                <p>He is known for blending energy with depth, ensuring that the experience is both memorable and practical, leaving participants with insights that translate into real-world behavior change.</p>
            </div>

            <div className="aboutexper">
                <h1>Experience & Impact</h1>
                <ul>
                    <li> Delivered 850+ sessions to date, including 700+ corporate workshops and 150+ public programs.</li>
                    <li> Trained over 6,000+ participants across India.</li>
                    <li>Recognized by TATA Consultancy Services in 2016 for conducting 100+ ILP (Initial Learning Programs) for their employees.</li>
                    <li>Facilitated programs across IT, BFSI, Manufacturing, Telecom, Education, Consulting, and Government sectors.</li>
                    <li>Designed workshops for CXOs, senior leaders, executives, employees, students, and open community groups.</li>
                   
                </ul>
            </div>

            {/* aboutimpactnum  */}

            <div className="aboutimpnum">

                <div className="aboutimgbox aboutimgbox1"> 
                    <h1>19+</h1>
                    <p>professional experience</p></div>
                <div className="aboutimgbox aboutimgbox2"> 
                    <h1>850+</h1>
                    <p>sessions delivered so far.</p></div>
                <div className="aboutimgbox aboutimgbox3">
                    <h1>700+</h1>
                    <p>corporate workshops</p></div>
                <div className="aboutimgbox aboutimgbox4">
                    <h1>150+</h1>
                    <p>public programs</p>
                </div>
                <div className="aboutimgbox aboutimgbox5">
                    <h1>6,000+</h1>
                    <p>Trained participants nationwide</p>
                </div>



            </div>




        </div>
    )
}

export default About;