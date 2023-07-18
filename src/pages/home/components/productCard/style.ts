import styled from "styled-components";
import Zx7Speaker from "../../../../assets/home/desktop/image-speaker-zx7.jpg";

export const Container = styled.div`
  padding: 20px 200px;
  @media (max-width: 1440px) {
    padding: 20px 120px;
  }
  @media (max-width: 1000px) {
    padding: 30px 40px;
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
  border-radius: 30px;
  align-items: center;
  &:last-child {
    gap: 30px;
    align-items: start;
  }
  @media (max-width: 1440px) {
    justify-content: center;
  }
`;
export const LastProduct = styled.div`
  display: flex;
  background-color: #cecece;
  border-radius: 30px;
  height: 80%;
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
`;
export const ImgWrapper = styled.div`
  width: 100%;
  border-radius: 30px;
  height: 80%;
  img {
    border-radius: 30px;
  }
`;

export const ProductImgT = styled.img`
  width: 0;
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
`;
export const ProductWrapper = styled.div`
  div {
    display: flex;
    flex-direction: column;
    gap: 30px;
    h1 {
      font-size: 50px;
    }
    p {
      color: #f4f5fa;
    }
    button {
      width: 200px;
    }
  }
  @media (max-width: 1440px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    div {
      h1 {
        font-size: 40px;
      }
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
  border-radius: 30px;
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
  @media (max-width: 1150px) {
    background-position-x: center;
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
    font-weight: 700;
    text-align: start;
    padding: 15px 20px;
  }
`;
