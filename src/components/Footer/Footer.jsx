import React from "react";
import "./Footer.css";
import Logo from "../../img/sritlogo.png";

const Footer = () => {
  return (
    <div className="footer" style={{ backgroundColor: "var(--orange" }}>
      <div className="f-left">
        <img
          src={Logo}
          alt=""
          style={{
            width: "3.5rem",
            heigh: "3.5rem",
          }}
        />
      <span>
  Thank you for visiting Vidyarthi Coaching Website! For any inquiries about our courses, feel free to contact us via email, phone, or by visiting our center. We’re here to support your learning journey and help you build a strong academic foundation.
</span>

      </div>
      <div className="f-mid">
        <span>Contact</span>
        <div className="f-contact">
          <div>
            <a href="https://www.google.com/maps/dir/25.6184017,85.1583054/%E0%A4%85%E0%A4%B2%E0%A5%81%E0%A4%86%E0%A4%B5%E0%A4%BF%E0%A4%97%E0%A4%B9%E0%A4%BE.+ALUABIGHA,+Chariyari,+Bihar/@25.3456219,84.7360523,10z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x39f2cf9bac327a5f:0xdfebedc617d32c69!2m2!1d85.0306689!2d25.0726094?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noreferrer">
              <i
                className="fa-solid fa-location-dot"
                style={{ color: "#454545", fontSize: "18px" }}
              >
                <span
                  style={{
                    fontSize: "18px",
                    color: "var(--black)",
                    fontFamily: "monospace",
                  }}
                >
                  {" "}
                  Nawabgang Makhdumpur, Bihar
                </span>
              </i>
            </a>
          </div>
          <div>
            <a
              href="https://www.truecaller.com/search/in/%209234044861"
              target="_blank"
              rel="noreferrer"
            >
              <i
                className="fa-solid fa-phone"
                style={{ color: "#454545", fontSize: "18px" }}
              >
                <span
                  style={{
                    fontSize: "16.5px",
                    color: "var(--black)",
                    fontFamily: "monospace",
                  }}
                >
                  {" "}
                  9234044861
                </span>
              </i>
            </a>
          </div>
          <div>
            <a
              href="https://www.google.com/maps/dir/25.6184017,85.1583054/%E0%A4%85%E0%A4%B2%E0%A5%81%E0%A4%86%E0%A4%B5%E0%A4%BF%E0%A4%97%E0%A4%B9%E0%A4%BE.+ALUABIGHA,+Chariyari,+Bihar/@25.3456219,84.7360523,10z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x39f2cf9bac327a5f:0xdfebedc617d32c69!2m2!1d85.0306689!2d25.0726094?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noreferrer"
            >
              <i
                className="fa-solid fa-envelope"
                style={{ color: "#454545", fontSize: "18px" }}
              >
                <span
                  style={{
                    fontSize: "18px",
                    color: "var(--black)",
                    fontFamily: "monospace",
                    marginLeft: "5px",
                  }}
                >
                  Vidyarthi Classes
                </span>
              </i>
            </a>
          </div>
        </div>
      </div>
      <div className="f-right">
        <span
          style={{
            marginLeft: "-8.1rem",
          }}
        >
          Follow Us
        </span>
        <div className="f-social" style={{ display: "flex", gap: "0.5rem" }}>
          <div>
            <a
              href="https://github.com/annnkumar"
              target="_blank"
              rel="noreferrer"
            >
              <i id="f-social" className="i-social fa-brands fa-github"></i>{" "}
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/ankitkumar2732?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noreferrer"
            >
              <i id="f-social" className="i-social fa-brands fa-linkedin"></i>
            </a>
          </div>
          <div>
            <a
              href="https://www.instagram.com/vidhyarthi_study_centre_706139?utm_source=qr&igsh=ZXNzdWZ2dHBlMHk2"
              target="_blank"
              rel="noreferrer"
            >
              <i id="f-social" className="i-social fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
