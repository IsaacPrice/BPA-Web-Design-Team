import React from "react";
import { Box, Link, Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { TOUR_DATA } from "../../constants/tourData";
import { Tour } from "../../types/Tour";
import { IMAGE_PATH } from "../../constants/imagePath";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { theme } from "../../theme/theme";


export const Tours: React.FC = () => 
{
    const navigate: NavigateFunction = useNavigate();


    return (
        <Grid container spacing={3}>
            <Grid size={12}>
                <Typography variant="h1" color="textPrimary">Tours</Typography>
            </Grid>

            {
                TOUR_DATA.map((tour: Tour) => (
                    <Grid size={{ xs: 12, md: 6, lg: 3 }}>
                        <Paper sx={{ padding: '15px' }}>
                            <Box 
                                component="img" 
                                src={IMAGE_PATH + tour.images[0].path + "_small.jpg"} 
                                alt={tour.name} 
                                sx={{ width: '100%', borderRadius: '3px' }} />

                            <Typography sx={{ ...theme.typography.h4 }}>
                                <Link onClick={() => navigate(`/tours/${tour.linkName}`)} role="button">
                                    {tour.name}
                                </Link>
                            </Typography>
                            <Typography sx={{ ...theme.typography.h5 }}>{tour.location}</Typography>
                            <Typography sx={{ ...theme.typography.h5 }}>{tour.date.toLocaleDateString()}</Typography>
                            <Typography sx={{ ...theme.typography.h5 }} fontWeight="700">$ {tour.ticketPrice}</Typography>
                        </Paper>
                    </Grid>
                ))
            }
        </Grid>
    );
}
