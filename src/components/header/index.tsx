import { Link } from "react-router-dom";
import styled from "styled-components";
import CartIcon from "../../assets/shared/desktop/icon-cart.svg";
import Logo from "../../assets/shared/desktop/logo.svg";
import * as styles from "../../components/variables";

function Header() {
  return (
    <Div>
      <Container>
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
            <img src={CartIcon} />
          </Wrapper>
        </Navbar>
      </Container>
    </Div>
  );
}
const Container = styled.div`
  padding: ${styles.container};
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
`;
const Wrapper = styled.div``;
const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
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
