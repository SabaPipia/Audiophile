import React from "react";
import styled from "styled-components";

interface SumCardProps {
  name: string;
  value: string | number;
}

const SumCard: React.FC<SumCardProps> = ({ name, value }) => {
  return (
    <CardWrapper>
      <TotalText>{name}</TotalText>
      <TotalAmount>${value}</TotalAmount>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const TotalText = styled.h4`
  font-weight: 200;
  text-transform: uppercase;
  color: #999;
`;
const TotalAmount = styled.h4``;
export default SumCard;
