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
  grid-template-columns: 70fr 30fr;
  gap: 20px;
  @media (max-width: 1135px) {
    display: grid;
    grid-template-columns: 60fr 40fr;
  }
`;
const Container = styled.div`
  padding: 90px 200px;
  @media (max-width: 1440px) {
    padding: 30px 120px;
  }
  @media (max-width: 1300px) {
    padding: 40px 40px;
  }
`;

export default Main;
