import { FC, ReactNode } from "react";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import {
  darkTheme,
  getDefaultWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { polygonMumbai, goerli } from "wagmi/chains";
import { infuraProvider } from "wagmi/providers/infura";
import { publicProvider } from "wagmi/providers/public";

const { chains, publicClient } = configureChains(
  [polygonMumbai, goerli],
  [
    infuraProvider({ apiKey: process.env.NEXT_PUBLIC_INFURA_API_KEY! }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  projectId: "YOUR_PROJECT_ID",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

const Providers: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider
        chains={chains}
        theme={darkTheme({
          accentColor: "#ffb86c",
        })}
      >
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
};
export default Providers;

// dracula: {
//   "color-scheme": "dark",
//   "primary": "#ff79c6",
//   "secondary": "#bd93f9",
//   "accent": "#ffb86c",
//   "neutral": "#414558",
//   "base-100": "#282a36",
//   "base-content": "#f8f8f2",
//   "info": "#8be9fd",
//   "success": "#50fa7b",
//   "warning": "#f1fa8c",
//   "error": "#ff5555",
// },
