import React from "react";
import "./projectpetstate.styles.scss";

import CustomButton from "../../../components/custom-button.component";

import ArtImage from "../../home/icons/petstatescrn.png";
import { Link } from "react-router-dom";

const ProjectPetstatePage = () => {
  return (
    <div className="projectOverview">
      <div className="projectTitle">PetState</div>
      <div className="projectDesc">
        An android application that provides twenty four hour veterinary
        services
      </div>
      <div className="imageContainer">
        <div id="artscapeImg">
          <img src={ArtImage} alt="" />
        </div>
        <div className="btns">
          <Link to="https://github.com/whizydan/Petstate">
            <CustomButton>Go to Github</CustomButton>
          </Link>
          {/* <CustomButton id="demo">Demo</CustomButton> */}
        </div>
        <div className="projectExplanation1">
          <h3>Project Background</h3>
          <p>
            This project was birthed as a project to promote innovation and
            technology <br />
            in agriculture. This project was featured in the ASK(Agricultural
            Society of Kenya) <br />
            Agricultural Show in June 2022.
          </p>
        </div>
      </div>

      <div className="projectExplanation">
        {/* {" "} */}
        <h3>Motivation</h3>
        <p>
          In recent years there has been an exponential increase in pet keeping
          as a culture
          <br />
          This growth brings to light the impropotionate ratio of veterinary
          doctors to clients needing veterinary services
          <br />
          Petstate seeks to bridge this gap by providing digital access to
          veterinary services as well as giving the doctors on the go digital
          access to their clients records
          <br />
        </p>
        <h3>Challenges faced</h3>
        <p>
          How do we as Petstate verify doctors. <br />
          How do we ensure doctor patient confidentiality
        </p>
        <h3>Technology Stack</h3>
        <p>Java, Kotlin, Firebase, Firestore, MySQL, TinyDB.</p>
      </div>
    </div>
  );
};
export default ProjectPetstatePage;
