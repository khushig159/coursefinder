import "../style/StartPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChalkboardTeacher,
  faGraduationCap,
  faRobot,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
export default function Main() {
    const navigate=useNavigate()
  return (
    <>
      <div className="home">
        <div className="landing-hero">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <div className="box-start">An Online Tution Platform</div>
            {/* <img src={logoImage} alt="" /> */}
            <h1>
              
              Discover the <span>Best Courses</span> <br />
              To Learn, Grow & <span>Upskill</span> <br />At Your Own{" "}
              <span>Pace</span>
            </h1>
            <p className="des-span">
              This platform makes it easy to discover the right courses, helping learners upskill, explore new domains, and move closer to their career goals — all in one place.
            </p>
            <div className="start-button">
              <button className="cta-btn" onClick={()=>navigate('/courses')}>Get Started</button>
            </div>
            <div className="cards">
              <div className="flex-card1">
                <div className="card1">
                  <FontAwesomeIcon
                    icon={faChalkboardTeacher}
                    className="iconicon"
                  />
                  <div>
                    <h3>20+</h3>
                    <p>Curated Courses</p>
                  </div>
                </div>
                <div className="card1">
                  <FontAwesomeIcon
                    icon={faGraduationCap}
                    className="iconicon2"
                  />
                  <div>
                    <h3>200+</h3>
                    <p>Happy Students</p>
                  </div>
                </div>
                <div className="card1">
                  <FontAwesomeIcon icon={faRobot} className="iconicon3" />
                  <div>
                    <h3>Fast</h3>
                    <p>Smart Search</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
