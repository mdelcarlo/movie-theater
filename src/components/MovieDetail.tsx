import styled from "styled-components";
import img from "../images/no-image.jpeg";
import { IGenre, Genre } from "./Genre";
import { ImgWrapper, MovieImg } from "./MovieList";
import Popularity from "./Popularity";
import Raiting from "./Raiting";

const MovieDetailStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 24px;
  margin: 48px auto;
  background: white;
  padding: 24px;
  border-radius: 5px;
  @media (min-width: 1400px) {
    width: 1280px;
  }
  @media (max-width: 1400px) {
    width: 980px;
  }
`;

const MovieDetailContent = styled.div`
  display: inline-block;
  width: 656px;

  @media (min-width: 1390px) {
    width: 955px;
  }

  h1 {
    font-size: 48px;
    margin-top: 0;
  }
`;

const CardImageWrapper = styled(ImgWrapper)`
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
`;

const Description = styled.p`
  font-size: 24px;
  font-weight: 300;
`;

const StyledDate = styled.p`
  color: #555;
  font-weight: bold;
`;

export interface MovieDetailIterface {
  id: string;
  originalTitle: string;
  popularity: string;
  overview: string;
  releaseDate: string;
  posterPath: string;
  voteAverage: string;
  genres: Array<IGenre>;
}

const MovieDetail = ({
  originalTitle,
  overview,
  releaseDate,
  posterPath,
  voteAverage,
  genres,
  popularity,
  ...rest
}: MovieDetailIterface) => {
  const date = new Date(releaseDate);
  return (
    <MovieDetailStyle {...rest}>
      <CardImageWrapper>
        <MovieImg
          alt={originalTitle}
          src={
            posterPath ? `https://image.tmdb.org/t/p/w300/${posterPath}` : img
          }
        />
      </CardImageWrapper>
      <MovieDetailContent>
        <h1>{originalTitle}</h1>
        {genres.map(({ id, name }) => (
          <Genre key={id} id={id} name={name} />
        ))}
        <Description>{overview}</Description>
        <StyledDate>{date.toLocaleDateString()}</StyledDate>
        <Popularity value={Math.floor(+popularity)} />
        <Raiting value={+voteAverage} />
      </MovieDetailContent>
    </MovieDetailStyle>
  );
};

export default MovieDetail;
export { MovieDetail };
