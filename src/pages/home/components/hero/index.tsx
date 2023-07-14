import {
  Hero,
  BtnWrapper,
  HeroContent,
  Product,
  ProductInfo,
  ProductName,
  LinkButton,
} from "../../style";
import { PrimaryButton } from "../../../../components/Button";

function HeroComponent() {
  return (
    <Hero>
      <HeroContent>
        <Product>New Product</Product>
        <ProductName>XX99 MARK II HeadPhones</ProductName>
        <ProductInfo>
          Experience natural,lifelike audio and expectional build quality made
          for the passionate music enthusiast
        </ProductInfo>
        <BtnWrapper>
          <LinkButton to={"/headphones/XX99%20Mark%20II%20Headphones"}>
            <PrimaryButton>See Product</PrimaryButton>
          </LinkButton>
        </BtnWrapper>
      </HeroContent>
    </Hero>
  );
}

export default HeroComponent;
