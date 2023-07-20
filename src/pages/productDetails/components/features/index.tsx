import React from "react";
import styled from "styled-components";
import { Content } from "../../style";
import dataTypes from "../../types";

interface FeaturesProps {
  productData?: dataTypes;
}
const Features: React.FC<FeaturesProps> = ({ productData }) => {
  return (
    <div>
      <FeaturesContent>
        <FeaturesContainer>
          <FeaturesHeader>features</FeaturesHeader>
          <Content>{productData?.features}</Content>
        </FeaturesContainer>
        <FeaturesContainer>
          <Includes>
            <FeaturesHeader>in the box</FeaturesHeader>
            <BoxLine>
              <div>
                {productData?.includes.map((item) => {
                  return (
                    <BoxQuantity key={item.item}>{item.quantity}x </BoxQuantity>
                  );
                })}
              </div>
              <div>
                {productData?.includes.map((item) => {
                  return (
                    <ProductItems key={item.item}> {item.item}</ProductItems>
                  );
                })}
              </div>
            </BoxLine>
          </Includes>
        </FeaturesContainer>
      </FeaturesContent>
    </div>
  );
};

const FeaturesContent = styled.div`
  margin-top: 120px;
  display: grid;
  grid-template-columns: 70fr 30fr;
  gap: 80px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const FeaturesContainer = styled.div`
  @media (max-width: 550px) {
    h1 {
      font-size: 24px;
    }
    p {
      font-size: 14px;
    }
  }
`;

const FeaturesHeader = styled.h1`
  text-transform: uppercase;
  margin-bottom: 30px;
`;

const Includes = styled.div`
  @media (max-width: 768px) {
    display: flex;
  }
  @media (max-width: 375px) {
    flex-direction: column;
  }
`;

const BoxLine = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 768px) {
    margin-left: auto;
  }
  @media (max-width: 375px) {
    margin-left: 0;
  }
`;

const BoxQuantity = styled.h3`
  color: #d87d4a;
  font-weight: 100;
  @media (max-width: 550px) {
    font-size: 16px;
  }
`;

export const ProductItems = styled.h3`
  color: #838383;
  font-weight: 100;
  @media (max-width: 550px) {
    font-size: 16px;
  }
`;

export default Features;
