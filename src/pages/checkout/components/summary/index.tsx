import React, { useContext } from "react";
import { CartContext } from "../../../Root";
import styled from "styled-components";

function Summary() {
  const { cartItems } = useContext(CartContext);
  console.log(cartItems);
  return (
    <>
      <SumHeader>Summary</SumHeader>
    </>
  );
}
const SumHeader = styled.h3`
  font-size: 20px;
  text-transform: uppercase;
`;

export default Summary;
