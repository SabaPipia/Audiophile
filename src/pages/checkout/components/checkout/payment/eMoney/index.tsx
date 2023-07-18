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
`;
export default EMoney;
