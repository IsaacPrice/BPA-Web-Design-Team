import React from "react";
import { Box, Link, Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { TOUR_DATA } from "../../constants/tourData";
import { Tour } from "../../types/Tour";

/*
Indianapolis, Indiana, Lucas Oil Stadium, March 31th, 2025 - ADDED
South Bend, Indiana, Notre Dame Stadium, April 14th, 2025 - ADDED
Fort Wayne, Indiana, Allen County War Memorial Coliseum, April 21th, 2025 
Evansville, Indiana, Ford Center, April 28th, 2025
*/


export const Tours: React.FC = () => 
{
    return (
        <Grid container spacing={3}>
            <Grid size={12}>
                <Typography variant="h1" color="textPrimary">Tours</Typography>
            </Grid>

            {
                TOUR_DATA.map((tour: Tour) =>
                    <Grid size={{ xs: 12, md: 6, lg: 3 }}>
                        <Paper sx={{ padding: '15px' }}>
                            <Box 
                                component="img" 
                                src={"/images/" + tour.images[0].path + "_small.jpg"} 
                                alt={tour.name} 
                                sx={{ width: '100%', borderRadius: '3px' }} />

                            <Typography variant="h4"><Link href={`/tours/${tour.linkName}`}>{tour.name}</Link></Typography>
                            <Typography variant="h5">{tour.location}</Typography>
                            <Typography variant="h5">{tour.date.toLocaleDateString()}</Typography>
                            <Typography variant="h5" fontWeight="700">$ {tour.ticketPrice}</Typography>
                        </Paper>
                    </Grid>
                )
            }
        </Grid>
    );
}
