import Header from "../../components/header";
import { Outlet, useLocation } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Footer from "../../components/footer";
import ProductsInfo from "../../components/info";
import CardComponent from "../home/components/Card";

function Root() {
  const location = useLocation();
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Outlet />
      {location.pathname !== "/home" ? <CardComponent /> : null}
      <ProductsInfo />
      <Footer />
    </div>
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
