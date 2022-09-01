import EllipseTwo from "$svgs/EllipseTwo";
import styled from "styled-components";

export const ChoiceCardBoxOne = styled.button`
  width: 384px;
  height: 362px;
  position: relative;
  border-radius: 44px;
  background-color: ${({ theme }) => theme.colors.gray1};
  cursor: pointer;
`;

export const ChoiceCardBoxTwo = styled.div`
  position: absolute;
  left: 15.8px;
  top: 15.45px;
  width: 344px;
  height: 318px;
  border-radius: 44px;
  transform: rotate(-1.53deg);
  background-color: ${({ theme }) => theme.colors.primary3};
`;

export const ChoiceCardBoxThree = styled.div`
  position: absolute;
  background-image: linear-gradient(94.66deg, #feb92f 2.34%, #fa8841 98.19%);
  border-radius: 44px;
  width: 344px;
  height: 313px;
  top: 1.55px;
  left: 10.2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 15px;
  padding: 28px 0;
`;

export const StyledEllipse = styled(EllipseTwo)`
  position: absolute;
  top: 18px;
  left: 19px;
`;
