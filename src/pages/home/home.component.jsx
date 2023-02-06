import React from "react";

import "./home.stylez.css";

import { ReactComponent as GithubIcon } from "./icons/githubIcon.svg";
import { ReactComponent as LinkedinIcon } from "./icons/linkedinIcon.svg";
import Logo from "./icons/programmer image.jpg";
import PetState from "./icons/petstatescrn.png";
import ArtScape from "./icons/artscape.PNG";

const HomePage = () => {
  return (
    <div className="myProfile">
      <div className="landingPurple">
        <div className="header">
          <h2 id="jina">Ian Ndathi</h2>

          <p className="headerItems" id="home">
            Home
          </p>
          <p className="headerItems" id="skills">
            Skills
          </p>
          <p className="headerItems" id="myWork">
            My Work
          </p>
          <p className="headerItems" id="contactMe">
            Contact Me
          </p>
        </div>

        <GithubIcon className="githubicon" />
        <LinkedinIcon className="linkedinicon" />

        <p className="githubText">Github</p>
        <p className="linkedinText">Linkedin</p>

        <div className="profilePic"></div>
        <div className="profilePic2"></div>
        <h1 className="junior">Junior</h1>
        <h1 className="developer">Developer.</h1>

        <p className="title2">I enjoy creating robust,dependable and</p>
        <p className="title2" id="functional">
          functional web applications.
        </p>

        <p className="text3" id="highly">
          Highly skilled at creating REST API's,
        </p>
        <p className="text3" id="database">
          database modelling and basic
        </p>
        <p className="text3" id="lan">
          LAN configuration and troubleshooting.
        </p>

        <p className="text4">Experience using UI/UX</p>
        <p className="text4" id="design">
          design tools such as Figma to
        </p>
        <p className="text4" id="come">
          come up with user centered designs.
        </p>
      </div>
      <div className="whatIcanDo">
        <h2 id="whatIcanDoText">What I Can Do</h2>
        <div className="whatIcanDoData">
          <img src={Logo} alt="" id="iantheprogrammer" />

          <h3 id="apis">API's</h3>
          <p className="text3" id="apitext">
            Build scalable and maintainable <br />
            Application Programming Interfaces <br />
            using cutting edge technologies such as Node JS, Express, <br />
            Mongoose and Mongo DB
          </p>

          <p className="text3" id="frontendText">
            Build client-side applications with modern features <br />
            such as SPA and maintaining a semantic coding style among
            <br />
            otherbest practices for SEO optimization using modern <br />
            tech such as React JS and sass.
          </p>
          <p className="text3" id="uitext">
            Designing and coming up with optimal User Centered designs. <br />
            Focused on creating fluent user experiences while staying <br />
            fashionable.
          </p>
          <h3 id="frontendapps">Frontend Applications</h3>
          <h3 id="uiux">UI/UX Design</h3>
        </div>
      </div>

      <div className="myWork">
        <h2 id="myworktext">My Work</h2>
        <div id="petstateimage"></div>
        <p id="artscapename">ArtScape</p>
        <p id="artscapedesc">
          {" "}
          An E-Commerce Web Application that deals with the sale of Art
        </p>
        <img src={PetState} alt="" id="petstateimage" />
        <img src={ArtScape} alt="" id="artscapescrn" />
      </div>

      <div className="testimonials"></div>
    </div>
  );
};

export default HomePage;
