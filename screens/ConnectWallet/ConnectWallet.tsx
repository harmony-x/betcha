import Button from "$components/Button/Button";
import { Span } from "$components/Typography/Typography.styles";
import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
import Image from "next/image";
import React from "react";
import { ConnectWalletWrapper } from "./ConnectWallet.styles";

const ConnectWallet = () => {
  const injectedConnector = new InjectedConnector({
    // supportedChainIds: [80001],
  });
  const { chainId, account, activate, active, library } =
    useWeb3React<Web3Provider>();
  React.useEffect(() => {
    if (active && chainId !== 80001) {
      // shows everytime
      console.log("Only polygon testnet is supported.");
    }
  }, [active, chainId]);
  const onClick = () => {
    // where the connection happens
    activate(injectedConnector);
  };
  return (
    <ConnectWalletWrapper>
      <Button
        onClick={onClick}
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
