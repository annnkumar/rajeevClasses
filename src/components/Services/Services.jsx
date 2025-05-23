import React from "react";
import "./Services.css";
// Importing images
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
// Importing pdf file
import myServices from "./myServices.pdf";

const Services = () => {
  return (
    <div className="services">
      {/* Left Side of Service Section */}
      <div className="s-left">
        <span>My Special</span>
        <span>services</span>
        <span>
        At Vidyarthi Classes, we offer quality coaching in subjects like
          English, Physics, Chemistry, and Biology. Our goal is to help
          students build strong fundamentals and excel in exams with the right
          guidance and support.
        </span>
        {/* This will enable the user to download the uploaded file */}
        <a href={myServices} download>
          <button className="button s-button">Download</button>
        </a>

        {/* Blur effect design, className="blur" styling is done in the Intro.css file */}
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* Right Side of Service Section */}
      <div className="s-right">
        {/* First Card */}
        <div style={{ left: "12rem" }}>
          {/* Here we are passing values as props to the Card component */}
          <Card
            emoji={HeartEmoji}
            heading={"Subject Coaching"}
            detail={
              "Expert coaching for English, Physics, Chemistry & Biology (Classes 6–12 CBSE/State Boards)"
            }
          />
        </div>

        {/* Second Card */}
        <div style={{ top: "12rem", left: "-4rem" }}>
          {/* Here we are passing values as props to the Card component */}
          <Card
            emoji={Glasses}
            heading={"Exam Preparation"}
            detail={
              "Board Exams, Olympiads, NTSE & School-level competitive exams with regular test series"
            }

          />
        </div>

        {/* Third Card */}
        <div style={{ top: "19rem", left: "12rem" }}>
          {/* Here we are passing values as props to the Card component */}
          <Card
            emoji={Humble}
            heading={"Doubt Sessions & Study Materials"}
            detail={
              "Clear concepts with personalized doubt sessions and smart notes, worksheets & assignments"
            }
          />
        </div>
        {/* Blur effect design, className="blur" styling is done in the Intro.css file */}
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
