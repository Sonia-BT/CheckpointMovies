import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./Principal.css";

const Principal = () => {
  const [movies, setMovies] = useState();

  const getData = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=43b746b767edc8522cb6200aa1821bcb&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
      );
      setMovies(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="ListMovies">
        {movies &&
          movies.results.map((elem) => (
            <div className="MovieCard">
              <div className="PosterMovie">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${elem.poster_path}`}
                  alt="IMAAAGE!!!"
                ></img>
              </div>
              <div className="InfosMovie">
                <div className="TitleMovie">
                  <h3>{elem.title}</h3>
                </div>
                <div className="Infos">
                  <div className="Item">
                    <h6>Release Date</h6>
                    <h6>{elem.release_date}</h6>
                  </div>
                  <div className="Item">
                    <h6>Vote_count</h6>
                    <h6>{elem.vote_count}</h6>
                  </div>
                  <div className="Item">
                    <h6>Popularity</h6>
                    <h6>{elem.popularity}</h6>
                  </div>
                  <div className="Item">
                    <h6>Original language</h6>
                    <h6>{elem.original_language}</h6>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Principal;
