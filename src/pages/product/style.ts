import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.h1`
  text-align: center;
  color: #fff;
  background-color: #000;
  text-transform: uppercase;
  padding: 60px;
`;
export const ProductCard = styled.div<{ flexdir: number }>`
  display: flex;
  flex-direction: ${(props) => {
    return props.flexdir % 2 === 0 ? "row" : "row-reverse";
  }};
  margin: 100px 200px;
  gap: 120px;
  align-items: center;
`;
export const ProductWrapper = styled.div``;
export const ProductImage = styled.img`
  width: 450px;
`;
export const ProductContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
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
