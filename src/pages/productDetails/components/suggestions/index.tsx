import React from "react";
import { PrimaryButton } from "../../../../components/Button";
import dataTypes from "../../types";
import {
  Card,
  CardContainer,
  CardHeader,
  CardImg,
  Header,
  LinkLike,
} from "../../style";

interface SuggestionsProps {
  productData?: dataTypes;
  reload: boolean;
  setReload: (rel: boolean) => void;
}

const Suggestions: React.FC<SuggestionsProps> = ({
  productData,
  reload,
  setReload,
}) => {
  return (
    <>
      <Header>You may also like</Header>
      <CardContainer>
        {productData?.others.map((_, index) => {
          const categoryName = productData?.others[index].slug
            .split("-")
            .slice(-1)
            .toString();
          return (
            <Card key={index}>
              <CardImg src={productData?.others[index].image.desktop} />
              <CardHeader>{productData?.others[index].name}</CardHeader>
              <LinkLike
                to={`/${
                  categoryName === "speaker" ? `${categoryName}s` : categoryName
                }/${productData?.others[index].slug}`}
              >
                <PrimaryButton
                  onClick={() => {
                    setReload(!reload);
                  }}
                >
                  See Product
                </PrimaryButton>
              </LinkLike>
            </Card>
          );
        })}
      </CardContainer>
    </>
  );
};

export default Suggestions;
