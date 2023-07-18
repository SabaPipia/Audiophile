import React from "react";
import { InputContainer, InputLabel, InputS } from "..";

interface InputProps {
  value: string;
  placeH: string;
}

const Input: React.FC<InputProps> = ({ value, placeH }) => {
  return (
    <InputContainer>
      <InputLabel>{value}</InputLabel>
      <InputS placeholder={placeH} />
    </InputContainer>
  );
};

export default Input;
