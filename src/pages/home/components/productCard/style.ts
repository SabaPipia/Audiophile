import styled from "styled-components";
import Zx7Speaker from "../../../../../assets/home/desktop/image-speaker-zx7.jpg";
import Zx7SpeakerTablet from "../../../../../assets/home/tablet/image-speaker-zx7.jpg";

export const Container = styled.div`
  padding: 20px 200px;
  @media (max-width: 1440px) {
    padding: 20px 120px;
  }
  @media (max-width: 1000px) {
    padding: 30px 40px;
  }
  @media (max-width: 768px) {
    &:last-child {
      width: 320px;
    }
  }
`;
interface ProductProps {
  bgcolor: boolean;
}
export const Product = styled.div<ProductProps>`
  background-color: ${(props) => {
    if (props.bgcolor) {
      return "#d87d4a";
    } else {
      ("none");
    }
  }};
  display: grid;
  justify-content: space-between;
  grid-template-columns: 1fr 1fr;
  overflow: hidden;
  border-radius: 10px;
  align-items: center;
  &:last-child {
    gap: 10px;
    align-items: start;
  }
  @media (max-width: 1440px) {
    justify-content: center;
  }
  @media (max-width: 840px) {
    &:first-child {
      display: flex;
      flex-direction: column;
    }
  }
  @media (max-width: 500px) {
    &:last-child {
      grid-template-columns: 1fr;
    }
  }
`;
export const LastProduct = styled.div`
  display: flex;
  background-color: #f1f1f1;
  border-radius: 10px;
  height: 100%;
  padding-left: 80px;
  align-items: center;
  @media (max-width: 1440px) {
    padding-left: 10px;
    justify-content: center;
  }
  h1 {
    font-size: 40px;
  }
  @media (max-width: 1150px) {
    h1 {
      font-size: 30px;
    }
  }
  @media (max-width: 600px) {
    h1 {
      font-size: 22px;
    }
    button {
      padding: 15px 30px;
    }
  }
  @media (max-width: 500px) {
    div {
      padding: 30px;
    }
  }
`;
export const ImgWrapper = styled.div`
  width: 100%;
  border-radius: 10px;
  img {
    border-radius: 10px;
  }
`;

export const ProductImgT = styled.img`
  width: 100%;
  height: 100%;
`;
export const ProductImg = styled.img`
  background: transparent;
  scale: 0.9;
  &:first-child {
    transform: translate(50%, 10%);
    width: 350px;
  }
  &:last-child {
    transform: translate(0%, 0%);
  }
  @media (max-width: 1150px) {
    &:first-child {
      transform: translate(10%, 10%);
      width: 350px;
    }
  }
  @media (max-width: 840px) {
    &:first-child {
      transform: translate(0%, 0%);
      width: 250px;
    }
  }
`;
export const ProductWrapper = styled.div`
  div {
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: start;
    h1 {
      font-size: 50px;
    }
    p {
      color: #f4f5fa;
    }
    button {
      /* width: 200px; */
    }
  }
  @media (max-width: 1440px) {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    div {
      h1 {
        font-size: 40px;
      }
    }
  }
  @media (max-width: 1300px) {
    div {
      align-items: center;
    }
  }
`;
export const FirstContent = styled.div`
  @media (max-width: 840px) {
    & {
      text-align: center;
      padding-bottom: 30px;
    }
  }
  @media (max-width: 768px) {
    & {
      width: 350px;
    }
  }
  h1 {
    margin-bottom: 0px;
  }
  @media (max-width: 4350px) {
    width: 100%;
    align-items: center;
    p {
      width: 250px;
    }
  }
`;

export const ProductSecond = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: center;
  align-items: center;
  background-image: url(${Zx7Speaker});
  background-repeat: no-repeat;
  background-size: cover;
  height: 400px;
  border-radius: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
  @media (max-width: 1150px) {
    background-position-x: center;
  }
  @media (max-width: 768px) {
    background-image: url(${Zx7SpeakerTablet});
    height: 320px;
  }
`;
export const ProductWrapperSec = styled.div`
  h1 {
    color: #000;
    font-size: 37px;
  }
  button {
    background: none;
    border: 1px solid #000;
    color: #000;
    text-align: start;
    padding: 15px 20px;
  }
  @media (max-width: 600px) {
    h1 {
      font-size: 28px;
    }
  }
  @media (max-width: 465px) {
    h1 {
      font-size: 22px;
    }
  }
  @media (max-width: 375px) {
    h1 {
      font-size: 21px;
    }
  }
`;
