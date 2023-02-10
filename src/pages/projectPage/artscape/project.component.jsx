import React from "react";
import "./project.styles.scss";
import CustomButton from "../../../components/custom-button.component";

import ArtImage from "../../home/icons/artscape.PNG";
import { Link } from "react-router-dom";

const ProjectDetailPage = () => {
  return (
    <div className="projectOverview">
      <div className="projectTitle">ArtScape</div>
      <div className="projectDesc">
        An E-Commerce Web Application that deals with the sale of Art
      </div>

      <div className="imageContainerArtscape">
        <div id="artscapeImg">
          <img src={ArtImage} alt="" />
        </div>

        <div className="btns">
          <Link to="https://github.com/Ndathi/ArtScape-Frontend">
            <CustomButton>View Github</CustomButton>
          </Link>
          {/* <CustomButton id="demo">Demo</CustomButton> */}
        </div>
      </div>

      <div className="projectExplanation">
        {" "}
        <h3>Motivation</h3>
        <p>
          Despite the growing number of artists in Kenya, artists have
          difficulty in finding means to sell their artwork. Artists are forced
          to depend on their own networking skills and social media <br />
          pages which may take years to build and does not target the required
          clientele. This challenge is brought by the disproportionate ratio
          between physical exhibition spaces and galleries <br />
          compared to the rising number of artists. To solve this issue I have
          developed ArtScape which will provide an online platform where artists
          can post their artwork and make it visible to the <br />
          art community around the world.
        </p>
        <h3>Challenges faced</h3>
        <p>
          Artscape being an ecommerce application transaction managment and
          security of clients details is a mojor challange that must be
          addressed
        </p>
        <h3>Technology Stack</h3>
        <p>
          Frontend - React, redux, firebase, firestore. <br />
          Backend- Express, NodeJS, Mongo DB, mongoose.
        </p>
      </div>
    </div>
  );
};
export default ProjectDetailPage;
