import { keyframes } from "styled-components";

const bounceAmount = "40px";
const bounceAmount2 = "20px";
const slideInAnimation = keyframes`
  0% {
    left: -100%;
  }
  10% {
    left: calc(-100% + ${bounceAmount});
  }
  20% {
    left: 0;
  }
  30% {
    left: calc(0% - ${bounceAmount2});
  }
  40% {
    left:0;
  }
  100% {
    left: 0;
  }
`;
export const modalStyles = {
  content: {
    top: "185px",
    left: "-100%",
    borderRadius: "10px",
    width: "100%",
  },
  overlay: {
    background: "RGBA(0,0,0,0.6)",
  },
};
