import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import CartIcon from "../../assets/shared/desktop/icon-cart.svg";
import Logo from "../../assets/shared/desktop/logo.svg";
import { useState } from "react";
import Cart from "../cart";

function Header() {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <Div>
      <GlobalStyle modalV={modalVisible} />
      <Container
        onClick={() => {
          if (!modalVisible) {
            return;
          } else {
            toggleModal();
          }
        }}
      >
        <Navbar>
          <Wrapper>
            <NavLink to={"/home"}>
              <img src={Logo} />
            </NavLink>
          </Wrapper>
          <LinkWrapper>
            <ItemContainer>
              <Item>
                <NavLink to={"/home"}>Home</NavLink>
              </Item>
              <Item>
                <NavLink to={"headphones"}>Headphones</NavLink>
              </Item>
              <Item>
                <NavLink to={"speakers"}>Speakers</NavLink>
              </Item>
              <Item>
                <NavLink to={"earphones"}>Earphones</NavLink>
              </Item>
            </ItemContainer>
          </LinkWrapper>
          <Wrapper>
            <CardImg src={CartIcon} onClick={toggleModal} />
          </Wrapper>
        </Navbar>
      </Container>
      {modalVisible ? (
        <ModalOverlay>
          <Cart toggleModal={toggleModal} />
        </ModalOverlay>
      ) : null}
    </Div>
  );
}
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
  position: fixed;
  top: 88px;
  left: 0;
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
  background-color: #101010;
`;
const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  position: relative;
`;
const Wrapper = styled.div``;
const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
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
export default Header;
