import { Link } from "react-router-dom";
import styled, { createGlobalStyle, css, keyframes } from "styled-components";
import { useState } from "react";

import CartIcon from "../../../assets/shared/desktop/icon-cart.svg";
import Logo from "../../../assets/shared/desktop/logo.svg";
import Cart from "../cart";
import hamburder from "../../../assets/shared/tablet/icon-hamburger.svg";
import BurgerMenu from "../burgerMenu";
import { modalStyles } from "./modal.styles";

function Header() {
  const [modalVisible, setModalVisible] = useState(false);
  const [burgerVisible, setBurgerVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
    if (burgerVisible) setBurgerVisible(false);
  };

  const toggleBurger = () => {
    setBurgerVisible(!burgerVisible);
  };

  return (
    <>
      <Div>
        <GlobalStyle modalV={modalVisible} />
        <Container
          onClick={() => {
            !modalVisible ? null : toggleModal();
          }}
        >
          <Navbar>
            <Wrapper>
              <HamburderIcon src={hamburder} onClick={toggleBurger} />
              <NavLink to={"/"}>
                <img src={Logo} />
              </NavLink>
            </Wrapper>
            <LinkWrapper>
              <ItemContainer>
                <Item>
                  <NavLink to={"/"}>Home</NavLink>
                </Item>
                <Item>
                  <NavLink to={"/headphones"}>Headphones</NavLink>
                </Item>
                <Item>
                  <NavLink to={"/speakers"}>Speakers</NavLink>
                </Item>
                <Item>
                  <NavLink to={"/earphones"}>Earphones</NavLink>
                </Item>
              </ItemContainer>
            </LinkWrapper>
            <Wrapper>
              <CardImg src={CartIcon} onClick={toggleModal} />
            </Wrapper>
          </Navbar>
        </Container>
        {modalVisible ? (
          <>
            <ModalOverlay style={modalStyles.overlay}>
              <Cart toggleModal={toggleModal} />
            </ModalOverlay>
          </>
        ) : null}
      </Div>
      <>
        {burgerVisible ? <Background></Background> : null}
        <BurgerWrapper burgervisible={burgerVisible}>
          <BurgerMenu burger={toggleBurger} />
        </BurgerWrapper>
      </>
    </>
  );
}
const Background = styled.div`
  position: fixed;
  width: 100%;
  height: calc(100vh + 200px);
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`; /* Semi-transparent black */
const bounceAmount = "40px";
const bounceAmount2 = "20px";
const slideInAnimation = keyframes`
  0% {
    left: -100%;
  }
  10% {
    left: calc(-100% + ${bounceAmount});
  }
  20% {
    left: 0;
  }
  30% {
    left: calc(0% - ${bounceAmount2});
  }
  40% {
    left:0;
  }
  100% {
    left: 0;
  }
`;
const BurgerWrapper = styled.div<{ burgervisible: boolean }>`
  display: none;
  position: absolute;
  left: -100%;
  width: 100%;
  background-color: #fff;
  transition: all 1s;
  z-index: 9999;
  ${({ burgervisible }) =>
    burgervisible &&
    css`
      display: inline;
      animation: ${slideInAnimation} 1s forwards;
    `}
`;
const Container = styled.div`
  padding: 30px 200px;
  @media (max-width: 1440px) {
    padding: 30px 120px;
  }
  @media (max-width: 1000px) {
    padding: 30px 40px;
  }
`;
const GlobalStyle = createGlobalStyle<{ modalV: boolean }>`
  body {
    overflow:${(props) => {
      if (props.modalV) return "hidden";
      else return "none";
    }};
  }
`;
const ModalOverlay = styled.div`
  position: absolute;
  top: 88px;
  /* left: 100px; */
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

const NavLink = styled(Link)`
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
const Div = styled.div`
  background-color: #020101;
  width: 100%;
`;
const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  position: relative;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 35px;
`;
const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    display: none;
  }
`;
const CardImg = styled.img`
  cursor: pointer;
`;

// exports
export const Item = styled.li`
  list-style: none;
  margin-right: 50px;
  color: #fff;
`;

export const ItemContainer = styled.ul`
  display: flex;
`;
export const HamburderIcon = styled.img`
  display: none;
  height: 100%;
  @media (max-width: 768px) {
    display: inline;
  }
`;
export default Header;
