import React from "react";
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
        <GalleryRight
          imgsrc={productData?.gallery.third.desktop ?? ""}
        ></GalleryRight>
      </Gallery>
    </>
  );
};

const Gallery = styled.div`
  margin-top: 70px;
  display: flex;
  gap: 15px;
  justify-content: center;
  width: 100%;
`;
export const GalleryLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 40%;
  /* flex: 1; */
`;
export const GalleryRight = styled.div<{ imgsrc: string }>`
  flex: 1;
  background-image: ${(props) => {
    return `url(${props.imgsrc})`;
  }};
  width: 100%;
  background-size: cover;
  object-fit: cover;
  background-repeat: no-repeat;
`;

export const GalleryIMG = styled.img`
  &:last-child {
  }
`;
export default GalleryComp;
