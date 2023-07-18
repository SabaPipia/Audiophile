import React, { useContext } from "react";
import Confirmation from "../../../../../../assets/checkout/icon-order-confirmation.svg";
import { CartContext } from "../../../../../Root";
import {
  ConfirmationModalWrapper,
  ItemReceipt,
  MainMessageWrapper,
  TotalContainer,
  Items,
  VisibleItemContainer,
  ItemInfoContainer,
  ItemPrice,
  ItemQuantity,
  OtherItems,
  ItemImage,
  BackToHomeBTN,
} from "./style";
import { PrimaryButton } from "..";

interface ConfirmationModalProps {
  grandTotal: string;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  grandTotal,
}) => {
  const { cartItems } = useContext(CartContext);
  return (
    <ConfirmationModalWrapper>
      <MainMessageWrapper>
        <div>
          <img src={Confirmation} />
        </div>
        <h1>Thank Your for your order</h1>
        <p>You will receive an email confirmation shortly</p>
      </MainMessageWrapper>
      {cartItems.map((item, index) => {
        if (index === 0) {
          return (
            <ItemReceipt>
              <Items>
                <VisibleItemContainer>
                  <div>
                    <ItemImage
                      src={item?.picture ? `.${item.picture}` : undefined}
                    />
                  </div>
                  <ItemInfoContainer>
                    <ItemPrice>
                      <h3>{item.name}</h3>
                      <h4>${item.price?.toLocaleString()}</h4>
                    </ItemPrice>
                    <ItemQuantity>
                      <h5>x{item.quantity}</h5>
                    </ItemQuantity>
                  </ItemInfoContainer>
                </VisibleItemContainer>
                <OtherItems>
                  <p>and {cartItems.length - 1} other item(s)</p>
                </OtherItems>
              </Items>
              <TotalContainer>
                <div>
                  <h2>Grand Total</h2>
                  <h3>${grandTotal}</h3>
                </div>
              </TotalContainer>
            </ItemReceipt>
          );
        } else {
          return null;
        }
      })}
      <BackToHomeBTN to={"/home"}>
        <PrimaryButton>Back To Home</PrimaryButton>
      </BackToHomeBTN>
    </ConfirmationModalWrapper>
  );
};

export default ConfirmationModal;
