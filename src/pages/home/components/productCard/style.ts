import styled from "styled-components";
import Zx7Speaker from "../../../../assets/home/desktop/image-speaker-zx7.jpg";
import { Link } from "react-router-dom";

export const Container = styled.div`
  margin: 20px 200px;
`;
export const Product = styled.div<{ bgcolor: boolean }>`
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
`;
export const LastProduct = styled.div`
  display: flex;
  background-color: #cecece;
  border-radius: 30px;
  height: 80%;
  padding-left: 80px;
`;
export const ImgWrapper = styled.div`
  width: 100%;
  border-radius: 30px;
  height: 80%;
  img {
    border-radius: 30px;
    /* height: 100%; */
    /* width: 550px; */
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
`;
export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  text-align: start;
  width: 350px;
  h1 {
    font-size: 50px;
  }
  p {
    color: #f4f5fa;
  }
  button {
    width: 200px;
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
`;
export const ProductWrapperSec = styled.div`
  h1 {
    color: #000;
  }
  button {
    background: none;
    border: 1px solid #000;
    color: #000;
    font-weight: 700;
  }
`;
