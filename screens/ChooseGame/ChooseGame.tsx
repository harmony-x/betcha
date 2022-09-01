import { Flex } from "$components/Box/Box.styles";
import ChoiceCard from "$components/ChoiceCard/ChoiceCard";
import { HeadingOne } from "$components/Typography/Typography.styles";
import UserProfile from "$components/UserProfile/UserProfile";
import InfoIcon from "$svgs/InfoIcon";
import MusicIcon from "$svgs/MusicIcon";
import { ChooseGameWrapper } from "./ChooseGame.styles";

const ChooseGame = () => {
  return (
    <ChooseGameWrapper>
      <Flex flexDir="column" align="center" justify="center">
        <HeadingOne>SELECT GAME</HeadingOne>
        <Flex gap="24px" width="max-content" margin="50px 0 0 0">
          {[
            {
              title: "RED & BLACK",
              id: 0,
            },
            {
              title: "POKER GAME",
              id: 1,
            },
            {
              title: "CASINO ROYALE",
              id: 2,
            },
          ].map(({ id, title }) => (
            <ChoiceCard key={id} title={title} />
          ))}
        </Flex>
      </Flex>
    </ChooseGameWrapper>
  );
};

export default ChooseGame;