import { useState } from "react";
import { Header, Wrapper } from "..";
import { styled } from "styled-components";
import EMoney from "./eMoney";

function Payment() {
  const [firstBtn, setFirstBtn] = useState("false");
  const [secondBtn, setSecondBtn] = useState("true");
  return (
    <Wrapper>
      <Header>Payment Details</Header>
      <PaymentWrapper>
        <PaymentLabel>Payment Method</PaymentLabel>
        <RadioWrapper>
          <RadioContainer
            onClick={() => {
              setFirstBtn("true");
              setSecondBtn("false");
            }}
            firstbtn={firstBtn.toString()}
          >
            <RadioLabel>e-Money</RadioLabel>
          </RadioContainer>
          <RadioContainer
            secondbtn={secondBtn.toString()}
            onClick={() => {
              setSecondBtn("true");
              setFirstBtn("false");
            }}
          >
            <RadioLabel>Cash on Delivery</RadioLabel>
          </RadioContainer>
        </RadioWrapper>
      </PaymentWrapper>
      {firstBtn === "true" ? <EMoney /> : null}
    </Wrapper>
  );
}
const PaymentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const PaymentLabel = styled.h4``;
const RadioLabel = styled.label``;
const RadioContainer = styled.div<{ firstbtn?: string; secondbtn?: string }>`
  cursor: pointer;
  border: 1px solid black;
  padding: 15px;
  border-radius: 10px;
  border: 1px solid #cfcfcf;
  ${(props) => {
    if (props.firstbtn === "true") {
      return `
      &:first-child{
        border:2px solid #d87d4a
      }`;
    } else if (props.secondbtn === "true") {
      return `&:last-child{
        border:2px solid #d87d4a
      }`;
    }
  }};
`;
const RadioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default Payment;
