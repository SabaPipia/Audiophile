import { Link } from "react-router-dom";
import { styled } from "styled-components";

// ---------
export const Content = styled.p`
  color: rgba(30, 30, 30, 0.6);
  letter-spacing: 1.2px;
`;
// ------
export const Container = styled.div`
  padding: 50px 200px 10px 200px;
  @media (max-width: 1440px) {
    padding: 50px 120px;
  }
  @media (max-width: 1000px) {
    padding: 30px 40px;
  }
`;
export const BackButton = styled.button`
  border: none;
  background: none;
  text-decoration: underline;
  font-size: 17px;
  color: #202020;
  margin-bottom: 30px;
`;
export const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 70px;
  @media (max-width: 768px) {
    gap: 0px;
  }
`;
export const ProductImage = styled.img`
  width: 90%;
`;
export const ProductPriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  width: 100%;
`;
export const ProductPriceNew = styled.p`
  color: #d87d4a;
  letter-spacing: 3px;
  text-transform: uppercase;
`;
export const ProductName = styled.h1``;
export const ProductPrice = styled.h3`
  margin-top: 40px;
  letter-spacing: 2px;
`;
export const CartContainer = styled.div`
  display: flex;
  gap: 20px;
`;
export const QuantityContainer = styled.div`
  display: flex;
  height: 100%;
`;
export const QuantityButtons = styled.div`
  cursor: pointer;
  height: 100%;
  background-color: #d4d4d4;
  font-size: 22px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  color: #999;
  &:hover,
  &:active {
    color: #000;
  }
`;
export const QuantityInput = styled.input`
  width: 40px;
  height: 100%;
  background-color: #d4d4d4;
  border: none;
  font-size: 18px;
  color: #000;
  text-align: center;
`;
// Features

// also like
export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Card = styled.div`
  width: 28%;
  text-align: center;
  @media (max-width: 768px) {
    width: 32%;
  }
`;
export const CardImg = styled.img`
  width: 100%;
`;
export const CardHeader = styled.h2`
  margin-top: 20px;
  margin-bottom: 20px;
`;
export const Header = styled.h1`
  text-align: center;
  margin-top: 120px;
  margin-bottom: 50px;
  text-transform: uppercase;
`;
export const LinkLike = styled(Link)`
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
