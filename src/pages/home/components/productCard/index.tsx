import Zx9Speaker from "../../../../../assets/home/desktop/image-speaker-zx9.png";

import Earphones from "../../../../../assets/home/desktop/image-earphones-yx1.jpg";
import { ProductInfo, ProductName } from "../../style";

import {
  SecondaryButton,
  SecondaryBtnFill,
} from "../../../../components/Button";

import {
  Container,
  Product,
  ProductImg,
  ProductWrapper,
  ProductSecond,
  ProductWrapperSec,
  ImgWrapper,
  ProductImgT,
  LastProduct,
  FirstContent,
} from "./style";
import { LinkButton } from "../../style";

function ProductCard() {
  return (
    <Container>
      <Product bgcolor={true}>
        <ProductImg src={Zx9Speaker} />
        <ProductWrapper>
          <FirstContent>
            <ProductName>Zx9 speaker</ProductName>
            <ProductInfo>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound
            </ProductInfo>
            <LinkButton to={"/speakers/zx9-speaker"}>
              <SecondaryBtnFill>See Product</SecondaryBtnFill>
            </LinkButton>
          </FirstContent>
        </ProductWrapper>
      </Product>
      <ProductSecond>
        <ProductWrapperSec>
          <ProductName>Zx7 speaker</ProductName>
          <LinkButton to={"/speakers/zx7-speaker"}>
            <SecondaryButton>See Product</SecondaryButton>
          </LinkButton>
        </ProductWrapperSec>
      </ProductSecond>
      <Product bgcolor={false}>
        <ImgWrapper>
          <ProductImgT src={Earphones} />
        </ImgWrapper>
        <LastProduct>
          <ProductWrapper>
            <ProductName color={"#000"}>yx1 Earphones</ProductName>
            <LinkButton to={"/earphones/yx1-earphones"}>
              <SecondaryButton>See Product</SecondaryButton>
            </LinkButton>
          </ProductWrapper>
        </LastProduct>
      </Product>
    </Container>
  );
}

export default ProductCard;
