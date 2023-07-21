import { Header, InputWrapper, Wrapper } from "..";
import Input from "../input";

function Shipping() {
  return (
    <>
      <Wrapper>
        <Header>Shipping info</Header>
        <Input
          regex={/^[A-Za-z\s]+$/}
          req={true}
          reg="address"
          value="Address"
          placeH="1137 Williams Avenue"
        />
        <InputWrapper>
          <Input
            regex={/^[A-Za-z0-9\s]+$/}
            req={true}
            reg="zip"
            value="ZIP Code"
            placeH="10001"
          />
          <Input
            regex={/^[A-Za-z\s]+$/}
            req={true}
            reg="city"
            value="City"
            placeH="New York"
          />
          <Input
            regex={/^[A-Za-z\s]+$/}
            req={true}
            reg="country"
            value="Country"
            placeH="United States"
          />
        </InputWrapper>
      </Wrapper>
    </>
  );
}
export default Shipping;
