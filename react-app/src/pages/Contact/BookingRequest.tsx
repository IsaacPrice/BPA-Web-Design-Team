import React, { ChangeEvent, useState } from "react";
import Grid from '@mui/material/Grid2';
import { BLANK_BOOKING_DATA } from "../../constants/bookingData";
import { Booking } from "../../types/Booking";
import { Button, MenuItem, TextField } from "@mui/material";
import { BookingRequestDialog } from "./BookingRequestDialog";
import { BookingSubmitted } from "./BookingSubmitted";


const stateInitials: string[] = [
	"AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", 
	"HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", 
	"MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", 
	"NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", 
	"SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"
];


export const BookingRequest: React.FC = () =>
{    
    const [bookingRequest, setBookingRequest] = useState<Booking>(BLANK_BOOKING_DATA);
	const [confirmBookingRequest, setConfirmBookingRequest] = useState<boolean>(false);
    const [bookingSubmitted, setBookingSubmitted] = useState<boolean>(false);

    
    const onBookingRequestUpdate = (event: ChangeEvent<HTMLInputElement>): void => 
    {
        setBookingRequest({
            ...bookingRequest,
            [event.target.name]: event.target.value
        });
        console.log(event.target.value);
    }


    const onSubmitBookingRequest = (): void =>
    {
        setConfirmBookingRequest(true);
    }

    
    const onCancelBookingSubmit = (): void =>
    {
        setConfirmBookingRequest(false);
    }

    
    const onSubmittedBookingRequest = (): void =>
    {
        setConfirmBookingRequest(false);
        setBookingSubmitted(true);
    }


    const onCloseSubmittedRequest = (): void =>
    {
        setBookingSubmitted(false);
    }


    return (
        <>
            <Grid size={12} className="centerAligned">
                <Grid container size={{ xs: 12, lg: 8 }} spacing={2}>
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <TextField 
                            name="name"
                            label="Name"
                            value={bookingRequest.name}
                            onChange={onBookingRequestUpdate}
                            required
                            />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <TextField 
                            name="email"
                            type="email"
                            label="Email"
                            value={bookingRequest.email}
                            onChange={onBookingRequestUpdate}
                            required
                            />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 4, md: 2 }}>
                        <TextField 
                            name="phoneNumber"
                            label="Phone Number"
                            value={bookingRequest.phoneNumber}
                            onChange={onBookingRequestUpdate}
                            required
                            />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField 
                            name="organization"
                            label="Organization"
                            value={bookingRequest.organization}
                            onChange={onBookingRequestUpdate}
                            />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <TextField 
                            name="address"
                            label="Address"
                            value={bookingRequest.address}
                            onChange={onBookingRequestUpdate}
                            required
                            />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2 }}>
                        <TextField 
                            name="city"
                            label="City"
                            value={bookingRequest.city}
                            onChange={onBookingRequestUpdate}
                            required
                            />
                    </Grid>
                    <Grid size={{ xs: 4, md: 1, }}>
                        <TextField
                            name="state"
                            select
                            label="State"
                            defaultValue={"IN"}
                            value={bookingRequest.state}
                            slotProps={{ inputLabel: { shrink: true } }}
                            onChange={onBookingRequestUpdate}>
                            {
                                stateInitials.map((state: string) => 
                                (
                                    <MenuItem key={state} value={state}>
                                        {state}
                                    </MenuItem>
                                ))
                            }
                        </TextField>
                    </Grid>
                    <Grid size={{ xs: 8, sm: 6, md: 4, lg: 2 }}>
                        <TextField 
                            name="date"
                            type="date"
                            label="Date"
                            value={bookingRequest.date}
                            onChange={onBookingRequestUpdate}
                            slotProps={{ inputLabel: { shrink: true } }}
                            required
                            />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2 }}>
                        <TextField 
                            name="time"
                            type="time"
                            label="Time"
                            value={bookingRequest.time}
                            onChange={onBookingRequestUpdate}
                            slotProps={{ inputLabel: { shrink: true } }}
                            />
                    </Grid>
                    <Grid size={12}>
                        <TextField 
                            name="notes"
                            multiline
                            rows={4}
                            variant="filled"
                            label="Notes"
                            value={bookingRequest.notes}
                            onChange={onBookingRequestUpdate}
                            />
                    </Grid>
                    <Grid size={12}>
                        <Button onClick={onSubmitBookingRequest} size="large">Submit</Button>
                    </Grid>
                </Grid>
            </Grid>

            <BookingRequestDialog 
                isOpen={confirmBookingRequest} 
                bookingRequest={bookingRequest} 
                onClose={onCancelBookingSubmit}
                onSubmit={onSubmittedBookingRequest}
                />
            
            <BookingSubmitted 
                open={bookingSubmitted} 
                onClose={onCloseSubmittedRequest}
                />
        </>
    );
}