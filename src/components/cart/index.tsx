import styled from "styled-components";
import {
  QuantityContainer,
  QuantityButtons,
  QuantityInput,
} from "../../pages/productDetails/style";
import { CartContext } from "../../pages/Root";
import { useState, useContext } from "react";
import { PrimaryButton } from "../Button";

function Cart() {
  const { cartItems, removeAll } = useContext(CartContext);
  const [rerender, setRerender] = useState(false);

  const calcTotalPrice = () => {
    let price = 0;
    cartItems.map((item) => {
      if (item.price && item.quantity) {
        price += item.price * item.quantity;
      }
    });
    return price;
  };
  const incrementByOne = (quantity: number, itemName: string) => {
    const newCount = quantity + 1;
    cartItems.map((item) => {
      if (item.name === itemName && item.quantity) {
        item.quantity = newCount;
        setRerender(!rerender);
      }
    });
  };
  return (
    <ModalCard>
      <ModalHeader>
        <ItemCount>Cart ({cartItems.length})</ItemCount>
        <RemoveBTN onClick={removeAll}>Remove all</RemoveBTN>
      </ModalHeader>
      {cartItems.length === 0 ? (
        <WraningText>There are no item(s) in the cart</WraningText>
      ) : (
        <>
          {cartItems.map((product) => {
            return (
              <Card key={product.id}>
                <CardLeft>
                  <CardImg src={`../${product.picture ?? ""}`} />
                  <CardNameWrapper>
                    <ItemName>{product.name}</ItemName>
                    <ItemPrice>$ {product.price}</ItemPrice>
                  </CardNameWrapper>
                </CardLeft>
                <ModalQuantity>
                  <QuantityButtons>-</QuantityButtons>
                  <ModalInput disabled value={product.quantity} />
                  <QuantityButtons
                    onClick={() => {
                      {
                        product.quantity && product.name
                          ? incrementByOne(product.quantity, product.name)
                          : null;
                      }
                    }}
                  >
                    +
                  </QuantityButtons>
                </ModalQuantity>
              </Card>
            );
          })}
          <TotalPriceWrapper>
            <TotalH>total</TotalH>
            <TotalPrice>$ {calcTotalPrice()}</TotalPrice>
          </TotalPriceWrapper>
          <PrimaryButton>Checkout</PrimaryButton>
        </>
      )}
    </ModalCard>
  );
}
const ModalCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  position: absolute;
  top: 20px;
  right: 220px;
  background-color: white;
  backdrop-filter: red;
  padding: 30px;
  width: 350px;
`;
const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ItemCount = styled.h3`
  text-transform: uppercase;
  font-weight: 100;
`;
const RemoveBTN = styled.p`
  font-size: 14px;
  text-decoration: underline;
  color: #777;
`;

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-top: 30px;
`;
const CardLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const CardImg = styled.img`
  width: 60px;
`;
const CardNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-right: 60px;
`;
const ItemName = styled.h3`
  font-size: 17px;
`;
const ItemPrice = styled.h3`
  font-size: 15px;
  color: #888;
`;
const ModalQuantity = styled(QuantityContainer)`
  height: 100%;
`;
const ModalInput = styled(QuantityInput)`
  height: 100%;
  font-size: 22px;
`;
const TotalPriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const TotalH = styled.h3`
  font-size: 16px;
  color: #888;
  text-transform: uppercase;
`;
const TotalPrice = styled.h3`
  font-size: 16px;
`;
const WraningText = styled.h3`
  color: #d87d4a;
  text-align: center;
  font-size: 18px;
  font-weight: 10;
`;
export default Cart;
