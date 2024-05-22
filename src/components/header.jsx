import React from "react";
import Clip from "../Assests/intro.mp4";
import Poster from "../Assests/poster.png";



export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="container-intro">
          <div className="row m-0">
            <video className="video-intro" autoPlay loop muted poster={Poster}>
              <source src={Clip} type='video/mp4' />
            </video>
          </div>
        </div>
      </div>
    </header>
  );
};
