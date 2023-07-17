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
  Data?: dataTypes;
  setReload: (reload: boolean) => void;
}

const Suggestions: React.FC<SuggestionsProps> = ({ Data, setReload }) => {
  return (
    <>
      <Header>You may also like</Header>
      <CardContainer>
        {Data?.others.map((item, index) => {
          const categoryName = Data?.others[index].slug
            .split("-")
            .slice(-1)
            .toString();

          return (
            <Card key={index}>
              <CardImg src={Data?.others[index].image.desktop} />
              <CardHeader>{Data?.others[index].name}</CardHeader>
              <LinkLike
                to={`/${
                  categoryName === "speaker" ? `${categoryName}s` : categoryName
                }/${Data?.others[index].slug}`}
              >
                <PrimaryButton
                  onClick={() => {
                    setReload(true);
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
