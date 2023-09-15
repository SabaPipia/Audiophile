import styled from "styled-components";
import CardComponent from "../../pages/home/components/Card";

interface BurgerMenuProps {
  burger: () => void;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ burger }) => {
  return (
    <>
      <div onClick={burger}>
        <CardComponent />
      </div>
    </>
  );
};

export default BurgerMenu;
