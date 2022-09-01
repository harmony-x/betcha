import BetHeading from "$components/BetHeading/BetHeading";
import { Flex } from "$components/Box/Box.styles";
import Button from "$components/Button/Button";
import Modal from "$components/Modal/Modal";
import RangeSlider from "$components/RangeSlider/RangeSlider";
import {
  HeadingFour,
  HeadingOne,
  Span,
} from "$components/Typography/Typography.styles";
import BlackBtnBg from "$svgs/BlackBtnBg";
import CancelBtnBg from "$svgs/CancelBtnBg";
import ConfirmBtnBg from "$svgs/ConfirmBtnBg";
import RedBtnBg from "$svgs/RedBtnBg";
import React from "react";
import { useTheme } from "styled-components";
import { RedAndBlackLeftPane, RedAndBlackWrapper } from "./RedAndBlack.styles";

const RedAndBlack = () => {
  const theme = useTheme() as any;
  const [range, setRange] = React.useState<number>(0);
  const [isOpenModal, setIsOpenModal] = React.useState<boolean>(false);
  const [choice, setChoice] = React.useState<"" | "red" | "black">("");
  return (
    <RedAndBlackWrapper>
      <Flex flexDir="column" align="center" justify="center" gap="87px">
        <HeadingOne isTextStroke size="7.2rem" lineHeight="92px">
          RED & BLACK
        </HeadingOne>
        <Flex width="max-content" gap="69px" align="center">
          <RedAndBlackLeftPane />
          <Flex flexDir="column" gap="50px" align="center">
            <BetHeading betAmount={range} width="343px" height="93px" />
            <RangeSlider range={range} setRange={setRange} width="411px" />
            <Flex gap="13px">
              <Button
                onClick={() => {
                  if (!!range) {
                    setChoice("red");
                    setIsOpenModal(true);
                  }
                }}
                icon={<RedBtnBg />}
                text={
                  <Span size="2.4rem" lineHeight="31px">
                    RED
                  </Span>
                }
                height="66px"
                width="200px"
              />
              <Button
                onClick={() => {
                  if (!!range) {
                    setChoice("black");
                    setIsOpenModal(true);
                  }
                }}
                icon={<BlackBtnBg />}
                text={
                  <Span size="2.4rem" lineHeight="31px">
                    BLACK
                  </Span>
                }
                height="66px"
                width="200px"
              />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Modal isOpen={isOpenModal} setIsOpen={setIsOpenModal}>
        <Flex
          height="100%"
          gap="58px"
          flexDir="column"
          justify="center"
          align="center"
          width="100%"
        >
          <HeadingFour
            transform="uppercase"
            align="center"
            size="5.4rem"
            lineHeight="60px"
          >
            PLACE BET OF <br /> {range} bcha for
            <Span
              margin="0 0 0 10px"
              size="5.4rem"
              lineHeight="60px"
              color={
                choice && choice === "black"
                  ? theme.colors.black
                  : theme.colors.red
              }
            >
              {choice}
            </Span>
            ?
          </HeadingFour>
          <Flex justify="center" gap="13px">
            <Button
              onClick={() => setIsOpenModal(false)}
              icon={<CancelBtnBg />}
              text={
                <Span size="2.4rem" lineHeight="31px">
                  CANCEL
                </Span>
              }
              height="66px"
              width="200px"
            />
            <Button
              icon={<ConfirmBtnBg />}
              text={
                <Span size="2.4rem" lineHeight="31px">
                  CONFIRM
                </Span>
              }
              height="66px"
              width="200px"
            />
          </Flex>
        </Flex>
      </Modal>
    </RedAndBlackWrapper>
  );
};

export default RedAndBlack;
