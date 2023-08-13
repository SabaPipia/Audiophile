import { useLocation, useNavigate } from "react-router-dom";

import data from "../../../data.json";
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
} from "./style";
import { useEffect, useState, useContext } from "react";
import { PrimaryButton } from "../../components/Button";
import { CartContext } from "../Root";
import GalleryComp from "./components/gallery";
import Features from "./components/features";
import Suggestions from "./components/suggestions";
import Error from "../error";

const ProductDetails = () => {
  const [productData, setProductData] = useState<dataTypes>();
  const [quantity, setQuantity] = useState<number>(1);
  const loc = useLocation();
  const [reload, setReload] = useState<boolean>(false);

  const { cartItems, addToCart, setCartItems } = useContext(CartContext);

  useEffect(() => {
    const locPath = loc.pathname.split("/");
    const getName = locPath[locPath.length - 1].split("%20").join(" ");
    const itemData = data.filter((item) => getName === item.slug);
    setProductData(itemData[0]);
  }, [reload]);

  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };

  const incrementByOne = () => {
    if (quantity != 99) {
      setQuantity(quantity + 1);
    }
  };

  const decrementByOne = () => {
    if (quantity != 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleAddToCart = () => {
    const itemName = productData?.name.split(" ").slice(0, -1).join(" ");
    const existingItem = cartItems.find((item) => item.name === itemName);
    const productInfo = {
      name: itemName,
      price: productData?.price,
      quantity: quantity,
      id: new Date().toISOString(),
      picture: productData?.image.desktop,
    };
    if (existingItem) {
      setCartItems(
        cartItems.map((item) => {
          if (item.name === itemName && item.quantity) {
            return { ...item, quantity: item.quantity + quantity };
          }
          return item;
        })
      );
    } else {
      addToCart(productInfo);
    }
    setQuantity(1);
  };
  return (
    <>
      {productData ? (
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
                <PrimaryButton onClick={handleAddToCart}>
                  Add to cart
                </PrimaryButton>
              </CartContainer>
            </ProductPriceContainer>
          </ProductContainer>
          <Features productData={productData} />
          <GalleryComp productData={productData} />
          <Suggestions
            productData={productData}
            reload={reload}
            setReload={setReload}
          />
        </Container>
      ) : (
        <Error />
      )}
    </>
  );
};

export default ProductDetails;
