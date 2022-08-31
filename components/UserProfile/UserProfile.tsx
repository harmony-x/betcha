import { Span } from "$components/Typography/Typography.styles";
import {
  StyledAvartar,
  StyledEllipse,
  StyledProfileBoxOne,
  StyledProfileBoxThree,
  StyledProfileBoxTwo,
} from "./UserProfile.styles";
import { UserProfileProps } from "./UserProfile.types";

const UserProfile: React.FC<UserProfileProps> = ({ address }) => {
  return (
    <StyledProfileBoxOne>
      <StyledProfileBoxTwo>
        <StyledProfileBoxThree>
          <StyledEllipse />
          <StyledAvartar />
          <Span size="2.4rem" lineHeight="31px">
            {address}
          </Span>
        </StyledProfileBoxThree>
      </StyledProfileBoxTwo>
    </StyledProfileBoxOne>
  );
};

export default UserProfile;
