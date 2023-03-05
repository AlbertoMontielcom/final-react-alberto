import React from 'react';
import '../style/App.css';


const VideoBg = () => {
  return (
    <div className="container">
      <div className="video-background">
        <div className="video-foreground">
        <iframe src="https://www.youtube.com/embed/u9TuAZHeziw?controls=0&autoplay=1&mute=1&loop=1&playlist=u9TuAZHeziw&showinfo=0" frameborder="0" allowfullscreen loop></iframe>
        </div>
        <div className="video-overlay"></div>
      </div></div>
  );
};

export default VideoBg;