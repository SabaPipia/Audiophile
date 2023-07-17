import Header from "../../components/header";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Footer from "../../components/footer";
import ProductsInfo from "../../components/info";
import CardComponent from "../home/components/Card";
import { createContext, useState } from "react";

interface Item {
  name?: string;
  price?: number;
  quantity?: number;
  id?: string;
  picture?: string;
}
interface CartContextType {
  cartItems: Item[];
  addToCart: (product: Item) => void;
  removeAll: () => void;
  setCartItems: (items: Item[]) => void;
}

export const CartContext = createContext<CartContextType>({
  cartItems: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  addToCart: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  removeAll: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setCartItems: () => {},
});

function Root() {
  const location = useLocation();
  const [cartItems, setCartItems] = useState<Item[]>([]);

  const addToCart = (product: Item) => {
    setCartItems([...cartItems, product]);
  };
  const removeAll = () => {
    setCartItems([]);
  };
  return (
    <>
      <GlobalStyle />
      <CartContext.Provider
        value={{ cartItems, addToCart, removeAll, setCartItems }}
      >
        <Header />
        <Outlet />
        {location.pathname !== "/home" ? <CardComponent /> : null}
        <ProductsInfo />
      </CartContext.Provider>
      <ScrollRestoration />
      <Footer />
    </>
  );
}
const GlobalStyle = createGlobalStyle`
* {
  @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap');
  font-family:'Manrope', sans-serif;
  margin: 0;
  padding: 0;
}`;
export default Root;
