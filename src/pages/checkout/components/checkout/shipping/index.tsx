import React from "react";
import { Header, InputWrapper, Wrapper } from "..";
import Input from "../input";
import { styled } from "styled-components";

function Shipping() {
  return (
    <>
      <Wrapper>
        <Header>Shipping info</Header>
        <Input name="Address" placeH="1137 Williams Avenue" />
        <InputWrapper>
          <Input name="ZIP Code" placeH="10001" />
          <Input name="City" placeH="New York" />
          <Input name="Country" placeH="United States" />
        </InputWrapper>
      </Wrapper>
    </>
  );
}
export default Shipping;
