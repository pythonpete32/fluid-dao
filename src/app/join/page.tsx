"use client";

import SuperfluidWidget, {
  EventListeners,
  PaymentOption,
} from "@superfluid-finance/widget";

import { useCallback, useMemo, useState } from "react";
import { paymentDetails, productDetails } from "~/config/superfluid";

export default function Join() {
  const [, setInitialChainId] = useState<number | undefined>();
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
    <SuperfluidWidget
      type="page"
      eventListeners={eventListeners}
      productDetails={productDetails}
      paymentDetails={paymentDetails}
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
    />
  );
}
