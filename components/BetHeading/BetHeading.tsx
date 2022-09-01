import { Span } from "$components/Typography/Typography.styles";
import { StyledBetHeading } from "./BetHeading.styles";
import { BetHeadingProps } from "./BetHeading.types";

const BetHeading: React.FC<BetHeadingProps> = ({
  betAmount,
  height,
  width,
}) => {
  return (
    <StyledBetHeading width={width} height={height}>
      <Span lineHeight="36px" size="2.8rem">
        BET {betAmount} BCHA
      </Span>
    </StyledBetHeading>
  );
};

export default BetHeading;
