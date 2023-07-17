import styled from "styled-components";

interface RemoveConfirmationProps {
  selectedItem: {
    id?: string;
    name: string;
  };
  handleRemove: () => void;
  handleCancel: () => void;
}

const RemoveConfirmation: React.FC<RemoveConfirmationProps> = ({
  selectedItem,
  handleRemove,
  handleCancel,
}) => {
  return (
    <>
      <RemoveItemWrapper>
        <RemoveItemText>
          Are you sure you want to <RemoveItemSpan>remove</RemoveItemSpan> this
          item (<ItemName>{selectedItem.name}</ItemName>) from your cart?
        </RemoveItemText>
        <RemoveItemButtonWrapper>
          <RemoveItemButton onClick={handleRemove}>remove</RemoveItemButton>
          <CancelItemButton onClick={handleCancel}>cancel</CancelItemButton>
        </RemoveItemButtonWrapper>
      </RemoveItemWrapper>
    </>
  );
};
const ItemName = styled.span`
  color: #ff7b00;
`;
const RemoveItemWrapper = styled.div`
  border: 1px solid #d87e4a68;
  border-radius: 10px;
  padding: 4px;
`;
const RemoveItemSpan = styled.span`
  color: red;
`;
const RemoveItemText = styled.h3`
  font-size: 14px;
  font-weight: 100;
  text-transform: uppercase;
  text-align: center;
`;
const RemoveItemButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 6px;
`;
const Button = styled.button`
  cursor: pointer;
  text-transform: uppercase;
  padding: 5px 7px;
  border: none;
  color: #fff;
`;
const RemoveItemButton = styled(Button)`
  background-color: #da4040;
  &:hover {
    background-color: #f89a9a;
  }
`;
const CancelItemButton = styled(Button)`
  background-color: #ff9c2a;
  &:hover {
    background-color: #fcc98f;
  }
`;
export default RemoveConfirmation;
