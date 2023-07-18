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
          <div>
            <SummaryWrapper>
              <Summary />
            </SummaryWrapper>
          </div>
        </GridContainer>
      </Container>
    </>
  );
}
const GlobalStyle = createGlobalStyle`
body{
  background-color:#F1F1F1
}`;

const Wrapper = styled.div`
  padding: 30px 30px;
  background-color: #ffffff;
  border-radius: 30px;
`;
const SummaryWrapper = styled(Wrapper)``;
const CheckoutWrapper = styled(Wrapper)``;
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 75fr 25fr;
  gap: 30px;
`;
const Container = styled.div`
  margin: 70px 100px;
  padding: 40px 100px;
`;

export default Main;
