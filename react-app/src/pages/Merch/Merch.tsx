import React from "react";
import { Box, Link, Paper, Typography } from "@mui/material";
import { MERCH_DATA } from "../../constants/merchData";
import { Merch } from "../../types/Merch";
import Grid from '@mui/material/Grid2';


export const MerchPage: React.FC = () => 
{
    return (
        <Grid container spacing={3} direction="row" alignItems="center" justifyContent="center" sx={{ padding: '15px' }}>
            <Grid size={12}>
                <Typography variant="h1" color="textPrimary">Merch</Typography>
            </Grid>

            {
                MERCH_DATA.map((merch: Merch) =>
                {
                    return (
                        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3}}>
                            <Paper sx={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '15px' }}>
                                <Box component="img" src={merch.imagePaths[0]} alt={merch.name} width="100%" />

                                <Typography variant="h4"><Link href={`/merch/${merch.linkName}`}>{merch.name}</Link></Typography>

                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                    <Typography color="textSecondary">{merch.category}</Typography>
                                    <Typography variant="h5" fontWeight={700}>$ {merch.price}</Typography>
                                </Box>

                                {
                                    (merch.sizes && merch.sizeAbbreviations) &&
                                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                                        {
                                            merch.sizeAbbreviations.map((size: string) =>
                                            {
                                                return (
                                                    <Paper sx={{ padding: '5px' }}>
                                                        <Typography>{size.toUpperCase()}</Typography>
                                                    </Paper>   
                                                )
                                            })
                                        }
                                    </Box>
                                }
                            </Paper>
                        </Grid>
                    )
                })
            }
        </Grid>
    );
}
