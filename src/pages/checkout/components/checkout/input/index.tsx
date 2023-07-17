import React from "react";
import { InputContainer, InputLabel, InputS } from "..";

interface InputProps {
  name: string;
  placeH: string;
}

const Input: React.FC<InputProps> = ({ name, placeH }) => {
  return (
    <InputContainer>
      <InputLabel>{name}</InputLabel>
      <InputS placeholder={placeH} />
    </InputContainer>
  );
};

export default Input;
