import styled from "styled-components";
import Logo from "../../assets/shared/desktop/logo.svg";
import { Link } from "react-router-dom";
import { ItemContainer, Item } from "../header";
import Twiter from "../../assets/shared/desktop/icon-twitter.svg";
import Fb from "../../assets/shared/desktop/icon-facebook.svg";
import Insta from "../../assets/shared/desktop/icon-instagram.svg";

function Footer() {
  return (
    <FooterWrapper>
      <About>
        <FooterLink to={"/home"}>
          <img src={Logo} />
        </FooterLink>
        <Links>
          <ItemContainer>
            <Item>
              <FooterLink to={"/home"}>Home</FooterLink>
            </Item>
            <Item>
              <FooterLink to={"headphones"}>Headphones</FooterLink>
            </Item>
            <Item>
              <FooterLink to={"speakers"}>Speakers</FooterLink>
            </Item>
            <Item>
              <FooterLink to={"earphones"}>Earphones</FooterLink>
            </Item>
          </ItemContainer>
        </Links>
      </About>
      <FooterPara>
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we're open 7 days a week.
      </FooterPara>
      <Icons>
        <div>
          <CopyRight>Copyright 2023. All Rights Reserved</CopyRight>
        </div>
        <div>
          <a href="https://twitter.com/home" target="_blank">
            <img src={Twiter} />
          </a>
          <a href="https://www.facebook.com/" target="_blank">
            <img src={Fb} />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <img src={Insta} />
          </a>
        </div>
      </Icons>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  background-color: #202020;
  padding: 80px 200px 30px 200px;
  @media (max-width: 1440px) {
    padding: 80px 120px 30px;
  }
  @media (max-width: 1000px) {
    padding: 30px 40px;
  }
  @media (max-width: 768px) {
  }
`;
const About = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;
const Links = styled.div`
  display: flex;
  font-size: 14px;
  flex-direction: column;
  align-items: end;
  gap: 80px;
  ul {
    li {
      margin: 0;
      margin-left: 35px;
    }
  }
  @media (max-width: 768px) {
    align-items: start;
    ul {
      li {
        margin: 0;
        margin-right: 35px;
      }
    }
  }
`;
const Icons = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  text-align: end;
  gap: 20px;
  img {
    cursor: pointer;
  }
  img:hover,
  img:active {
    filter: invert(50%) sepia(51%) saturate(2878%) hue-rotate(346deg)
      brightness(104%) contrast(97%);
  }
  &:last-child {
    a {
      margin-right: 20px;
      &:last-child {
        margin-right: 0px;
      }
    }
  }
`;

const CopyRight = styled.p`
  color: #a09f9f;
`;
const FooterPara = styled.p`
  color: #a09f9f;
  /* margin-top: 15px; */
  margin-bottom: 30px;
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const FooterLink = styled(Link)`
  &:link,
  &:visited {
    text-transform: uppercase;
    color: #fff;
    text-decoration: none;
    font-weight: 400;
  }
  &:hover,
  &:active {
    color: #d87d4a;
  }
`;
export default Footer;
