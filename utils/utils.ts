import { BigNumberish } from "ethers";
import { betchaContract } from "./contracts";

export const chipToMatic = (chip: number) =>
  `${(chip * 0.05).toFixed(2)} Matic`;

export const truncateAddress = (address: string, long = false) => {
  if (!address) return "No Account";
  const match = address.match(
    long
      ? /^(0x[a-zA-Z0-9]{10})[a-zA-Z0-9]+([a-zA-Z0-9]{3})$/
      : /^(0x[a-zA-Z0-9]{4})[a-zA-Z0-9]+([a-zA-Z0-9]{4})$/
  );
  if (!match) return address;
  return `${match[1]}…${match[2]}`;
};

export const wait = (delay: number) =>
  new Promise((resolve) => setTimeout(resolve, delay));

export const gameStatusIfFulfilled = (requestId: BigNumberish, provider: any) =>
  new Promise<boolean>((resolve) => {
    const checkStatus = setInterval(async () => {
      // check if settled and return won
      const bet = await betchaContract(provider).bets(requestId);
      if (bet.settled) {
        console.log(bet);
        clearInterval(checkStatus);
        resolve(bet.won);
      }
    }, 1000);
  });
