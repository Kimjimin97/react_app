import React, { useEffect, useState } from "react";
import Movie from "../component/Movie";
import styles from "./Home.module.css";
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
  console.log(movieData);
  return (
    <div className={styles.body}>
      {loading ? (
        <h1>loading</h1>
      ) : (
        <div>
          <div className={styles.backBlack}></div>
          <button onClick={leftMove}>left</button>
          <button onClick={rightMove}>right</button>

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
                  scores={movie.scores}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
