import {
  ArrowIMG,
  Card,
  CardBtn,
  CardBtnDiv,
  CardHead,
  CardLink,
  CardWrapper,
} from "../../style";

import IconArrow from "../../../../../assets/shared/desktop/icon-arrow-right.svg";

const CardComponent = () => {
  return (
    <CardWrapper>
      <Card>
        <CardLink to={"/headphones"}>
          <CardHead>headphones</CardHead>
          <CardBtnDiv>
            <CardBtn>Shop</CardBtn>
            <ArrowIMG src={IconArrow} />
          </CardBtnDiv>
        </CardLink>
      </Card>
      <Card>
        <CardLink to={"/speakers"}>
          <CardHead>speakers</CardHead>
          <CardBtnDiv>
            <CardBtn>Shop</CardBtn>
            <ArrowIMG src={IconArrow} />
          </CardBtnDiv>
        </CardLink>
      </Card>
      <Card>
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

export default CardComponent;
