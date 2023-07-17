import React from "react";

import styled, { createGlobalStyle } from "styled-components";
import Summary from "./components/summary";
import Checkout from "./components/checkout";

function Main() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <GridContainer>
          <CheckoutWrapper>
            <Checkout />
          </CheckoutWrapper>
          <SummaryWrapper>
            <Summary />
          </SummaryWrapper>
        </GridContainer>
      </Container>
    </>
  );
}
const GlobalStyle = createGlobalStyle`
body{
  background-color:#F1F1F1
}`;
const Header = styled.h1`
  text-transform: uppercase;
`;
const Wrapper = styled.div`
  padding: 70px 60px;
  background-color: #ffffff;
  border-radius: 30px;
`;
const SummaryWrapper = styled(Wrapper)``;
const CheckoutWrapper = styled(Wrapper)``;
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 60fr 30fr;
  gap: 30px;
`;
const Container = styled.div`
  margin: 70px 100px;
  padding: 40px 100px;
`;

export default Main;
