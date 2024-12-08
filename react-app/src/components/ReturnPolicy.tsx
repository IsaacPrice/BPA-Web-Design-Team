import { Dialog, DialogContent, DialogTitle, Typography } from '@mui/material';
import React from 'react';


type ReturnPolicyDialogProps =
{
    open: boolean;
    onClose: () => void;
}


export const ReturnPolicyDialog: React.FC<ReturnPolicyDialogProps> = (props: ReturnPolicyDialogProps) =>
{
    return (
        <Dialog open={props.open} onClose={props.onClose}>
            <DialogTitle>Return Policy</DialogTitle>
            
            <DialogContent>
                <Typography textAlign="left" variant="h6" gutterBottom>Merchandise Returns</Typography>
                <Typography textAlign="left" variant="body1">
                    - All Merchandice sales are final.
                </Typography>
                <Typography textAlign="left" variant="h6" gutterBottom sx={{ mt: 2 }}>Ticket Purchases</Typography>
                <Typography textAlign="left" variant="body1">
                    - All ticket sales are final. Refunds or exchanges are not available unless the event is canceled.
                </Typography>
                <Typography textAlign="left" variant="h6" gutterBottom sx={{ mt: 2 }}>How to Request a Return</Typography>
                <Typography textAlign="left" variant="body1">
                    - Contact us at support@stagefrightband.com with your order number and reason for return. <br />
                    - Buyers are responsible for return shipping costs unless the item is defective or incorrect.
                </Typography>
                <Typography textAlign="left" variant="body2" sx={{ mt: 2 }}>
                    If you have any questions, reach out to us at support@stagefrightband.com. Thank you for supporting Stage-Fright!
                </Typography>
            </DialogContent>
        </Dialog>
    )
}