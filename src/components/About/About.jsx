import React from "react";
import Owner from "../../img/owner.jpg";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="a-up">
        <img src={Owner} alt="" />
      </div>

      <div className="a-down">
        <div className="a-para">
          <span>
          Vidyarthi Coaching is a dedicated institute committed to providing quality education for students of classes 10th to 12th, including competitive exam preparation. We offer expert guidance in core subjects like Physics, Chemistry, Math, Biology, and English for both Hindi and English mediums. Our teaching approach focuses on concept clarity, regular testing, doubt-solving sessions, and personalized support to ensure each student’s academic success. With experienced faculty and a disciplined learning environment, we aim to build strong foundations for both board exams and entrance tests like JEE, NEET, and CUET. At Vidyarthi Coaching, we believe in nurturing potential and shaping futures.
          </span>

          <span>About our Director</span>
          <span className="a-founder">
          I am Rajeev Kumar, the founder of Vidyarthi Coaching. I completed my education from Class 1 to 12 under the Bihar Board. Starting this coaching institute has been an inspiring journey filled with challenges, but I never gave up. With strong determination, continuous motivation, and the unwavering support of my parents and brother, I kept moving forward. Every step was a learning experience, and my belief in God gave me strength during tough times. Today, Vidyarthi Coaching stands as a symbol of dedication and the dream to make quality education accessible to every student.
          </span>
        </div>
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
  );
};

export default About;
