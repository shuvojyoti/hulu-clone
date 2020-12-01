import React, { forwardRef } from "react";
import "./VideoCard.css";
import TextTruncate from "react-text-truncate";
const base_url = "https://image.tmdb.org/t/p/original/";

const VideoCard = forwardRef(({ movie }, ref) => {
  return (
    <div ref={ref} className="videoCard">
      <img
        src={`${base_url}${movie.backdrop_path || movie.poster_path}`}
        alt="default"
      ></img>
      <TextTruncate
        line={2}
        element="p"
        truncateText="..."
        text={movie.overview}
      />
      <h3>{movie.original_title || movie.name}</h3>
      <p className="videoCard_stats">
        {movie.release_date || movie.first_air_date}
        &nbsp; Likes: {movie.vote_count}
      </p>
    </div>
  );
});

export default VideoCard;
