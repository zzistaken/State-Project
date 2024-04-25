import "bulma/css/bulma.css";
import "./App.css";
import { useState } from "react";
import Card from "./Card";

function getRandomImage() {
  const imageArray = ["Html", "Css", "Js", "React"];
  return imageArray[Math.floor(Math.random() * imageArray.length)];
}

function App() {
  const [images, setImages] = useState([]);

  const handleClick = () => {
    setImages([...images, getRandomImage()]);
  };

  const imageList = images.map((image, index) => {
    return <Card imageName={image} key={index} />;
  });

  return (
    <div className="App">
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">State Project</p>
          <p className="subtitle">
            A simple random image project showing how states work. Built with
            React+Vite, styled with Bulma CSS.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container is-align-content-center	 is-justify-content-center">
          <div className="is-flex is-align-content-center is-justify-content-center">
            <button className="button" onClick={handleClick}>
              Get Random Image
            </button>
          </div>
          <div
            id="imageListDiv"
            className="columns is-flex is-flex-wrap-wrap is-align-content-center is-justify-content-center mt-6"
          >
            {imageList}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
