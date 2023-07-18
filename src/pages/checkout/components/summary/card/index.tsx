import { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../../../../Root";

function Card() {
  const { cartItems } = useContext(CartContext);
  return (
    <>
      {cartItems.map((item) => {
        return (
          <CardWrapper>
            <CardRight>
              <CardImg
                src={item?.picture ? `.${item.picture}` : undefined}
                alt={item.name}
              />
              <CardInfo>
                <ItemName>{item.name}</ItemName>
                <ItemPrice>$ {item.price}</ItemPrice>
              </CardInfo>
            </CardRight>
            <QuantityWrapper>
              <ItemQuantity>x{item.quantity}</ItemQuantity>
            </QuantityWrapper>
          </CardWrapper>
        );
      })}
    </>
  );
}

const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const QuantityWrapper = styled.div`
  align-self: center;
`;
const CardRight = styled.div`
  display: flex;
  gap: 20px;
`;
const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
const CardImg = styled.img`
  width: 60px;
`;
const ItemQuantity = styled.h4`
  color: #888;
`;
const ItemName = styled.h4``;
const ItemPrice = styled.h4`
  color: #888;
`;
export default Card;
