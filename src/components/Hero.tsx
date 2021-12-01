import styled from "styled-components";
import img from "../images/hero.png";

const Hero = styled.div`
  background: url("${img}") no-repeat center;
  background-blend-mode: multiply;
  background-color: #cccccc;
  height: 400px;
  padding: 48px 24px 0;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 64px;
  margin-bottom: 12px;
  color: #fff;
`;

const HeroSubtitle = styled.h2`
  margin-top: 12px;
  margin-bottom: 32px;
  font-size: 48x;
  font-weight: 300;
  color: #fff;
`;

export default Hero;
export { Hero, HeroTitle, HeroSubtitle };
