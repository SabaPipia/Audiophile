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
import { useEffect, useState } from "react";

function ProductPage() {
  const [filteredData, setFilteredData] = useState<typeof data>([]);
  const [category, setCategory] = useState("");
  const params = useLocation();
  useEffect(() => {
    const categoryName = params.pathname.slice(1);
    setCategory(categoryName);
    setFilteredData(
      data.filter((item) => item.category === categoryName).map((item) => item)
    );
  }, [params.pathname]);
  return (
    <>
      <Header>{category}</Header>
      <ProductWrapper>
        {filteredData.map((item, index) => (
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
