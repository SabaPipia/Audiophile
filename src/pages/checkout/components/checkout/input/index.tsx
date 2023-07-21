/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useContext } from "react";
import { InputContainer, InputLabel, InputS } from "..";
import { Inputs, InputsContext } from "../../..";

interface InputProps {
  value: string;
  placeH: string;
  reg: keyof Inputs;
  req: boolean;
  regex: RegExp;
}

const Input: React.FC<InputProps> = ({ value, placeH, reg, req, regex }) => {
  const { register, errors } = useContext(InputsContext);

  return (
    <InputContainer>
      <InputLabel>{value}</InputLabel>
      <InputS
        placeholder={placeH}
        {...register(reg, {
          required: req,
          pattern: {
            value: regex,
            message: "Invalid input",
          },
        })}
        style={{ borderColor: errors[reg] ? "red" : "black" }}
      />
    </InputContainer>
  );
};

export default Input;
