import { Link } from "react-router-dom";
import default_img from "../img/default_img.jpg";

function Movie({ id, coverImg, title, summary, genres }) {
  const handelError = (e) => {
    e.target.style.display = "none";
  };
  return (
    <div>
      {/* <img src={default_img} /> */}
      <h2>
        <Link to={`/movie/${id}`}>
          <img src={coverImg} onError={handelError} />
        </Link>
      </h2>
    </div>
  );
}

export default Movie;
