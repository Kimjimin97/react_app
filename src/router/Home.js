import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import styles from "./Home.module.css";
import leftAllow from "../img/left.png";
import rightAllow from "../img/right.png";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movieData, setMovieData] = useState([]);
  const [moveIndex, setMoveIndex] = useState(0);

  const leftMove = () => {
    if (moveIndex === 0) {
      return;
    }
    setMoveIndex((prev) => prev + 150);
  };

  const rightMove = () => {
    if (moveIndex <= -3500) {
      return;
    }
    setMoveIndex((prev) => prev - 150);
  };
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimun_rating=9&sort_by=year`
      )
    ).json();
    setMovieData(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>loading..</h1>
      ) : (
        <div>
          <div id={styles.title}>JMOVIE</div>
          <div className={styles.descriptBox}>
            <p className={styles.des1}>What's movie?</p>
            <p className={styles.des2}>recommend the movie to you.</p>
          </div>
          <div className={styles.backBlack}></div>
          <div className={styles.moviesCcontainer}>
            <div className={styles.buttonBox}>
              <div className={styles.buttonContainer}>
                <img
                  className={styles.button}
                  onClick={leftMove}
                  src={leftAllow}
                />
                <img
                  className={styles.button}
                  onClick={rightMove}
                  src={rightAllow}
                />
              </div>
            </div>
            <div
              className={styles.moviesContainer}
              style={{ transform: `translateX(${moveIndex}px)` }}
            >
              {movieData.map((movie) => (
                <div className={styles.transform}>
                  <Movie
                    key={movie.id}
                    id={movie.id}
                    coverImg={movie.medium_cover_image}
                    title={movie.title}
                    summary={movie.summary}
                    genres={movie.genres}
                    star={movie.rating}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
