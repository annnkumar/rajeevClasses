import React from "react";
import "./Copyright.css";

const Copyright = () => {
  return (
    <div className="copyright">
      <span>© 2022 Vidyarthi Classes. All rights reserved.</span>{" "}
      <a
        className="developer"
        href="https://github.com/annnkumar"
        target="_blank"
        rel="noreferrer"
      >
        <span>
          <br />
          Developed by Ankit Kumar
        </span>
      </a>
    </div>
  );
};

export default Copyright;
