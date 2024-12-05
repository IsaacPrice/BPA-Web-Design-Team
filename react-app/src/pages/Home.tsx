import React from "react";
import { Box, Typography } from "@mui/material";


export const Home: React.FC = () =>
{
    return (
        <Box>
            <Typography variant="h1" color="textPrimary">Stage Fright</Typography>
            <Typography variant="h3" color="textPrimary" sx={{ fontFamily: 'Weezer' }}>Weezer</Typography>
            <Typography variant="h3" color="textPrimary" sx={{ fontFamily: 'Century Gothic' }}>Weezer</Typography>
        </Box>
    );
}