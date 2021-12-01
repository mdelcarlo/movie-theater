import { Link } from "react-router-dom";
import styled from "styled-components";
import Raiting from "./Raiting";
import img from "../images/no-image.jpeg";

const StyledLink = styled(Link)`
  background: #fff;
  color: inherit;
  text-decoration: none;
  border-radius: 5px;
  overflow: hidden;
  :hover {
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
      0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
      0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
      0 100px 80px rgba(0, 0, 0, 0.12);
  }
`;

const MovieList = styled.ul`
  column-gap: 26px;
  row-gap: 24px;
  display: flex;
  flex-wrap: wrap;
  width: 1280px;
  margin: 24px auto;
  padding: 0;
  @media (max-width: 1400px) {
    column-gap: 40px;
    width: 980px;
  }
`;
const MovieListItemStyle = styled.li`
  display: inline-block;
  width: 300px;
`;

export const ImgWrapper = styled.div`
  display: inline-block;
  height: 450px;
  overflow: hidden;
  width: 300px;
`;

export const MovieImg = styled.img`
  height: 450px;
`;

const MovieListContent = styled.div`
  padding: 0 16px 16px 16px;
`;

const StyledDate = styled.p`
  color: #555;
  font-weight: 300;
`;

export interface MovieListItemIterface {
  id: string;
  originalTitle: string;
  popularity: string;
  overview: string;
  releaseDate: string;
  posterPath: string;
  voteAverage: number;
}

const MovieListItem = ({
  id,
  originalTitle,
  popularity,
  overview,
  releaseDate,
  posterPath,
  voteAverage,
  ...rest
}: MovieListItemIterface) => {
  const date = new Date(releaseDate);
  return (
    <StyledLink to={`/movie/${id}`}>
      <MovieListItemStyle {...rest}>
        <div>
          <ImgWrapper>
            <MovieImg
              alt={originalTitle}
              src={
                posterPath
                  ? `https://image.tmdb.org/t/p/w300/${posterPath}`
                  : img
              }
            />
          </ImgWrapper>
          <MovieListContent>
            <h3>{originalTitle}</h3>
            <StyledDate>{date.toLocaleDateString()}</StyledDate>
            <Raiting value={+voteAverage} />
          </MovieListContent>
        </div>
      </MovieListItemStyle>
    </StyledLink>
  );
};

export default MovieList;
export { MovieList, MovieListItem };
