import styled from "styled-components";
import {
  QuantityContainer,
  QuantityButtons,
  QuantityInput,
} from "../../pages/productDetails/style";
import { CartContext } from "../../pages/Root";
import { useState, useContext } from "react";
import { PrimaryButton } from "../Button";
import RemoveConfirmation from "./removeConfirmation";

function Cart() {
  const { cartItems, removeAll, setCartItems } = useContext(CartContext);
  const [rerender, setRerender] = useState(false);
  const [appearRemoveItem, setAppearRemoveItem] = useState(false);
  const [removeItem, setRemoveItem] = useState(false);
  const [selectedItem, SetSelectedItem] = useState<{
    id: string | undefined;
    name: string;
  }>({ id: "", name: "" });
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
      }
    });
    setRerender(!rerender);
  };
  const decrementByOne = (quantity: number, itemName: string) => {
    cartItems.map((item, index) => {
      if (item.name === itemName && quantity > 1 && item.quantity) {
        item.quantity--;
        setRerender(!rerender);
      } else if (item.name === itemName && item.quantity === 1) {
        setAppearRemoveItem(true);
        SetSelectedItem({ id: item.id, name: item.name });

        //
        // if (removeItem) {
        //   const updatedCartItems = cartItems.filter(
        //     (prod) => prod.id !== item.id
        //   );
        //   setCartItems(updatedCartItems);
        //   console.log("s");
        // }
      }
    });
  };
  const handleRemove = () => {
    const updatedCartItems = cartItems.filter(
      (prod) => prod.id !== selectedItem.id
    );
    setCartItems(updatedCartItems);
    setAppearRemoveItem(false);
  };
  const handleCancel = () => {
    setAppearRemoveItem(false);
  };
  return (
    <>
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
                    <QuantityButtons
                      onClick={() => {
                        {
                          product.quantity && product.name
                            ? decrementByOne(product.quantity, product.name)
                            : null;
                        }
                      }}
                    >
                      -
                    </QuantityButtons>
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
            {appearRemoveItem ? (
              <RemoveConfirmation
                selectedItem={selectedItem}
                handleRemove={handleRemove}
                handleCancel={handleCancel}
              />
            ) : null}
            <TotalPriceWrapper>
              <TotalH>total</TotalH>
              <TotalPrice>$ {calcTotalPrice()}</TotalPrice>
            </TotalPriceWrapper>
            <PrimaryButton>Checkout</PrimaryButton>
          </>
        )}
      </ModalCard>
    </>
  );
}

export const ModalCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  position: absolute;
  top: 20px;
  right: 220px;
  background-color: white;
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
