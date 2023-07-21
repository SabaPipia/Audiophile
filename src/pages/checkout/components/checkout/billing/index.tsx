import Input from "../input";
import { Header, InputWrapper, Wrapper } from "..";

function Billing() {
  return (
    <Wrapper>
      <Header>Billing details</Header>
      <InputWrapper>
        <Input
          regex={/^[A-Za-z\s]+$/}
          req={true}
          reg="name"
          value="Name"
          placeH="John Doe"
        />
        <Input
          regex={/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/}
          req={true}
          reg="email"
          value="Email Address"
          placeH="johndoe@gmail.com"
        />
        <Input
          regex={/^[0-9\s()+-]+$/}
          req={true}
          reg="phone"
          value="Phone Number"
          placeH="+995 123 456 789"
        />
      </InputWrapper>
    </Wrapper>
  );
}

export default Billing;
