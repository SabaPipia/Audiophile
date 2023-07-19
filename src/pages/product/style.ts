import { Link } from "react-router-dom";
import styled from "styled-components";

export const ProductCard = styled.div<{ flexdir: number }>`
  display: flex;
  flex-direction: ${(props) => {
    return props.flexdir % 2 === 0 ? "row" : "row-reverse";
  }};
  gap: 120px;
  align-items: center;
  padding: 70px 200px;
  @media (max-width: 1440px) {
    padding: 70px 120px;
    gap: 70px;
  }
  @media (max-width: 1000px) {
    padding: 50px 40px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;
export const Header = styled.h1`
  text-align: center;
  color: #fff;
  background-color: #000;
  text-transform: uppercase;
  padding: 60px;
`;
export const ProductWrapper = styled.div``;
export const ProductImage = styled.img`
  width: 450px;
  @media (max-width: 1000px) {
    width: 300px;
  }
`;
export const ProductContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media (max-width: 1000px) {
    gap: 20px;
  }
`;
export const ContentNew = styled.h4`
  font-size: 15px;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: #d87d4a;
`;
export const ProductName = styled.h1`
  font-weight: 400;
  font-size: 40px;
`;
export const ProductDescription = styled.p``;
export const ButtonContainer = styled.div``;
export const ProductLink = styled(Link)`
  &:link,
  &:visited {
    color: #fff;
    text-decoration: none;
  }
`;
