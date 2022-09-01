import { Betcha__factory} from "typechain-types";

export const betchaContract = (provider: any) => {
    const signer = provider.getSigner();
    return Betcha__factory.connect("0x815165CBDe297b8e92E27aEaC0899C161246d3ae", signer)
};