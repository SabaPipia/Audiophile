import React from "react";
import { useLocation } from "react-router-dom";
import data from "../../data.json";

function ProductDetails() {
  const loc = useLocation();
  const getProductName = () => {
    const locPath = loc.pathname.split("/");
    const getName = locPath[locPath.length - 1].split("%20");
    const Name = getName.join(" ");
    console.log(Name);
    data.map((item) => {
      if (Name === item.name) {
        console.log(item);
      }
    });
  };
  getProductName();
  return <div>This is ProductDetails</div>;
}

export default ProductDetails;
