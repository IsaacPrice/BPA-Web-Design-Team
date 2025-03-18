import React from 'react';
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";


type PayPalCheckoutProps = 
{
    productId: string;
    price: number;
};  


export const PayPalCheckout: React.FC<PayPalCheckoutProps> = (props: PayPalCheckoutProps) => 
{
    return (
        <PayPalScriptProvider options={{ "clientId": "AcNNJiblrQ2kYvm4HIPf2wE0RmcwOYvs2erNpZpGvlhNH-YHq6B0dc5QGC0znLQJNCwADSv3NJfvIQvF" }}>
            <PayPalButtons
                createOrder={(_, actions) => {
                    return actions.order.create({
                        purchase_units: [{
                            amount: {
                                currency_code: "USD",
                                value: String(props.price),
                            },
                        }],
                        intent: "CAPTURE",
                    });
                }}
                onApprove={(_, actions) => {
                    return actions.order!.capture().then((details) => {
                        alert(`Transaction completed by ${details.payer!.name!.given_name}`);
                        console.log('Order details:', details);
                    });
                }}
                onError={(err) => {
                    console.error("PayPal Checkout Error:", err);
                }}
            />
        </PayPalScriptProvider>
    );
};

export default PayPalCheckout;
