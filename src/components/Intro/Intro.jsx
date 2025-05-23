import React from "react";
import { Link } from "react-router-dom";
import "./Intro.css";
// Importing images
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import user from "../../img/user3.png";
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import glassemojy from "../../img/glassemojy.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";

const Intro = () => {
  return (
    <div className="intro">
      {/* Left Side of Intro Section */}
      <div className="i-left">
        <div className="i-name">
          {/* for darkmmode */}
          <span>Hy! I Am</span>
          <span>Rajeev</span>
          <span>
          Vidyarthi Classes is led by a founder and director
           with more than 5 years of dedicated teaching 
           experience in guiding students from 10th to 12th grade.
            As a premier coaching center, we guide and teach students
             who are navigating the crucial years of 10th, 11th, and 12th.
              We are committed to preparing them for their board examinations and future academic pursuits through a variety of well-structured courses.
          </span>
        </div>
        <Link to="courses">
          <button href="/courses" className="button i-button">
            Explore
          </button>
        </Link>
        <div className="i-icons">
          <a
            href="https://www.instagram.com/vidhyarthi_study_centre_706139?utm_source=qr&igsh=ZXNzdWZ2dHBlMHk2"
            target="_blank"
            rel="noreferrer"
          >
            <i className="i-social fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://www.instagram.com/vidhyarthi_study_centre_706139?utm_source=qr&igsh=ZXNzdWZ2dHBlMHk2"
            target="_blank"
            rel="noreferrer"
          >
            <i className="i-social fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>

      {/* Right Side of Intro Section */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={user} alt="" />
        <img src={glassemojy} alt="" />

        <div className="floating-div" style={{ top: "-4%", left: "68%" }}>
          {/* Here we are passing values as props to the FloatingDiv component */}
          <FloatingDiv image={Crown} txt1="Biology" txt2="Specialist" />
        </div>

        <div
          className="floating-div"
          style={{ top: "15.9rem", left: "1.1rem" }}
        >
          <FloatingDiv image={thumbup} txt1="Math" txt2="Specialist" />
        </div>

        {/* Blur effect design */}
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#c1f5ff",
            top: "17rem",
            left: "-9rem",
            width: "21rem",
            height: "11rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
