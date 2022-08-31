import { HeadingFour } from "$components/Typography/Typography.styles";
import {
  ChoiceCardBoxOne,
  ChoiceCardBoxThree,
  ChoiceCardBoxTwo,
  StyledEllipse,
} from "./ChoiceCard.styles";
import { ChoiceCardProps } from "./ChoiceCard.types";

const ChoiceCard: React.FC<ChoiceCardProps> = ({ title }) => {
  return (
    <ChoiceCardBoxOne>
      <ChoiceCardBoxTwo>
        <ChoiceCardBoxThree>
          <StyledEllipse />
          <HeadingFour>{title}</HeadingFour>
        </ChoiceCardBoxThree>
      </ChoiceCardBoxTwo>
    </ChoiceCardBoxOne>
  );
};

export default ChoiceCard;
