import styled from "styled-components";
import Img from "../../assets/shared/desktop/image-best-gear.jpg";

function ProductsInfo() {
  return (
    <Container>
      <Content>
        <Head>
          Bring you the <Span>best</Span> audio Gear
        </Head>
        <Paragraph>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </Paragraph>
      </Content>
      <Image />
    </Container>
  );
}
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  padding: 20px 200px;
  @media (max-width: 1440px) {
    padding: 20px 120px;
  }
  @media (max-width: 1300px) {
    gap: 50px;
  }
  @media (max-width: 1000px) {
    padding: 30px 40px;
  }
`;
const Head = styled.h1`
  text-transform: uppercase;
  font-size: 50px;
`;
const Span = styled.span`
  color: #d87d4a;
`;
const Paragraph = styled.p`
  color: #777;
  font-size: 18px;
`;
const Content = styled.div`
  max-width: 600px;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 30px;
`;
const Image = styled.div`
  background-image: url(${Img});
  background-repeat: no-repeat;
  background-position: right;
`;
export default ProductsInfo;
