import React from "react";
import "./VideoCard.css";

function VideoCard({ movie }) {
  return (
    <div className="videoCard">
      <img
        src="https://d2436y6oj07al2.cloudfront.net/assets/gsblog/2015/10/DRIVE.jpg"
        alt="default"
      ></img>
      <p>This is a film about ...</p>
      <h3>Movie Title</h3>
      <p>Number of Likes.....</p>
    </div>
  );
}

export default VideoCard;
