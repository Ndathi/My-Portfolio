import React from "react";
// import FormInput from "../../components/forminput.component";
import CustomButton from "../../components/custom-button.component";
import { Link, Navigate } from "react-router-dom";

import "./home.stylez.css";
// import "./home.styles.scss";

import { useState } from "react";
import { send } from "emailjs-com";
import MyPDF from "./icons/resume.pdf";

import { ReactComponent as GithubIcon } from "./icons/githubIcon.svg";
import { ReactComponent as LinkedinIcon } from "./icons/linkedinIcon.svg";
import Logo from "./icons/programmer image.jpg";
import PetState from "./icons/petstatescrn.png";
import ArtScape from "./icons/artscape.PNG";
import ProfilePic from "./icons/alooatask.png";
import TestimonialIcon from "./icons/testicles.png";

function HomePage() {
  const [toSend, setToSend] = useState({
    from_name: "",

    message: "",
    reply_to: "",
  });
  const onSubmit = (e) => {
    e.preventDefault();
    send("service_jgx8xto", "template_6hnsizr", toSend, "B0PTwjBJN3LoT4bON")
      .then((response) => {
        alert("Message sent");
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className="myProfile">
      <div className="landingPurple" id="myLanding">
        <div className="header">
          <h2 id="jina">Ian Ndathi</h2>

          <p
            className="headerItems"
            id="home"
            onClick={() => {
              const anchor = document.querySelector("#myLanding");
              anchor.scrollIntoView({ behavior: "smooth", block: "center" });
            }}
          >
            Home
          </p>
          <p
            className="headerItems"
            id="skills"
            onClick={() => {
              const anchor = document.querySelector("#myskills");
              anchor.scrollIntoView({ behavior: "smooth", block: "center" });
            }}
          >
            Skills
          </p>
          <p
            className="headerItems"
            id="myWork"
            onClick={() => {
              const anchor = document.querySelector("#workDone");
              anchor.scrollIntoView({ behavior: "smooth", block: "center" });
            }}
          >
            My Work
          </p>
          <p
            className="headerItems"
            id="contactMe"
            onClick={() => {
              const anchor = document.querySelector("#talktome");
              anchor.scrollIntoView({ behavior: "smooth", block: "center" });
            }}
          >
            Contact Me
          </p>
        </div>

        <div className="landingpagecontent">
          <div className="leftProfile">
            <h1 className="junior">Junior</h1>
            <h1 className="developer">Developer.</h1>

            <p className="title2">I enjoy creating robust,dependable and</p>
            <p className="title2" id="functional">
              functional web applications.
            </p>
            <div className="purpleleftgrid">
              <div>
                {" "}
                <p className="text3" id="highly">
                  Highly skilled at creating REST API's,
                </p>
                <p className="text3" id="database">
                  database modelling and basic
                </p>
                <p className="text3" id="lan">
                  LAN configuration and troubleshooting.
                </p>
              </div>

              <div>
                {" "}
                <p className="text4">Experience using UI/UX</p>
                <p className="text4" id="design">
                  design tools such as Figma to
                </p>
                <p className="text4" id="come">
                  come up with user centered designs.
                </p>
              </div>
            </div>
          </div>
          <div className="rightProfile">
            <div className="rightprofilegrid">
              <div className="iconandtext" id="first">
                <GithubIcon className="githubicon" />{" "}
                <p className="githubText">Github</p>
              </div>
              <div className="iconandtext">
                <LinkedinIcon className="linkedinicon" />{" "}
                <p className="linkedinText">Linkedin</p>{" "}
              </div>

              <a href={MyPDF} download="ians resume">
                <CustomButton id="downloadresume">DOWNLOAD RESUME</CustomButton>{" "}
              </a>
            </div>

            <div className="profilePic"></div>
            <div className="profilePic2"></div>
          </div>
        </div>
      </div>
      <div className="whatIcanDo" id="myskills">
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

      <div className="myWork" id="workDone">
        <h2 id="myworktext">My Work</h2>

        <div id="content">
          <div id="petstature">
            <div></div>

            <div id="petstateimage">
              <img src={PetState} alt="" />
            </div>
            {/* <img src={PetState} alt=""  /> */}
            <p id="petstatename">PetState</p>
            <p id="petstatedesc">
              An android application that povides digital veterinary services
            </p>
            <Link to="./projectpetstate">
              <CustomButton id="customBat2">READ MORE</CustomButton>
            </Link>
          </div>

          <div id="artscapey">
            <p id="artscapename">ArtScape</p>
            <p id="artscapedesc">
              {" "}
              An E-Commerce Web Application that deals with the sale of Art
            </p>{" "}
            <div id="artscapescrn">
              {/* <Navigate to="/projectOverview" replace={true} /> */}

              <div id="artscapeimage">
                <img src={ArtScape} alt="" />
              </div>
            </div>
            <Link to="/projectOverview">
              {" "}
              <CustomButton id="customBat">Read More</CustomButton>
            </Link>
          </div>
        </div>
      </div>

      <div className="testimonials">
        <h3 id="testimonialText">Events and Forums</h3>
        <div className="testimonialContent">
          <div className="imageask1" id="imageski">
            <img src={ProfilePic} alt="" className="eneos" />
            <p>
              ASK annual agricultural show.{" "}
              <a href="https://www.egerton.ac.ke/nl/45th-newslink">Read.</a>
            </p>
          </div>
          <div className="imageask1">
            {/* <img src={} alt="" className="eneos" /> */}
          </div>

          <div className="imageask1">
            {/* <img src=# alt="" className="eneos" /> */}
          </div>
        </div>

        {/* <img src={TestimonialIcon} alt="" id="testimonialicon" /> */}
      </div>
      <div className="sendmeamessage" id="talktome">
        <h2 id="sendmeamessagetitle">Send Me a Message</h2>
        <form onSubmit={onSubmit}>
          <div className="formGrid">
            <div className="side1">
              {" "}
              <p>Enter your name</p>
              <input
                id="nameinput"
                type="text"
                placeholder="Your name"
                value={toSend.from_name}
                onChange={handleChange}
                name="from_name"
                label="Enter your name"
                required
              />
            </div>
            <div className="side2">
              {" "}
              <p>Enter your Email Address</p>
              <input
                id="nameinput"
                type="text"
                name="reply_to"
                placeholder="Your email"
                value={toSend.reply_to}
                onChange={handleChange}
                required
              />
            </div>{" "}
          </div>
          <p>Your Message</p>
          <input
            type="text"
            id="messageinput"
            name="message"
            placeholder="Your message"
            value={toSend.message}
            onChange={handleChange}
            required
          />

          <CustomButton id="sendmessagebtn" type="submit">
            Send Message
          </CustomButton>
        </form>
      </div>
      <div id="copyright">
        <p>copyright ndathiian@2023</p>
      </div>
    </div>
  );
}

export default HomePage;
