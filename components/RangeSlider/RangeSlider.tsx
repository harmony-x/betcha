import { Flex } from "$components/Box/Box.styles";
import { Span } from "$components/Typography/Typography.styles";
import {
  StyledRangeSlider,
  StyledRangeSliderRange,
  StyledRangeSliderThumb,
  StyledRangeSliderTrack,
} from "./RangeSlider.styles";
import { RangeSliderProps } from "./RangeSlider.types";

const RangeSlider: React.FC<RangeSliderProps> = ({
  width,
  range,
  setRange,
}) => (
  <Flex gap="19px" flexDir="column" width={width}>
    <StyledRangeSlider
      defaultValue={[range]}
      step={1}
      min={0}
      max={10}
      onValueChange={(value) => setRange(value[0])}
    >
      <StyledRangeSliderTrack>
        <StyledRangeSliderRange />
      </StyledRangeSliderTrack>
      <StyledRangeSliderThumb />
    </StyledRangeSlider>
    <Flex justify="space-between">
      <Span lineHeight="31px" size="2.4rem">
        MIN: 1
      </Span>
      <Span lineHeight="31px" size="2.4rem">
        MAX: 10
      </Span>
    </Flex>
  </Flex>
);

export default RangeSlider;
