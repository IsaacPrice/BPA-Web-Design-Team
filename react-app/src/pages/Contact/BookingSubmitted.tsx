import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

type BookingSubmittedProps =
{
    open: boolean;
    onClose: () => void;
}

export const BookingSubmitted: React.FC<BookingSubmittedProps> = (props: BookingSubmittedProps) => {
    return (
        <Dialog open={props.open} onClose={props.onClose}>
            <DialogTitle>
                <CheckCircleIcon style={{ color: 'green', marginRight: '8px' }} />
                Booking Submitted
            </DialogTitle>
            <DialogContent>
                Your booking request has been successfully submitted.
            </DialogContent>
            <DialogActions>
                <Button onClick={props.onClose} color="primary">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
};