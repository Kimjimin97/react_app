import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailPaint from "./DetailPaint";

function Detail() {
  const { id } = useParams();
  const [detailMovie, setDetailMovie] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetailMovie(json.data.movie);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <DetailPaint
      summary={detailMovie.description_full}
      coverImg={detailMovie.medium_cover_image}
      title={detailMovie.title}
      star={detailMovie.rating}
    />
  );
}

export default Detail;
