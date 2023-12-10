import React, { useState, useEffect } from "react";
import "./Row.css";
import axios from "./axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

function Row({ title, fetchUrl, isLargeRow }) {
    const base_Url = "https://image.tmdb.org/t/p/original/";
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {
        async function fetchData() {
            const requests = await axios.get(fetchUrl);
            //console.log(requests);
            setMovies(requests.data.results);
            // console.log(requests.data.results);
            return requests;
        }
        fetchData();
    }, [fetchUrl]);
    //console.log(movies);
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl("");
        } else {
            movieTrailer(movie?.title || movie?.name || movie.orginal_name)
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get("v"));
                })
                .catch((error) => console.log(error));
        }
    };
    return (
        <div className="row">
            <h1>{title}</h1>
            <div className="row__posters">
                {movies.map((movie) => (
                    <img
                        onClick={() => handleClick(movie)}
                        className={`row__poster ${
                            isLargeRow && "row__posterLarge"
                        }`}
                        src={`${base_Url}${
                            isLargeRow ? movie.poster_path : movie.backdrop_path
                        }`}
                        alt={movie.name}
                    />
                ))}
            </div>
            <div style={{ padding: "40px" }}>
                {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
            </div>
        </div>
    );
}

export default Row;
