import data from "../../data.json";
import { PrimaryButton } from "../../components/Button";

import {
  Header,
  ProductCard,
  ProductWrapper,
  ProductImage,
  ProductContent,
  ContentNew,
  ProductName,
  ButtonContainer,
  ProductLink,
} from "./style";
import { useLocation } from "react-router-dom";

function ProductPage() {
  const params = useLocation();
  const categoryName = params.pathname.slice(1);
  const filterData = data
    .filter((item) => item.category === categoryName)
    .map((item) => item);
  const header = params.pathname.slice(1).toUpperCase();
  return (
    <>
      <Header>{header}</Header>
      <ProductWrapper>
        {filterData.map((item, index) => (
          <ProductCard key={index} flexdir={index}>
            <ProductImage src={item.image.desktop} alt={item.name} />
            <ProductContent>
              <ContentNew>{item.new ? "New Product" : null}</ContentNew>
              <ProductName>{item.name}</ProductName>
              <p>{item.description}</p>
              <ButtonContainer>
                <ProductLink to={`${item.slug}`}>
                  <PrimaryButton>see product</PrimaryButton>
                </ProductLink>
              </ButtonContainer>
            </ProductContent>
          </ProductCard>
        ))}
      </ProductWrapper>
    </>
  );
}

export default ProductPage;
