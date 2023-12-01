"use client";

import SuperfluidWidget, {
  EventListeners,
  PaymentOption,
} from "@superfluid-finance/widget";
import superTokenList from "@superfluid-finance/widget/tokenlist";
import { useCallback, useMemo, useState } from "react";
import { ConnectButton } from "~/components/ConnectButton";
import { paymentDetails, productDetails } from "~/config/superfluid";

export default function Join() {
  const [initialChainId, setInitialChainId] = useState<number | undefined>(
    80001
  );

  //   const walletManager = {
  //     open: async () => openConnectModal(),
  //     isOpen: connectModalOpen,
  //   };

  const onPaymentOptionUpdate = useCallback<
    Required<EventListeners>["onPaymentOptionUpdate"]
  >(
    (paymentOption?: PaymentOption) =>
      setInitialChainId(paymentOption?.chainId),
    [setInitialChainId]
  );
  const eventListeners = useMemo<EventListeners>(
    () => ({ onPaymentOptionUpdate }),
    [onPaymentOptionUpdate]
  );
  return (
    <ConnectButton.Custom>
      {({ openConnectModal, connectModalOpen }) => {
        const walletManager = {
          open: async () => openConnectModal(),
          isOpen: connectModalOpen,
        };
        return (
          <SuperfluidWidget
            productDetails={productDetails}
            paymentDetails={paymentDetails}
            type="page"
            walletManager={walletManager}
            theme={{
              palette: {
                mode: "dark",
                primary: {
                  main: "rgb(255, 121, 198)",
                },
                secondary: {
                  main: "rgb(189, 147, 249)",
                },
              },
            }}
            // eventListeners={eventListeners}
          />
        );
      }}
    </ConnectButton.Custom>
  );
}
