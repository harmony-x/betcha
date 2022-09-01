import EllipseOne from "$svgs/EllipseOne";
import styled from "styled-components";

export const StyledProfileBoxOne = styled.div`
  width: 290.13px;
  height: 64px;
  background-color: ${({ theme }) => theme.colors.gray1};
  border-radius: 45px;
  position: relative;
`;

export const StyledProfileBoxTwo = styled.div`
  width: 275.91px;
  height: 46.93px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 45px;
  position: absolute;
  top: 7.11px;
  left: 7.11px;
`;

export const StyledProfileBoxThree = styled.div`
  width: 275.91px;
  height: 46.93px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50px;
  position: absolute;
  top: 2.84px;
  left: 0;
  display: flex;
  align-items: center;
  padding: 4.98px 7.11px;
`;

export const StyledEllipse = styled(EllipseOne)`
  position: absolute;
  top: 2.13px;
  right: 12px;
`;

export const StyledAvartar = styled.div`
  width: 36.98px;
  height: 36.98px;
  background-color: ${({ theme }) => theme.colors.gray2};
  border-radius: 50%;
  margin-right: 10px;
`;
