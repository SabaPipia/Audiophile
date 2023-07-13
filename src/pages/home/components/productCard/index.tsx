import Zx9Speaker from "../../../../assets/home/desktop/image-speaker-zx9.png";

import Earphones from "../../../../assets/home/desktop/image-earphones-yx1.jpg";
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
} from "./style";

function ProductCard() {
  return (
    <Container>
      <Product bgColor={true}>
        <ProductImg src={Zx9Speaker} />
        <ProductWrapper>
          <ProductName>Zx9 speaker</ProductName>
          <ProductInfo>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound
          </ProductInfo>
          <SecondaryBtnFill>See Product</SecondaryBtnFill>
        </ProductWrapper>
      </Product>
      <ProductSecond>
        <ProductWrapperSec>
          <ProductName>Zx7 speaker</ProductName>
          <SecondaryButton>See Product</SecondaryButton>
        </ProductWrapperSec>
      </ProductSecond>
      <Product bgColor={false}>
        <ImgWrapper>
          <ProductImgT src={Earphones} />
        </ImgWrapper>
        <LastProduct>
          <ProductWrapper>
            <div>
              <ProductName color={"#000"}>yx1 Earphones</ProductName>
              <SecondaryButton>See Product</SecondaryButton>
            </div>
          </ProductWrapper>
        </LastProduct>
      </Product>
    </Container>
  );
}

export default ProductCard;
