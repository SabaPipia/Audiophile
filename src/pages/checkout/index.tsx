import styled, { createGlobalStyle } from "styled-components";
import Summary from "./components/summary";
import Checkout from "./components/checkout";
import { createContext, useState } from "react";
import {
  FieldErrors,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
  useForm,
} from "react-hook-form";

export type Inputs = {
  name: string;
  email: string;
  phone: string;
  address: string;
  zip: string;
  city: string;
  country: string;
  eNumber: string;
  ePin: string;
};
type InputsContextValue = {
  register: UseFormRegister<Inputs>;
  onSubmit: SubmitHandler<Inputs>;
  handleSubmit: UseFormHandleSubmit<Inputs, undefined>;
  modalIsOpen: boolean;
  setModalIsOpen: (modal: boolean) => void;
  errors: FieldErrors<Inputs>;
};

export const InputsContext = createContext<InputsContextValue>(
  {} as InputsContextValue
);

function Main() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setModalIsOpen(!modalIsOpen);
    console.log(data);
  };
  return (
    <>
      <GlobalStyle />
      <Container>
        <GridContainer>
          <InputsContext.Provider
            value={{
              register,
              handleSubmit,
              onSubmit,
              setModalIsOpen,
              modalIsOpen,
              errors,
            }}
          >
            <CheckoutWrapper>
              <Checkout />
            </CheckoutWrapper>
            <div>
              <SummaryWrapper>
                <Summary />
              </SummaryWrapper>
            </div>
          </InputsContext.Provider>
        </GridContainer>
      </Container>
    </>
  );
}
const GlobalStyle = createGlobalStyle`
body{
  background-color:#F1F1F1
 
}
@media (max-width:375px) {
  body{
    background-color:#fff
  }
}
`;

const Wrapper = styled.div`
  padding: 30px 30px;
  background-color: #ffffff;
  border-radius: 30px;
  @media (max-width: 375px) {
    background-color: #fff;
    padding: 0px 0px;
  }
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
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
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
