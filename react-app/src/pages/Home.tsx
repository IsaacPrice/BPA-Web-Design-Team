import React from "react";
import { Box, Button, Link, Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { IMAGE_PATH } from "../constants/imagePath";
import { MERCH_DATA } from "../constants/merchData";
import { Merch } from "../types/Merch";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { TOUR_DATA } from "../constants/tourData";
import { Tour } from "../types/Tour";


const previewBoxStyle: React.CSSProperties =
{
    display: 'flex', 
    flexDirection: 'row',  
    gap: '15px', 
    justifyContent: 'space-evenly', 
    overflowX: 'auto',
    padding: '5px'
}


export const Home: React.FC = () =>
{
    const navigate: NavigateFunction = useNavigate();


    return (
        <Grid container spacing={3} padding="15px">
            <Grid size={12}>
                <Typography variant="h1" color="textPrimary" >The Senior Year Blues Out Now!</Typography>
            </Grid>

            <Grid size={12} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '25px' }}>
                <Box
                    component="img"
                    alt="Album Cover"
                    src={IMAGE_PATH + "StageFright/stageFright_large.png"} 
                    sx={{ width: '100%', maxWidth: '500px' }}
                    />
                <Typography variant="h2">The Senior Year Blues</Typography>
                <Typography marginBottom="15px">Out on all major streaming platforms!</Typography>
                <Button>Listen Now</Button>
            </Grid>

            <Grid size={12} marginBottom="25px">
                <Typography variant="h2" onClick={() => navigate('/merch')} marginBottom="15px" sx={{ cursor: 'pointer' }}>Merch</Typography>

                <Box sx={previewBoxStyle}>
                {
                    MERCH_DATA.slice(0, 3).map((merch: Merch) =>
                        <Paper sx={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '15px', minWidth: '200px' }}>
                            <Box component="img" src={IMAGE_PATH + merch.imagePaths[0] + "_small.jpg"} alt={merch.name} width="100%" />

                            <Typography variant="h4"><Link onClick={() => navigate(`/merch/${merch.linkName}`)}>{merch.name}</Link></Typography>

                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                <Typography color="textSecondary">{merch.category}</Typography>
                                <Typography variant="h5" fontWeight={700}>$ {merch.price}</Typography>
                            </Box>
                        </Paper>
                    )
                }
                </Box>
            </Grid>

            <Grid size={12}>
                <Typography variant="h2" onClick={() => navigate('/tours')} sx={{ cursor: 'pointer', marginBottom: '15px' }}>Tours</Typography>

                <Box sx={previewBoxStyle}>
                {
                    TOUR_DATA.map((tour: Tour) => (
                        <Paper sx={{ padding: '15px', maxWidth: '300px', minWidth: '200px' }}>
                            <Box 
                                component="img" 
                                src={IMAGE_PATH + tour.images[0].path + "_large.JPG"} 
                                alt={tour.name} 
                                sx={{ width: '100%', borderRadius: '3px' }} />

                            <Typography variant="h4"><Link onClick={() => navigate(`/tours/${tour.linkName}`)}>{tour.name}</Link></Typography>
                            <Typography variant="h5">{tour.location}</Typography>
                            <Typography variant="h5">{tour.date.toLocaleDateString()}</Typography>
                            <Typography variant="h5" fontWeight="700">$ {tour.ticketPrice}</Typography>
                        </Paper>
                    ))
                }
                </Box>
            </Grid>
        </Grid>
    );
}