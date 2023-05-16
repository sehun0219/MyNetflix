import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Selected from "../components/Selected";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState(null);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, [id]);
  console.log();
  return (
    <div>
      {loading ? (
        <h1>Loading... Wait..</h1>
      ) : (
        <div>
          {movie && (
            <Selected
              key={movie.id}
              id={movie.id}
              coverImg={movie.small_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default Detail;
