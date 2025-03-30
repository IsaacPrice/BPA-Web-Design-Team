import { Shipping } from "../types/Shipping";


export const SHIPPING_DATA: Shipping[] =
[
    { name: "Standard", carrier: "UPS Ground",  deliveryTime: "5-7", price: 1.99 },
    { name: "Expedited", carrier: "UPS 2nd Day Air",  deliveryTime: "2", price: 7.99 },
    { name: "Overnight", carrier: "UPS Next Day Air",  deliveryTime: "1", price: 23.99 },
]   