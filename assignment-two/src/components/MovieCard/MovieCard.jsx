import React from "react";
import "./movieCard.css";
export default function MovieCard({moviename , director , releaseddate, genre , rating , image}) {
  return (
    <div class="movie_card">
      <img src={image}/>
      <div class="movie_info">
        <h4>
          <b>{moviename}</b>
        </h4>
        <p>Directed by</p>
        <h5>👤 {director}</h5>
        <p>Released on</p>
        <h5>📅 {releaseddate}</h5>
        <p>Genre</p>
        <h5>&#9758;  {genre}</h5>
        <p>IMDb ratings</p>
        <h5>&#9998;{rating}/10</h5>
        <h5>&#10004;10 Votes</h5>
      </div>
      <div class="card_rating">
        <p>&#10032;</p>
        <p>{rating}</p>
      </div>
    </div>
  );
}
