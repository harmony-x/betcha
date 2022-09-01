import Button from "$components/Button/Button";
import { Span } from "$components/Typography/Typography.styles";
import Image from "next/image";
import { ConnectWalletWrapper } from "./ConnectWallet.styles";

const ConnectWallet = () => {
  return (
    <ConnectWalletWrapper>
      <Button
        icon={
          <Image
            width="636px"
            height="257px"
            alt=""
            src="/connect_btn_bg.png"
            objectFit="contain"
          />
        }
        text={
          <Span isTextStroke size="5.2rem" lineHeight="67px">
            CONNECT WALLET
          </Span>
        }
        height="231px"
        width="636px"
      />
    </ConnectWalletWrapper>
  );
};

export default ConnectWallet;
