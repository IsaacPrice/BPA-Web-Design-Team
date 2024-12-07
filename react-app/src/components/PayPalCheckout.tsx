import React from 'react';
import {
    PayPalButtons,
    PayPalButtonsComponentProps,
    PayPalScriptProvider,
    ReactPayPalScriptOptions,
} from "@paypal/react-paypal-js";


type PayPalCheckoutProps = 
{
    productId: string;
    price: number;
};  


export const PayPalCheckout: React.FC<PayPalCheckoutProps> = (props: PayPalCheckoutProps) => 
{
    const createOrder: PayPalButtonsComponentProps["createOrder"] = async () => {
        try {
            const response = await fetch("/my-server/create-paypal-order", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    cart: [{ id: props.productId, quantity: "1" }],
                }),
            });

          const orderData: any = await response.json();

          if (!orderData.id) {
              const errorDetail = orderData?.details?.[0];
              const errorMessage = errorDetail
                  ? `${errorDetail.issue} ${errorDetail.description} (${orderData.debug_id})`
                  : "Unexpected error occurred, please try again.";

              throw new Error(errorMessage);
          }

          return orderData.id;

        } catch (error) {
            console.error(error);
            throw error;
        }
    };



    return (
        <PayPalScriptProvider options={{ "clientId": "AR6HK8cx10O5gNsiCYvLboMjAZjT6Hm5tdlIGLhU721LWZ97VpaL8krLpQSt45u5cHDe4PRR7YMHIXmY" }}>
            <PayPalButtons
                createOrder={createOrder}
                />
        </PayPalScriptProvider>
    );
};

export default PayPalCheckout;
