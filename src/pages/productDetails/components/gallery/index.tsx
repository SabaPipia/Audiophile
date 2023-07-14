import React, { useContext } from "react";
import styled from "styled-components";
import dataTypes from "../../types";

interface GalleryProps {
  productData?: dataTypes;
}

const GalleryComp: React.FC<GalleryProps> = ({ productData }) => {
  return (
    <>
      <Gallery>
        <GalleryLeft>
          <GalleryIMG src={productData?.gallery.first.desktop} />
          <GalleryIMG src={productData?.gallery.second.desktop} />
        </GalleryLeft>
        <GalleryRight>
          <GalleryIMG src={productData?.gallery.third.desktop} />
        </GalleryRight>
      </Gallery>
    </>
  );
};
const Gallery = styled.div`
  margin-top: 70px;
  display: flex;
  scale: 1;
  gap: 30px;
  justify-content: center;
`;
export const GalleryLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
export const GalleryRight = styled.div``;

export const GalleryIMG = styled.img``;
export default GalleryComp;
