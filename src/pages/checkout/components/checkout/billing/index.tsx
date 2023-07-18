import Input from "../input";
import { Header, InputWrapper, Wrapper } from "..";

function Billing() {
  return (
    <Wrapper>
      <Header>Billing details</Header>
      <InputWrapper>
        <Input value="Name" placeH="John Doe" />
        <Input value="Email Address" placeH="johndoe@gmail.com" />
        <Input value="Phone Number" placeH="+995 123 456 789" />
      </InputWrapper>
    </Wrapper>
  );
}

export default Billing;
