import { Span } from "$components/Typography/Typography.styles";
import { StyledBetHeading } from "./BetHeading.styles";
import { BetHeadingProps } from "./BetHeading.types";

const BetHeading: React.FC<BetHeadingProps> = ({
  text,
  height,
  width,
  backgroundColor,
  color,
}) => {
  return (
    <StyledBetHeading
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      color={color}
    >
      <Span lineHeight="36px" size="2.8rem">
        {text}
      </Span>
    </StyledBetHeading>
  );
};

export default BetHeading;
