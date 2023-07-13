import styled from "styled-components";
import HeroImage from "../../assets/home/desktop/image-hero.jpg";
import * as styles from "../../components/variables";
import { Link } from "react-router-dom";
// Hero
export const Hero = styled.div`
  min-height: calc(100vh - 68px);
  background: url(${HeroImage}) no-repeat;
  background-size: cover;
  background-position: 0%;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
export const HeroContent = styled.div`
  padding: ${styles.container};
  text-align: start;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
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
`;
export const ProductInfo = styled.p`
  color: #999;
  width: 350px;
`;
export const BtnWrapper = styled.div`
  display: inline;
`;

// Cards
export const CardWrapper = styled.div`
  padding: ${styles.container};
  padding-top: 80px;
  padding-bottom: 80px;
  display: flex;
  justify-content: space-between;
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
`;
export const CardHead = styled.h3`
  color: #000;
  text-transform: uppercase;
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
