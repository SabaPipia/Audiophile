import Input from "../../input";
import { styled } from "styled-components";

function EMoney() {
  return (
    <>
      <EMoneyWrapper>
        <Input value="e-Money Number" placeH="123456789" />
        <Input value="e-Money Pin" placeH="1234" />
      </EMoneyWrapper>
    </>
  );
}
const EMoneyWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  @media (max-width: 1135px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;
export default EMoney;
