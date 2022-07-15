import { Link } from "react-router-dom";
import styles from "../component/Movie.module.css";
import starImg from "../img/Vector.png";

function Movie({ id, coverImg, title, summary, genres, star }) {
  const handelError = (e) => {
    e.target.parentNode.parentNode.style.display = "none";
  };
  return (
    <div>
      <Link to={`/movie/${id}`}>
        <div className={styles.movieCard}>
          <div className={styles.imgeArea}>
            <img
              className={styles.movieImg}
              src={coverImg}
              onError={handelError}
            />
            <div className={styles.typoArea}>
              <div className={styles.starAndTitle}>
                <div className={styles.titleBox}>{title}</div>
                <div className={styles.starBox}>
                  <img className={styles.starImg} src={starImg} />
                  <div className={styles.ratingStyle}>{star}</div>
                </div>
              </div>
              <div className={styles.typeBox}>{genres[0]}</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Movie;
