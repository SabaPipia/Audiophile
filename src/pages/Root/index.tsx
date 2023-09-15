import Header from "../../components/header";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Footer from "../../components/footer";
import ProductsInfo from "../../components/info";
import CardComponent from "../home/components/Card";
import { createContext, useState, useEffect } from "react";
import data from "../../../data.json";
import Error from "../error";

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
  filteredData: typeof data;
  setFilteredData: (itemData: typeof data) => void;
}

export const CartContext = createContext<CartContextType>({
  cartItems: [],
  filteredData: [],
  addToCart: () => [],
  removeAll: () => [],
  setCartItems: () => [],
  setFilteredData: () => [],
});

function Root() {
  const location = useLocation();
  const [cartItems, setCartItems] = useState<Item[]>([]);
  const [checkout, setCheckout] = useState(false);
  const [filteredData, setFilteredData] = useState<typeof data>([]);

  const addToCart = (product: Item) => {
    setCartItems([...cartItems, product]);
  };
  const removeAll = () => {
    setCartItems([]);
  };

  const CheckPathName = (loc: string) => {
    {
      loc.startsWith("/checkout") ? setCheckout(true) : setCheckout(false);
    }
  };
  useEffect(() => {
    CheckPathName(location.pathname);
  }, [location]);

  return (
    <>
      <GlobalStyle />
      <>
        <CartContext.Provider
          value={{
            cartItems,
            filteredData,
            addToCart,
            removeAll,
            setCartItems,
            setFilteredData,
          }}
        >
          <Header />
          <Outlet />
          {checkout ? null : (
            <>
              {location.pathname !== "/" ? <CardComponent /> : null}
              <ProductsInfo />
            </>
          )}
        </CartContext.Provider>
        <ScrollRestoration />
        <Footer />
      </>
    </>
  );
}
const GlobalStyle = createGlobalStyle`
* {
  @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap');
  font-family:'Manrope', sans-serif;
  margin: 0;
  padding: 0;
}

`;
export default Root;
