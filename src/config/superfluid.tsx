import { ProductDetails, WidgetProps } from "@superfluid-finance/widget";
import widgetSettings from "./widget.json";

export const fUSDCx = "0x42bb40bF79730451B11f6De1CbA222F17b87Afd7";
export const fUSDC = "0xbe49ac1EadAc65dccf204D4Df81d650B50122aB2";
export const DAO = "0x0D29312f4Ff79F1aC97c8c24A051D1b6443A3F91";

export const productDetails: ProductDetails = {
  ...widgetSettings.productDetails,
};

export const paymentDetails: WidgetProps["paymentDetails"] = {
  paymentOptions: [
    {
      chainId: 80001 as
        | 80001
        | 1
        | 5
        | 10
        | 56
        | 42161
        | 421613
        | 43114
        | 43113
        | 8453
        | 84531
        | 42220
        | 100
        | 11155111
        | 420
        | 137,
      receiverAddress: DAO,
      superToken: {
        address: fUSDCx,
      },
      flowRate: {
        amountEther: "0.1",
        period: "day" as "month" | "day" | "week" | "year",
      },
    },
  ],
};
