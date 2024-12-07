import React from "react";
import { Box, Link, Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { BandMember } from "../types/BandMember";
import { BAND_MEMBER_DATA } from "../constants/bandMemberData";
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from "@mui/lab";
import { Carousel } from "../components/Carousel";
import { IMAGE_PATH } from "../constants/imagePath";


export const About: React.FC = () => 
{
    const getProperPath = (imagePath: string): string =>
    {
        if (imagePath.includes('1'))
        {
            return IMAGE_PATH + imagePath + "_large.png";
        }
        return IMAGE_PATH + imagePath + "_large.jpg";
    }


    return (
        <Grid container spacing={3} padding="15px">
            <Grid size={12}>
                <Typography variant="h1" color="textPrimary">About Us</Typography>
            </Grid>

            <Grid size={12}>
                <Typography>Short 2 sentence description of the band here</Typography>
                <Typography>Stage Fright started as a dream and evolved into a musical phenomenon. Combining talent, grit, and a little bit of luck, these four friends are chasing stardom one gig at a time.</Typography>
            </Grid>

            {
                BAND_MEMBER_DATA.map((member: BandMember) => 
                    <Grid size={{ xs: 12, md: 6, lg: 3 }}>
                        <Paper sx={{ padding: '15px' }}>
                            <Carousel>
                                {
                                    member.images.map((imagePath: string) => 
                                        <Box 
                                            component="img"
                                            src={getProperPath(imagePath)}
                                            alt={member.name}
                                            sx={{ width: '100%', backgroundColor: '#008fc4' }} />
                                    )
                                }
                            </Carousel>
                            <Typography variant="h2" color="textPrimary">{member.name}</Typography>
                            <Typography variant="h3" color="textPrimary">{member.role}</Typography>
                            <Typography variant="body1" color="textPrimary">{member.bio}</Typography>
                        </Paper>
                    </Grid>
                )
            }

            <Grid size={12}>
                <Typography variant="h3">Our Journey</Typography>
                <Timeline position="alternate">
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                            <Typography variant="h5" marginBottom="15px">Rick notices us</Typography>
                            <Box sx={{ width: '450px', height: '200px', backgroundColor: '#aaaaaa' }}>
                                <Typography>More information here</Typography>
                            </Box>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'end' }}>
                            <Typography variant="h5" marginBottom="15px">Clark joins in</Typography>
                            <Box sx={{ width: '450px', height: '200px', backgroundColor: '#aaaaaa' }}>
                                <Typography>More information here</Typography>
                            </Box>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                            <Typography variant="h5" marginBottom="15px">First gig at [somewhere]</Typography>
                            <Box sx={{ width: '450px', height: '200px', backgroundColor: '#aaaaaa' }}>
                                <Typography>More information here</Typography>
                            </Box>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                        <TimelineDot />
                        </TimelineSeparator>
                        <TimelineContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'end' }}>
                            <Typography variant="h5" marginBottom="15px">Released first album</Typography>
                            <Box sx={{ width: '450px', height: '200px', backgroundColor: '#aaaaaa' }}>
                                <Typography>More information here</Typography>
                            </Box>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </Grid>

            <Grid size={12}>
                <Typography variant="h3" color="textPrimary">Fun Facts</Typography>
                <Typography>The idea behind naming the band "Stage Fright" came from mattias' stage fright</Typography>
                <Typography>More facts here</Typography>
            </Grid>
        </Grid>
    );
}
