import React from "react";
import Billing from "./billing";
import styled from "styled-components";
import Shipping from "./shipping";
import Payment from "./payment";

function Checkout() {
  return (
    <>
      <MainHeader>Checkout</MainHeader>
      <Billing />
      <Shipping />
      <Payment />
    </>
  );
}
const MainHeader = styled.h1`
  font-size: 35px;
  text-transform: uppercase;
`;
export const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const InputLabel = styled.label`
  font-weight: 600;
`;
export const InputS = styled.input`
  font-size: 18px;
  padding: 20px 30px;
  border: 1px solid #cfcfcf;
  border-radius: 9px;
`;
export const Header = styled.h3`
  color: #d87d4a;
  text-transform: uppercase;
  font-size: 16px;
  margin-bottom: 20px;
`;
export const Wrapper = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export default Checkout;
