import { HeadingFour } from "$components/Typography/Typography.styles";
import CloseIcon from "$svgs/CloseIcon";
import {
  StyledModalBody,
  StyledModalBoxOne,
  StyledModalBoxTwo,
  StyledModalCloseBtn,
  StyledModalContent,
  StyledModalHeadingWrapper,
  StyledModalOverlay,
  StyledModalWrapper,
} from "./ModalTwo.styles";
import { ModalTwoProps } from "./ModalTwo.types";

const ModalTwo: React.FC<ModalTwoProps> = ({
  children,
  isOpen,
  setIsOpen,
  contentBackGroundColor,
  headingBackGroundColor,
  headingColor,
  headingHeight,
  text,
}) => {
  return (
    <StyledModalWrapper isOpen={isOpen}>
      <StyledModalOverlay onClick={() => setIsOpen(false)} />
      <StyledModalBody>
        <StyledModalCloseBtn onClick={() => setIsOpen(false)}>
          <CloseIcon />
        </StyledModalCloseBtn>
        <StyledModalBoxOne>
          <StyledModalBoxTwo backgroundColor={contentBackGroundColor}>
            <StyledModalHeadingWrapper
              backgroundColor={headingBackGroundColor}
              height={headingHeight}
            >
              <HeadingFour
                color={headingColor}
                size="5.4rem"
                lineHeight="60px"
                align="center"
              >
                {text}
              </HeadingFour>
            </StyledModalHeadingWrapper>
            <StyledModalContent>{children}</StyledModalContent>
          </StyledModalBoxTwo>
        </StyledModalBoxOne>
      </StyledModalBody>
    </StyledModalWrapper>
  );
};

export default ModalTwo;
