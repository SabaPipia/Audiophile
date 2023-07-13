import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  padding: 15px 50px;
  text-transform: uppercase;
  border: none;
`;
export const PrimaryButton = styled(Button)`
  background-color: #d87d4a;
  &:hover,
  &:active {
    background-color: #e5b69b;
    color: #fff;
  }
`;

export const SecondaryButton = styled(Button)`
  border: 1px solid black;
  color: #000;
  &:hover,
  &:active {
    background-color: #000;
    color: #fff;
  }
`;
export const SecondaryBtnFill = styled(SecondaryButton)`
  cursor: pointer;
  background-color: #000;
  color: #fff;
  border: none;
  &:hover,
  &:active {
    background-color: #222;
  }
`;
