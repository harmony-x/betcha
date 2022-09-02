import { Betcha__factory} from "typechain-types";

export const betchaContract = (provider: any) => {
    const signer = provider.getSigner();
    return Betcha__factory.connect("0xb017cbFcd3f7a49c910C778EEC880315bD79A6af", signer)
};