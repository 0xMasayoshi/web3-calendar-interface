import { InjectedConnector } from "@web3-react/injected-connector";
import { supportedChains } from "./chain";

export const injectedConnector = new InjectedConnector({ supportedChainIds: Object.values(supportedChains).map(network => parseInt(network.chain_id)) })
