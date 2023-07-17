import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../../Root";
import { styled } from "styled-components";
import SumCard from "./sumCard";

function Total() {
  const [amount, setAmount] = useState("");
  const [shippingFee, setShippingFee] = useState(50);
  const [vat, setVat] = useState("");
  const [grandTotal, setGrandTotal] = useState("");

  const { cartItems } = useContext(CartContext);
  useEffect(() => {
    const modifiedSum = cartItems.reduce((total, item) => {
      if (item.price && item.quantity) {
        return total + item.price * item.quantity;
      }
      return total;
    }, 0);

    const vatRate = 0.2;
    const sumToNumber = modifiedSum;
    console.log(sumToNumber);
    const vatValue = Math.floor(sumToNumber * vatRate);
    const grandTotalValue = sumToNumber + vatValue + shippingFee;

    setAmount(modifiedSum.toLocaleString());
    setVat(vatValue.toLocaleString());
    setGrandTotal(grandTotalValue.toLocaleString());
  }, [cartItems, shippingFee]);

  return (
    <TotalWrapper>
      <SumWrapper>
        <SumCard name="total" value={amount} />
        <SumCard name="shipping" value={shippingFee} />
        <SumCard name="total" value={vat} />
      </SumWrapper>
      <GrandWrapper>
        <GrandTotalText>Grand Total</GrandTotalText>
        <GrandTotalAmount>${grandTotal}</GrandTotalAmount>
      </GrandWrapper>
      <PrimaryButton>Continue & pay</PrimaryButton>
    </TotalWrapper>
  );
}
const TotalWrapper = styled.div`
  margin-top: 40px;
`;
export const Button = styled.button`
  cursor: pointer;
  padding: 15px 50px;
  text-transform: uppercase;
  border: none;
  width: 100%;
`;
export const PrimaryButton = styled(Button)`
  background-color: #d87d4a;
  color: #fff;
  &:hover,
  &:active {
    background-color: #e5b69b;
  }
`;
const GrandWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
`;
const SumWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 30px;
`;
const GrandTotalText = styled.h4`
  font-weight: 200;
  text-transform: uppercase;
  color: #999;
`;
const GrandTotalAmount = styled.h4`
  color: #d87d4a;
`;

export default Total;