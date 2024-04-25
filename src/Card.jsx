import Html from "./assets/images/html.png";
import Css from "./assets/images/css.png";
import Js from "./assets/images/js.png";
import React from "./assets/images/react.png";

const imageMap = {
  Html,
  Css,
  Js,
  React,
};

function Card({ imageName }) {
  return (
    <div
      className="column
      is-three-quarters-mobile
      is-two-thirds-tablet
      is-half-desktop
      is-one-third-widescreen
      is-one-quarter-fullhd"
    >
      <div className="card">
        <div className="card-image">
          <img src={imageMap[imageName]} alt={imageName} />
        </div>
      </div>
    </div>
  );
}

export default Card;
