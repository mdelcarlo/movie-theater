import { Hero, HeroTitle, HeroSubtitle } from "../../components/Hero";
import SearchBar from "../../components/SearchBar";
import { useLocation, useHistory } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { discoverMovies, searchMoviesByTitle } from "../../services/movies";
import MovieList, {
  MovieListItemIterface,
  MovieListItem,
} from "../../components/MovieList";
import FilterSection from "./sections/Filter";

function useQuery() {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
}

const getMovies = async (searchTerm: string, setMovies: Function) => {
  let movies;
  if (searchTerm.length > 0) {
    movies = await searchMoviesByTitle(searchTerm);
  } else {
    movies = await discoverMovies();
  }
  setMovies(movies);
};

function Home() {
  let query = useQuery();
  const history = useHistory();

  const [searchTerm, setSearchTerm] = useState(() => query.get("search") || "");
  const [movies, setMovies] = useState([]);
  const [rating, setRaiting] = useState(0);
  const [shouldFilter, setShouldFilter] = useState(false);

  const onSearchChange = (event: any) => setSearchTerm(event?.target?.value);

  const onSearchKeyPress = (event: any) => {
    var key = event.keyCode || event.which;
    if (key === 13) {
      // getMovies(searchTerm, setMovies);
      history.push(`?search=${searchTerm}`);
    }
  };

  useEffect(() => {
    getMovies(query.get("search") || "", setMovies);
  }, [query]);

  return (
    <>
      <Hero>
        <HeroTitle>React movie theater</HeroTitle>
        <HeroSubtitle>The movies you enjoy close to home</HeroSubtitle>
        <SearchBar
          placeholder="Search for a movie"
          value={searchTerm}
          onChange={onSearchChange}
          onKeyPress={onSearchKeyPress}
        />
      </Hero>
      <FilterSection
        rating={rating}
        setRating={setRaiting}
        shouldFilter={shouldFilter}
        setShouldFilter={setShouldFilter}
      />

      <MovieList>
        {movies
          .filter(
            (movie: MovieListItemIterface) =>
              !shouldFilter ||
              (movie.voteAverage > rating - 2 && movie.voteAverage < rating)
          )
          .map((movieItemProps: MovieListItemIterface) => (
            <MovieListItem key={movieItemProps.id} {...movieItemProps} />
          ))}
      </MovieList>
    </>
  );
}

export default Home;
