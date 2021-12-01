import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import Raiting from "../../../components/Raiting";

const FilterSection = styled.div`
  align-items: center;
  background: #fff;
  border-radius: 4px;
  box-sizing: border-box;
  display: flex;
  margin: 24px auto;
  verticla-align: center;
  padding: 8px;
  width: 1280px;
  @media (max-width: 1400px) {
    width: 980px;
  }
`;

const FilterTitle = styled.h3`
  display: inline-block;
  padding-right: 8px;
`;

const StyledInput = styled.input`
  margin-left: 8px;
  margin-right: 8px;
`;

function Filter({
  rating = 0,
  setRating,
  shouldFilter,
  setShouldFilter,
}: {
  rating: number;
  setRating: Dispatch<SetStateAction<number>>;
  shouldFilter: boolean;
  setShouldFilter: Dispatch<SetStateAction<boolean>>;
}) {
  const filterByRating = (newRating: number) => () => {
    if (rating === newRating) {
      toggleFilter();
    } else {
      setRating(newRating);
      setShouldFilter(true);
    }
  };

  const toggleFilter = () => {
    setShouldFilter((prev) => !prev);
  };

  return (
    <FilterSection>
      <StyledInput
        type="checkbox"
        checked={shouldFilter}
        onChange={toggleFilter}
      />
      <FilterTitle>Filter by rating</FilterTitle>
      <Raiting value={rating} filterByRating={filterByRating} />
    </FilterSection>
  );
}

export default Filter;
