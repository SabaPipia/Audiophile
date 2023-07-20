import styled from "styled-components";
import {
  QuantityContainer,
  QuantityButtons,
  QuantityInput,
} from "../../pages/productDetails/style";
import { CartContext } from "../../pages/Root";
import { useState, useContext } from "react";
import RemoveConfirmation from "./removeConfirmation";
import { Link } from "react-router-dom";

interface CartProps {
  toggleModal: () => void;
}
const Cart: React.FC<CartProps> = ({ toggleModal }) => {
  const { cartItems, removeAll, setCartItems } = useContext(CartContext);
  const [rerender, setRerender] = useState(false);
  const [appearRemoveItem, setAppearRemoveItem] = useState(false);
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
  const generateCheckoutUrl = () => {
    let chars = "";
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    chars += letters;
    let randomUrl = "";
    for (let i = 0; i < 50; i++) {
      const letter = Math.floor(Math.random() * chars.length);
      randomUrl += chars.charAt(letter);
    }
    return randomUrl;
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
                  <div>
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
                  </div>
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
            <CheckoutLink
              to={`/checkout/${generateCheckoutUrl()}`}
              onClick={toggleModal}
            >
              <PrimaryButton>Checkout</PrimaryButton>
            </CheckoutLink>
          </>
        )}
      </ModalCard>
    </>
  );
};

const CheckoutLink = styled(Link)``;
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

export const ModalCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  position: absolute;
  top: 20px;
  right: 230px;
  background-color: white;
  padding: 30px;
  width: 350px;
  border-radius: 10px;
  @media (max-width: 1300px) {
    right: 130px;
  }
  @media (max-width: 1000px) {
    right: 40px;
  }
  @media (max-width: 500px) {
    position: absolute;
    right: 0px;
    padding: 20px;
    width: 100%;
    margin: 20px;
    width: 320px;
    display: flex;
    justify-content: center;
    top: 0px;
  }
  @media (max-width: 375px) {
    /* width: 100%; */
    /* padding: 0; */
    margin: 7px;
  }
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
  @media (max-width: 500px) {
    display: grid;
    grid-template-columns: 70fr 30fr;
  }
`;
const CardLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  @media (max-width: 500px) {
    width: 200px;
  }
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
  @media (max-width: 500px) {
    div {
      width: 10px;
    }
  }
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
