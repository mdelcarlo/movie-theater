import styled from "styled-components";

const Chip = styled.div`
  display: inline-block;
  color: ${(props) => props.color};
  background-color: ${(props) => props.id};
  padding: 4px 12px;
  margin-right: 8px;
  border-radius: 50px;
  font-weight: bold;
`;

export interface IGenre {
  id: number;
  name: string;
}

const Genre = ({ id, name }: IGenre) => {
  const colorByte = (prod = 1) => ((id * prod) ** 2 / id) % 255;
  const red = colorByte(1);
  const green = colorByte(2);
  const blue = colorByte(5);
  const colorRGB = `rgb(${red},${green},${blue})`;
  const colorIntensity = red + green + blue;
  const color = colorIntensity < 382 ? "#fff" : "#000";
  return (
    <Chip color={color} id={colorRGB}>
      {name}
    </Chip>
  );
};

export default Genre;
export { Genre };
