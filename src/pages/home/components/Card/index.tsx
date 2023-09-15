import {
  ArrowIMG,
  Card,
  CardBtn,
  CardBtnDiv,
  CardHead,
  CardLink,
  CardWrapper,
} from "../../style";

import speakersItemImg from "../../../../../assets/product-zx9-speaker/desktop/image-category-page-preview.png";
import headphonesItemImg from "../../../../../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview-removebg-preview.png";
import earphonesItemImg from "../../../../../assets/product-yx1-earphones/desktop/image-category-page-preview-removebg-preview.png";

import IconArrow from "../../../../../assets/shared/desktop/icon-arrow-right.svg";
import styled from "styled-components";

const CardComponent = () => {
  return (
    <CardWrapper>
      <Card>
        <IconImg src={headphonesItemImg} />
        <CardLink to={"/headphones"}>
          <CardHead>headphones</CardHead>
          <CardBtnDiv>
            <CardBtn>Shop</CardBtn>
            <ArrowIMG src={IconArrow} />
          </CardBtnDiv>
        </CardLink>
      </Card>
      <Card>
        <IconImg src={speakersItemImg} />
        <CardLink to={"/speakers"}>
          <CardHead>speakers</CardHead>
          <CardBtnDiv>
            <CardBtn>Shop</CardBtn>
            <ArrowIMG src={IconArrow} />
          </CardBtnDiv>
        </CardLink>
      </Card>
      <Card>
        <IconImg src={earphonesItemImg} />
        <CardLink to={"/earphones"}>
          <CardHead>earphones</CardHead>
          <CardBtnDiv>
            <CardBtn>Shop</CardBtn>
            <ArrowIMG src={IconArrow} />
          </CardBtnDiv>
        </CardLink>
      </Card>
    </CardWrapper>
  );
};

export const IconImg = styled.img`
  position: absolute;
  width: 250px;
  top: -140px;
  transform: translateX(-50%);
`;
export default CardComponent;
