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
          <FeaturesHeader>in the box</FeaturesHeader>
        </FeaturesContainer>
        <FeaturesContainer>
          <Content>{productData?.features}</Content>
          <Includes>
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
`;

const FeaturesContainer = styled.div`
  display: grid;
  grid-template-columns: 70fr 30fr;
  gap: 80px;
`;

const FeaturesHeader = styled.h1`
  text-transform: uppercase;
  margin-bottom: 30px;
`;

const Includes = styled.div``;

const BoxLine = styled.div`
  display: flex;
  gap: 20px;
`;

const BoxQuantity = styled.h3`
  color: #d87d4a;
  font-weight: 100;
`;

export const ProductItems = styled.h3`
  color: #838383;
  font-weight: 100;
`;

export default Features;