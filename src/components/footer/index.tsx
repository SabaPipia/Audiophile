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
        <FooterPara>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we're open 7 days a week.
        </FooterPara>
        <FooterPara>Copyright 2023. All Rights Reserved</FooterPara>
      </About>
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
        <Icons>
          <a href="https://twitter.com/home" target="_blank">
            <img src={Twiter} />
          </a>
          <a href="https://www.facebook.com/" target="_blank">
            <img src={Fb} />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <img src={Insta} />
          </a>
        </Icons>
      </Links>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: #202020;
  padding: 80px 200px 30px 200px;
`;
const About = styled.div``;
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
`;
const Icons = styled.div`
  align-items: center;
  display: flex;
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
`;

const FooterPara = styled.p`
  color: #a09f9f;
  margin-top: 15px;
  margin-bottom: 30px;
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
