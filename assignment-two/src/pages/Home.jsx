import React, { useEffect, useState } from "react";
import moviedatajson from "../Assets/json/movies.json";
import MovieCard from "../components/MovieCard/MovieCard";
import "./style.scss" 
function Home() {

    const [movies, setMovies] = useState([]);
    useEffect(() => {
        setMovies(moviedatajson);
    })



    return <div className={"movie_list"}>{
        movies.map((data) => {
            return (
                <MovieCard
                    moviename={data.moviename}
                    director={data.director}
                    releaseddate={data.releaseddate}
                    genre={data.genre}
                    rating={data.rating}
                    image={data.image}

                />
            )
        })

    } </div>


}

export default Home;
