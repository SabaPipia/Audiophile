import React from "react";
import { styled } from "styled-components";
import Input from "../input";
import { Header, InputWrapper, Wrapper } from "..";

function Billing() {
  return (
    <Wrapper>
      <Header>Billing details</Header>
      <InputWrapper>
        <Input name="Name" placeH="John Doe" />
        <Input name="Email Address" placeH="johndoe@gmail.com" />
        <Input name="Phone Number" placeH="+995 123 456 789" />
      </InputWrapper>
    </Wrapper>
  );
}

export default Billing;
