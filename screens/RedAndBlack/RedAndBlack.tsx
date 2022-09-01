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
import PlayAgainBtnBg from "$svgs/PlayAgainBtnBg";
import RedBtnBg from "$svgs/RedBtnBg";
import Trophy from "$svgs/Trophy";
import { chipToMatic } from "$utils/utils";
import React from "react";
import { useTheme } from "styled-components";
import { RedAndBlackLeftPane, RedAndBlackWrapper } from "./RedAndBlack.styles";
import { Choice, Game } from "./RedAndBlack.types";

const RedAndBlack = () => {
  const theme = useTheme() as any;
  const [range, setRange] = React.useState<number>(0);
  const [isOpenModal, setIsOpenModal] = React.useState<boolean>(false);
  const [choice, setChoice] = React.useState<Choice>("");
  const [game, setGame] = React.useState<Game>({
    status: "init",
    correctChoice: "",
    amount: range * 2,
  });

  const { status, correctChoice, amount } = game;

  return (
    <RedAndBlackWrapper>
      <Flex flexDir="column" align="center" justify="center" gap="87px">
        <HeadingOne isTextStroke size="7.2rem" lineHeight="92px">
          RED & BLACK
        </HeadingOne>
        <Flex width="max-content" gap="69px" align="center">
          <RedAndBlackLeftPane
            backgroundImage={
              status === "init" ||
              status === "processing" ||
              correctChoice === ""
                ? "bcha_showcase.png"
                : correctChoice === "red"
                ? "red_card.png"
                : correctChoice === "black"
                ? "black_card.png"
                : "bcha_showcase.png"
            }
          />
          <Flex flexDir="column" gap="50px" align="center">
            {status === "init" ||
            status === "processing" ||
            correctChoice === "" ? (
              <BetHeading
                text={`BET ${range} CHIP (${chipToMatic(range)})`}
                width="343px"
                height="93px"
              />
            ) : correctChoice === "red" ? (
              <BetHeading
                color={theme.colors.gray1}
                backgroundColor={theme.colors.red}
                text="RED"
                width="321px"
                height="87.03px"
              />
            ) : correctChoice === "black" ? (
              <BetHeading
                color={theme.colors.white}
                backgroundColor={theme.colors.black}
                text="BLACK"
                width="321px"
                height="87.03px"
              />
            ) : null}
            {status !== "complete" ? (
              <RangeSlider range={range} setRange={setRange} width="411px" />
            ) : choice !== "" && correctChoice === choice ? (
              <Flex gap="20px" align="center">
                <Span size="3rem" lineHeight="48px">
                  YOU WON
                </Span>
                <Trophy />
                <Span size="3rem" lineHeight="48px">
                  {amount} BCHA
                </Span>
              </Flex>
            ) : choice !== "" && correctChoice !== choice ? (
              <Span size="3rem" lineHeight="48px">
                SORRY, YOU CHOSE {choice.toUpperCase()}!
              </Span>
            ) : null}
            <Flex gap="13px" justify="center">
              {status !== "complete" ? (
                <>
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
                </>
              ) : (
                <Button
                  onClick={() => {
                    setGame({
                      status: "init",
                      correctChoice: "",
                      amount: range * 2,
                    });
                    setRange(0);
                  }}
                  icon={<PlayAgainBtnBg />}
                  text={
                    <Span size="2.4rem" lineHeight="31px">
                      PLAY AGAIN
                    </Span>
                  }
                  height="66px"
                  width="278.79px"
                />
              )}
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
            PLACE BET OF <br /> {range} CHIP <br /> ({chipToMatic(range)}) for
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
              onClick={() => {
                setGame({
                  status: "complete",
                  amount: range * 2,
                  correctChoice: parseInt((Math.random() * 2).toString())
                    ? "black"
                    : "red",
                });
                setIsOpenModal(false);
              }}
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
