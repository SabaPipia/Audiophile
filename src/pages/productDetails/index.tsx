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
  Card,
  CardImg,
  CardHeader,
  CardContainer,
  Header,
} from "./style";
import { useEffect, useState, useContext } from "react";
import { PrimaryButton } from "../../components/Button";
import { CartContext } from "../Root";
import GalleryComp from "./components/gallery";
import Features from "./components/features";

const ProductDetails = () => {
  const [productData, setProductData] = useState<dataTypes>();
  const [quantity, setQuantity] = useState<number>(1);
  const loc = useLocation();

  const { addToCart } = useContext(CartContext);

  const getProductName = () => {
    const locPath = loc.pathname.split("/");
    const getName = locPath[locPath.length - 1].split("%20");
    const name = getName.join(" ");
    const itemData = data.filter((item) => name === item.name);
    setProductData(itemData[0]);
  };
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
  const handleAddToCart = () => {
    const itemName = productData?.name.split(" ")[0];
    const productInfo = {
      name: itemName,
      price: productData?.price,
      quantity: quantity,
      id: new Date().toISOString(),
      picture: productData?.image.desktop,
    };
    addToCart(productInfo);
  };
  console.log();
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
            <PrimaryButton onClick={handleAddToCart}>Add to cart</PrimaryButton>
          </CartContainer>
        </ProductPriceContainer>
      </ProductContainer>
      <Features productData={productData} />
      <GalleryComp productData={productData} />
      <Header>You may also like</Header>
      <CardContainer>
        {productData?.others.map((item, index) => {
          return (
            <Card key={index}>
              <CardImg src={productData?.others[index].image.desktop} />
              <CardHeader>{productData?.others[index].name}</CardHeader>
              <PrimaryButton>See Product</PrimaryButton>
            </Card>
          );
        })}
      </CardContainer>
    </Container>
  );
};

export default ProductDetails;
