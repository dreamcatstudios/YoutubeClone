import React from "react";
import "../component.css";

const VideoPage = () => {
  return (
    <div className="video-page">
      <div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/nDGA3km5He4?si=G0GPXcdCNzpMbZv_"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      <div className="video-text">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          atque in enim dolorem adipisci ut natus fuga voluptatum! Corrupti
          nulla a soluta magnam et rerum non animi, doloremque eligendi earum!
        </p>
      </div>
    </div>
  );
};

export default VideoPage;
