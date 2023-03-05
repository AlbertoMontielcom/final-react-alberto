import React, { useState, useEffect } from "react";
import axios from "axios";

const CatImage = () => {
  const [catImage, setCatImage] = useState("");

  const getCatImage = () => {
    axios
      .get("https://api.thecatapi.com/v1/images/search")
      .then((response) => {
        setCatImage(response.data[0].url);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getCatImage();
  }, []);

  return (
    <div>
      <img className="love" src="https://th.bing.com/th/id/R.e495680ccd097f9996ef88c10a6ae7db?rik=8pJlrna2X2MreA&riu=http%3a%2f%2fih0.redbubble.net%2fimage.24298285.8384%2fsticker%2c375x360.u2.png&ehk=q3t8IAXoixzxHJ6AngxMQOC3D4pOBfrH3Qg6CCyP080%3d&risl=&pid=ImgRaw&r=0"></img>
      <img className="catimage" src={catImage} alt="Random cat" />
      <button onClick={getCatImage}>Load new cat</button>
    </div>
  );
};

export default CatImage;
