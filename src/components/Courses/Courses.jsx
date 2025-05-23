import "./Courses.css";
import { LanguagesData } from "../../Data/LanguagesData";
 import { ModularData } from "../../Data/ModularData";

const Courses = () => {
  return (
    <div className="courses-container">
      <div className="c-header">
        <span>Ready to start</span>
        <span>your journey</span>
        <span>with us</span>
      </div>

      
      <div className="c-type1">
        <span>Our Course Handouts</span>
      </div>

      {/* courses card */}
      <div className="courses">
        {LanguagesData.map((course, i) => (
          <div className="course" key={i}>
            <span>{course.title}</span>
            <span>{course.detail}</span>
            <span>{course.duration}</span>
          </div>
        ))}
      </div>

      <div style={{ color: "var(--black)" }} className="c-line">
        -------------------------------------------------------------------------------------------------------------------
      </div>
     
     

      {/* Modular Courses Section */}
      <div className="c-type2">
        <span>Modular Courses</span>
      </div>

      {/* courses card */}
      <div className="courses">
        {ModularData.map((course, i) => (
          <div className="course" key={i}>
            <span>{course.title}</span>
            <span>{course.detail}</span>
            <span>{course.duration}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
