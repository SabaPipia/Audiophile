import styled from "styled-components";
import Card from "./card";
import Total from "./sum";

function Summary() {
  return (
    <>
      <SumHeader>Summary</SumHeader>
      <CardWrapper>
        <Card />
      </CardWrapper>
      <Total />
    </>
  );
}
const SumHeader = styled.h3`
  font-size: 20px;
  text-transform: uppercase;
  margin-bottom: 40px;
  letter-spacing: 1.5px;
`;
const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default Summary;
