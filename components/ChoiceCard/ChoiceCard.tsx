import { HeadingFour } from "$components/Typography/Typography.styles";
import { useRouter } from "next/router";
import {
  ChoiceCardBoxOne,
  ChoiceCardBoxThree,
  ChoiceCardBoxTwo,
  StyledEllipse,
} from "./ChoiceCard.styles";
import { ChoiceCardProps } from "./ChoiceCard.types";

const ChoiceCard: React.FC<ChoiceCardProps> = ({ title, link }) => {
  const router = useRouter();

  return (
    <ChoiceCardBoxOne onClick={() => link && router.push(link)}>
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
