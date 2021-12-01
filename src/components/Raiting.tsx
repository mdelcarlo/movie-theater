import { SVGProps, useState } from "react";
import styled from "styled-components";

const StarIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg width="20" height="20" viewBox="0 0 10 10" {...props}>
    <path
      fill="#555"
      fillRule="evenodd"
      d="M5.056 8L1.931 9.648l.597-3.49L0 3.684l3.494-.509L5.056 0l1.562 3.176 3.494.51-2.528 2.471.597 3.491z"
    />
    <path
      width="10"
      height="10"
      fill={props?.color}
      fillOpacity={0.7}
      fillRule="evenodd"
      d="M5.056 8L1.931 9.648l.597-3.49L0 3.684l3.494-.509L5.056 0l1.562 3.176 3.494.51-2.528 2.471.597 3.491z"
    />
  </svg>
);

const RaitingWrapper = styled.div`
  display: inline-block;
  position: relative;
`;

const Raiting = ({
  value,
  max = 10,
  range = 2,
  filterByRating,
}: {
  value: number;
  max?: number;
  range?: number;
  filterByRating?: any;
}) => {
  const [hoverIndex, setHoverIndex] = useState<number | undefined>();
  const paintStar = (index: number) => () => {
    if (!filterByRating) return;
    setHoverIndex(index);
  };

  const unpaintStar = (index: number) => () => {
    if (!filterByRating) return;
    setHoverIndex(undefined);
  };
  return (
    <RaitingWrapper>
      {Array.from({ length: max / range }).map((val, i) => {
        const shouldBeColored = (hoverIndex || value) > i * 2;
        const starColor = shouldBeColored ? "gold" : "#fff";
        const starRange = (i + 1) * 2;
        return (
          <StarIcon
            key={starRange}
            color={starColor}
            onClick={filterByRating?.(hoverIndex)}
            onMouseEnter={paintStar(starRange)}
            onMouseLeave={unpaintStar(starRange)}
          />
        );
      })}
    </RaitingWrapper>
  );
};

export default Raiting;
export { Raiting };
