import { Link } from "react-router-dom";
import styled from "styled-components";

export const ConfirmationModalWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 35px;
  @media (max-width: 465px) {
    padding: 0px;
    width: 250px;
  }
`;

export const MainMessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 90%;
  h1 {
    font-size: 30px;
  }
  p {
    color: #777;
  }
`;
export const DummyDiv = styled.div`
  width: 40px;
  height: 40px;
  background-color: #000;
  margin-right: 10px;
`;
export const ItemReceipt = styled.div`
  display: grid;
  grid-template-columns: 60fr 40fr;
  border-radius: 20px;
  @media (max-width: 465px) {
    grid-template-columns: 1fr;
  }
`;
export const VisibleItemContainer = styled.div`
  display: flex;
  border-bottom: 1px solid gray;
  padding-bottom: 10px;
`;
export const Items = styled.div`
  background-color: #f1f1f1;
  padding: 20px;
`;
export const ItemInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
`;
export const ItemPrice = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  h4 {
    font-size: 14px;
    color: #777;
  }
  h3 {
    font-size: 16px;
  }
`;
export const ItemQuantity = styled.div`
  color: #888;
  font-weight: 900;
  align-self: center;
`;
export const ItemImage = styled.img`
  width: 50px;
  margin-right: 8px;
`;
export const TotalContainer = styled.div`
  border-radius: 0px 10px 10px 0px;
  background-color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    color: #888;
    font-size: 15px;
    font-weight: 100;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    margin-bottom: 10px;
  }
  h3 {
    font-weight: 400;
    color: #fff;
    font-size: 16px;
  }
  @media (max-width: 465px) {
    padding: 20px;
    align-items: start;
  }
`;

export const OtherItems = styled.div`
  text-align: center;
  margin-top: 10px;
  p {
    font-size: 14px;
    color: #888;
  }
`;
export const BackToHomeBTN = styled(Link)``;
