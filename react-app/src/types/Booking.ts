export type Booking =
{
    name: string;
    organization: string | undefined;
    email: string;
    phoneNumber: string;
    address: string;
    city: string;
    state: string;
    date: Date;
    time: string;
    notes: string | undefined;
}