import { Booking } from "../types/Booking";


export const BLANK_BOOKING_DATA: Booking = 
{
    name: '',
    organization: undefined,
    email: '',
    phoneNumber: '',
    address: '',
    city: '',
    state: '',
    date: new Date(),
    time: '',
    notes: undefined,
}