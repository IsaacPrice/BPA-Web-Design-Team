import React from "react";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";


const footerStyle: React.CSSProperties = 
{
    marginTop: '2rem',
    backgroundColor: '#008fc4',
    color: 'white',
    padding: '2rem',
    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.33)',
}


export const Footer: React.FC<{ children: React.ReactNode }> = ({ children }) =>
{
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Box style={{ flex: 1 }}>
                {children}
            </Box>

            <footer style={footerStyle}>
                <Grid container spacing={3}>
                    <Grid size={{ xs: 12, md: 2 }}>
                        <Typography>Warsaw Area Career Center</Typography>
                        <Typography>Warsaw, IN, 2024</Typography>
                    </Grid>

                    <Grid size={{ xs: 12, md: 4 }}>
                        <Typography>Isaac Price - 97946 - Lead Web Developer & Coordinator</Typography>
                        <Typography>Mattias Niebbia - 133023 - Creative Director & Photographer</Typography>
                        <Typography>Clark Meridew - 133013 - Lead Media Editor & Assistant Web Developer</Typography>
                        <Typography>Rick Orr - 97941 - Lead Merchandice Designer</Typography>
                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography>© 2024 Stage Fright. All Rights Reserved.</Typography>
                        <Typography>This website is provided as-is. The content is free to use, and the site owner holds no liability for its usage.</Typography>
                        <Typography>This site does not collect or store personal data.</Typography>
                        <Typography>contact@stagefrightband.us</Typography>
                        <Typography>(574) 377-2752</Typography>
                    </Grid>
                </Grid>
            </footer>
        </Box>
    );
}