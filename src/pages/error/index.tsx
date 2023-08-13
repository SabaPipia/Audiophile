import { useLocation } from "react-router-dom";
import styled from "styled-components";

function Error() {
  const loc = useLocation();
  return (
    <ErrorWrapper>
      <h1>There are no items in this category</h1>
      <p>Current URL:({loc.pathname})</p>
    </ErrorWrapper>
  );
}
const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 250px;
`;
export default Error;
