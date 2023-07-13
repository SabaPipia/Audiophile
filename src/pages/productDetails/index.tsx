import { useLocation, useNavigate } from "react-router-dom";

import data from "../../data.json";
import type dataTypes from "./types";
import {
  BackButton,
  Container,
  ProductPriceNew,
  ProductContainer,
  ProductImage,
  ProductPriceContainer,
  ProductName,
  Content,
  ProductPrice,
  CartContainer,
  QuantityContainer,
  QuantityButtons,
  QuantityInput,
  FeaturesContainer,
  FeaturesContent,
  FeaturesHeader,
  Includes,
  BoxQuantity,
  BoxLine,
  ProductItems,
  Gallery,
  GalleryIMG,
  GalleryLeft,
  GalleryRight,
  Card,
  CardImg,
  CardHeader,
  CardContainer,
  Header,
} from "./style";
import { useEffect, useState } from "react";
import { PrimaryButton } from "../../components/Button";

const ProductDetails = () => {
  const [productData, setProductData] = useState<dataTypes>();
  const [quantity, setQuantity] = useState<number>(1);
  const loc = useLocation();

  const getProductName = () => {
    const locPath = loc.pathname.split("/");
    const getName = locPath[locPath.length - 1].split("%20");
    const name = getName.join(" ");
    const itemData = data.filter((item) => name === item.name);
    setProductData(itemData[0]);
  };
  console.log(productData?.others[0].image.desktop);
  useEffect(() => {
    getProductName();
  }, []);
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };
  const incrementByOne = () => {
    const count = quantity + 1;
    if (quantity != 99) {
      setQuantity(count);
    } else {
      //#Todo Error: Maximum quantity reached.
    }
  };
  const decrementByOne = () => {
    const count = quantity - 1;
    if (quantity != 1) {
      setQuantity(count);
    } else {
      //##Todo Error: Minimum quantity reached.
    }
  };
  return (
    <Container>
      <BackButton onClick={back}>Go Back</BackButton>
      <ProductContainer>
        <ProductImage src={productData?.categoryImage.desktop} />
        <ProductPriceContainer>
          <ProductPriceNew>
            {productData?.new ? "New Product" : null}
          </ProductPriceNew>
          <ProductName>{productData?.name}</ProductName>
          <Content>{productData?.description}</Content>
          <ProductPrice>$ {productData?.price}</ProductPrice>
          <CartContainer>
            <QuantityContainer>
              <QuantityButtons onClick={decrementByOne}>-</QuantityButtons>
              <QuantityInput disabled value={quantity} />
              <QuantityButtons onClick={incrementByOne}>+</QuantityButtons>
            </QuantityContainer>
            <PrimaryButton>Add to cart</PrimaryButton>
          </CartContainer>
        </ProductPriceContainer>
      </ProductContainer>
      <FeaturesContent>
        <FeaturesContainer>
          <FeaturesHeader>features</FeaturesHeader>
          <FeaturesHeader>in the box</FeaturesHeader>
        </FeaturesContainer>
        <FeaturesContainer>
          <Content>{productData?.features}</Content>
          <Includes>
            <BoxLine>
              <div>
                {productData?.includes.map((item) => {
                  return <BoxQuantity>{item.quantity}x </BoxQuantity>;
                })}
              </div>
              <div>
                {productData?.includes.map((item) => {
                  return <ProductItems> {item.item}</ProductItems>;
                })}
              </div>
            </BoxLine>
          </Includes>
        </FeaturesContainer>
      </FeaturesContent>
      <Gallery>
        <GalleryLeft>
          <GalleryIMG src={productData?.gallery.first.desktop} />
          <GalleryIMG src={productData?.gallery.second.desktop} />
        </GalleryLeft>
        <GalleryRight>
          <GalleryIMG src={productData?.gallery.third.desktop} />
        </GalleryRight>
      </Gallery>
      <Header>You may also like</Header>
      <CardContainer>
        <Card>
          <CardImg src={productData?.others[0].image.desktop} />
          <CardHeader>{productData?.others[0].name}</CardHeader>
          <PrimaryButton>See Product</PrimaryButton>
        </Card>
        <Card>
          <CardImg src={productData?.others[1].image.desktop} />
          <CardHeader>{productData?.others[1].name}</CardHeader>
          <PrimaryButton>See Product</PrimaryButton>
        </Card>
        <Card>
          <CardImg src={productData?.others[2].image.desktop} />
          <CardHeader>{productData?.others[2].name}</CardHeader>
          <PrimaryButton>See Product</PrimaryButton>
        </Card>
      </CardContainer>
    </Container>
  );
};

export default ProductDetails;
