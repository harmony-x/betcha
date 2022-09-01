import { Flex } from "$components/Box/Box.styles";
import ChoiceCard from "$components/ChoiceCard/ChoiceCard";
import { HeadingOne } from "$components/Typography/Typography.styles";
import UserProfile from "$components/UserProfile/UserProfile";
import InfoIcon from "$svgs/InfoIcon";
import MusicIcon from "$svgs/MusicIcon";
import Image from "next/image";
import { ChooseGameWrapper } from "./ChooseGame.styles";

const ChooseGame = () => {
  return (
    <ChooseGameWrapper>
      <Flex flexDir="column" align="center" justify="center">
        <HeadingOne isTextStroke>SELECT GAME</HeadingOne>
        <Flex gap="24px" width="max-content" margin="50px 0 0 0">
          {[
            {
              title: "RED & BLACK",
              id: 0,
              link: "/red-black",
              image: (
                <Image width={169} height={169} src="/redblack.png" alt="" />
              ),
            },
            {
              title: "POKER GAME",
              id: 1,
              image: (
                <Image
                  width={168}
                  height={168}
                  src="/spin_da_bottle.png"
                  alt=""
                />
              ),
            },
            {
              title: "CASINO ROYALE",
              image: <Image width={194} height={152} src="/dice.png" alt="" />,
              id: 2,
            },
          ].map(({ id, title, link, image }) => (
            <ChoiceCard key={id} title={title} link={link} image={image} />
          ))}
        </Flex>
      </Flex>
    </ChooseGameWrapper>
  );
};

export default ChooseGame;
