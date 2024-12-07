import { CreditedImage } from "./CreditedImage";


export type Tour =
{
    name: string;
    linkName: string;
    address: string;
    location: string;
    date: Date;
    startTime: string;
    endTime: string;
    images: CreditedImage[];
    description: string;
    availibleTickets?: number;
    organizer?: string;
    ageRestriction?: number;
    additionalInfo?: string;
    ticketPrice: number;
}