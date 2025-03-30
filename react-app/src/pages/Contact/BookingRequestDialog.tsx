import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material";
import React from "react";
import { Booking } from "../../types/Booking";


type BookingRequestDialogProps =
{
    isOpen: boolean;
    bookingRequest: Booking;
    onClose: () => void;
    onSubmit: () => void;
}


export const BookingRequestDialog: React.FC<BookingRequestDialogProps> = (props: BookingRequestDialogProps) =>
{
    const formatPhoneNumber = (phoneNumber: string): string =>
    {
        const cleaned = ('' + phoneNumber).replace(/\D/g, '');
        const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
        if (match) {
            return `(${match[1]}) ${match[2]}-${match[3]}`;
        }
        return phoneNumber;
    }


    const formatTime = (time: string): string =>
    {
        const [hours, minutes] = time.split(':')
            .map((value: string, index: number) => index ? value : Number(value));
        if ((hours as number) > 12)
        {
            return `${(hours as number)-12}:${minutes} PM`;
        }
        return `${hours}:${minutes} AM`;
    }


    const getActualDate = (): string =>
    {
        const date: Date = new Date(new Date(props.bookingRequest.date).getTime() + new Date().getTimezoneOffset() * 60000)
        return date.toLocaleDateString();
    }


    return (
        <Dialog open={props.isOpen} onClose={props.onClose}>
            <DialogTitle>Confirm Booking Request</DialogTitle>
            <DialogContent>
                <Typography variant="h2" sx={{ marginBottom: '25px' }}>Booking Request</Typography>
                
                <Typography sx={{ borderBottom: '1px solid black' }}>Contact Info</Typography>
                <Typography>{props.bookingRequest.name}</Typography>
                {
                    props.bookingRequest.organization && 
                    <Typography>{props.bookingRequest.organization}</Typography>
                }
                <Typography>{props.bookingRequest.email}</Typography>
                <Typography sx={{ marginBottom: '25px' }}>{formatPhoneNumber(props.bookingRequest.phoneNumber)}</Typography>

                <Typography sx={{ borderBottom: '1px solid black' }}>Address</Typography>
                <Typography sx={{ marginBottom: '25px' }}>{props.bookingRequest.address} {props.bookingRequest.city}, {props.bookingRequest.state}</Typography>
            
                <Typography sx={{ borderBottom: '1px solid black' }}>Time</Typography>
                <Typography sx={{ marginBottom: '25px' }}>{getActualDate()}, {formatTime(props.bookingRequest.time)}</Typography>
                
                {
                    props.bookingRequest.notes &&
                    <>
                        <Typography sx={{ borderBottom: '1px solid black' }}>Notes</Typography>
                        <Typography sx={{ maxWidth: '400px' }}>{props.bookingRequest.notes}</Typography>
                    </>
                }
            </DialogContent>
            <DialogActions>
                <Button onClick={props.onClose}>Revise</Button>
                <Button onClick={props.onSubmit}>Submit</Button>
            </DialogActions>
        </Dialog>
    )
}