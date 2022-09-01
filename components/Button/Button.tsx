import { StyledButton, StyledButtonBtnBg } from "./Button.styles";
import { ButtonProps } from "./Button.types";

const Button: React.FC<ButtonProps> = ({
  text,
  height,
  width,
  icon,
  ...rest
}) => {
  return (
    <StyledButton width={width} height={height} {...rest}>
      <StyledButtonBtnBg>{icon}</StyledButtonBtnBg>
      {text}
    </StyledButton>
  );
};

export default Button;
