import {
  StyledModalBody,
  StyledModalBodyBg,
  StyledModalContent,
  StyledModalOverlay,
  StyledModalWrapper,
} from "./Modal.styles";
import { ModalProps } from "./Modal.types";

const Modal: React.FC<ModalProps> = ({ children, isOpen, setIsOpen }) => {
  return (
    <StyledModalWrapper isOpen={isOpen}>
      <StyledModalOverlay onClick={() => setIsOpen(false)} />
      <StyledModalBody>
        <StyledModalBodyBg />
        <StyledModalContent>{children}</StyledModalContent>
      </StyledModalBody>
    </StyledModalWrapper>
  );
};

export default Modal;
