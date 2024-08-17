import { Chain, hederaTestnet, polygon, sepolia, telos } from "viem/chains";

export type SiteConfig = typeof siteConfig;

export type SiteConfigContracts = {
  chain: Chain;
  RWAfarmersToken?: `0x${string}`;
  usdcToken?: `0x${string}`;
  entryPoint?: `0x${string}`;
  paymaster?: `0x${string}`;
  accountFactory?: `0x${string}`;
  accountAbstractionSuported?: boolean;
};

export const siteConfig = {
  emoji: "🧑‍🌾",
  name: "Indonesia Farmers Revolution",
  description: "Dapp that connects farmers with the right investors through the tokenization of their real-world assets (RWAs) like crops and farm products",
  links: {
    github: "https://github.com/kamalbuilds/rwa-hedera-farmers-revolution",
  },
  contracts: [
    // {
    //   chain: sepolia,
    // },
    {
      chain: hederaTestnet,
      // RWAfarmersToken: `0x${string}`,
      // usdcToken: `0x${string}`,
      // entryPoint: `0x${string}`,
      // paymaster: `0x${string}`,
      // accountFactory: `0x${string}`,
      // accountAbstractionSuported: boolean
    }
  ]
};

