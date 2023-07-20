import styled from "styled-components";
import HeroImage from "../../assets/home/desktop/image-hero.jpg";
import HeroImageTablet from "../../assets/home/tablet/image-header.jpg";
import { Link } from "react-router-dom";
// Hero
export const Hero = styled.div`
  min-height: calc(100vh - 88px);
  background: url(${HeroImage}) no-repeat;
  background-size: cover;
  /* background-position: 0%; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-height: 700px) {
    background-position: center;
  }
  @media (max-width: 840px) {
    display: flex;
    justify-content: center;
    /* background-position: -250px; */
    background: url(${HeroImageTablet});
    background-position: center;
    background-size: cover;
  }
`;
export const HeroContent = styled.div`
  padding: 20px 200px;
  text-align: start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  @media (max-width: 1440px) {
    padding: 20px 120px;
  }
  @media (max-width: 1000px) {
    padding: 30px 40px;
  }
  @media (max-width: 840px) {
    text-align: center;
    width: 379px;
  }
  @media (max-width: 500px) {
    padding: 0;
    max-width: 375px;
  }
`;
export const Product = styled.h3`
  color: #444;
  text-transform: uppercase;
  font-size: 16px;
  letter-spacing: 5px;
`;
export const ProductName = styled.h1<{ color?: string }>`
  color: ${(props) => {
    if (props.color) {
      return props.color;
    } else {
      return "#fff";
    }
  }};
  text-transform: uppercase;
  font-size: 50px;
  margin-bottom: 25px;
`;
export const ProductInfo = styled.p`
  color: #999;
  width: 350px;
  @media screen {
    width: 100%;
  }
`;
export const BtnWrapper = styled.div`
  display: inline;
`;

// Cards
export const CardWrapper = styled.div`
  padding: 20px 200px;
  padding-top: 80px;
  padding-bottom: 80px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1440px) {
    padding: 20px 120px;
  }
  @media (max-width: 1000px) {
    padding: 30px 40px;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    gap: 30px;
  }
`;
export const Card = styled.div`
  cursor: pointer;
  width: 22%;
  background-color: rgb(242, 242, 242);
  text-align: center;
  padding: 20px 30px;
  border-radius: 20px;
  transition: ease-in-out 0.2s;

  &:hover p {
    color: orange;
  }
  &:hover {
    background-color: rgba(250, 229, 207, 0.6);
    transform: translateY(-10px);
  }
  @media (max-width: 700px) {
    /* flex-direction: column; */
    padding: 20px 0px;
    width: 100%;
  }
`;
export const CardHead = styled.h3`
  color: #000;
  text-transform: uppercase;
  @media (max-width: 700px) {
    font-size: 16px;
  }
`;
export const CardBtnDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
  gap: 9px;
`;
export const CardBtn = styled.p`
  color: #888;
  font-weight: 700;
  text-transform: uppercase;
`;
export const ArrowIMG = styled.img``;
export const CardLink = styled(Link)`
  &:link,
  &:active {
    color: #fff;
    text-decoration: none;
  }
`;
export const LinkButton = styled(Link)`
  &:link,
  &:visited {
    text-transform: uppercase;
    color: #fff;
    text-decoration: none;
    font-weight: 400;
  }
  &:hover,
  &:active {
    color: #d87d4a;
  }
`;
