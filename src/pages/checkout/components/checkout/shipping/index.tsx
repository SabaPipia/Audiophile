import { Header, InputWrapper, Wrapper } from "..";
import Input from "../input";

function Shipping() {
  return (
    <>
      <Wrapper>
        <Header>Shipping info</Header>
        <Input value="Address" placeH="1137 Williams Avenue" />
        <InputWrapper>
          <Input value="ZIP Code" placeH="10001" />
          <Input value="City" placeH="New York" />
          <Input value="Country" placeH="United States" />
        </InputWrapper>
      </Wrapper>
    </>
  );
}
export default Shipping;
