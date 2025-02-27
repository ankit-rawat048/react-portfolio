import React from "react";
import About from "./About";
import "../styles/Styles.css";

// Importing all tech images from assets folder
import mongodbLogo from "../assets/1687786979245.jpg";
import cssLogo from "../assets/kisspng-mongodb-inc-logo-table-attribute-1713921815918.webp";
import htmlLogo from "../assets/kisspng-cascading-style-sheets-logo-css3-html-javascript-1713898812459.webp";
import jsLogo from "../assets/images.png";
import reactLogo from "../assets/avgagjntp.webp";
import nodejsLogo from "../assets/aa9p2moi4.webp";
import expressLogo from "../assets/aa7dshlyj.webp";


const Home = () => {
  return (
    <div className="section home">
      <h2>Hi, I'm Ankit Rawat</h2>
      <p>Frontend Developer | Character Animator</p>

      <About />

      <h2>Tech I Know</h2>
      <div className="tech-logos">
        <img src={mongodbLogo} alt="MongoDB Logo" />
        <img src={cssLogo} alt="CSS Logo" />
        <img src={htmlLogo} alt="HTML Logo" />
        <img src={jsLogo} alt="JavaScript Logo" />
        <img src={reactLogo} alt="React Logo" />
        <img src={nodejsLogo} alt="Node.js Logo" />
        <img src={expressLogo} alt="Express Logo" />
      </div>
    </div>
  );
};

export default Home;
