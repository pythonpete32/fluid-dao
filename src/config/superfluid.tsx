import { ProductDetails, WidgetProps } from "@superfluid-finance/widget";
import widgetSettings from "./widget.json";

export const fUSDCx = "0x42bb40bF79730451B11f6De1CbA222F17b87Afd7";
export const fUSDC = "0xbe49ac1EadAc65dccf204D4Df81d650B50122aB2";
export const DAO = "0x47d80912400ef8f8224531EBEB1ce8f2ACf4b75a";

export const productDetails: ProductDetails = {
  ...widgetSettings.productDetails,
};

export const paymentDetails: WidgetProps["paymentDetails"] = {
  paymentOptions: [
    {
      chainId: 80001,
      receiverAddress: DAO,
      superToken: {
        address: fUSDCx,
      },
      flowRate: {
        amountEther: "0.1",
        period: "day",
      },
    },
  ],
};
