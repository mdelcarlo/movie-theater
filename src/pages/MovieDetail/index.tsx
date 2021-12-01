import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieById } from "../../services/movies";
import MovieDetail from "../../components/MovieDetail";

const getMovie = async (movieId: number, setMovie: Function) => {
  let movie;
  if (movieId) {
    movie = await getMovieById(movieId);
    console.log(movie);
    setMovie(movie);
  }
};

function MovieDetailPage() {
  const { id } = useParams<{ id: string }>();
  const movieId = parseInt(id, 10);
  const [movie, setMovie] = useState();

  useEffect(() => {
    getMovie(movieId, setMovie);
  }, [movieId]);

  return <>{movie && <MovieDetail {...movie} />}</>;
}

export default MovieDetailPage;
