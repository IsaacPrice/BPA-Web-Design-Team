import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { BandMember } from "../types/BandMember";
import { BAND_MEMBER_DATA } from "../constants/bandMemberData";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import { IMAGE_PATH } from "../constants/imagePath";
import { AutoCarousel } from "../components/AutoCarousel";
import { isMobile } from "react-device-detect";

export const About: React.FC = () => {
  const getProperPath = (imagePath: string): string => {
    return IMAGE_PATH + imagePath + "_large.png";
  };

  return (
    <Grid container spacing={3} padding="15px">
      <Grid size={12}>
        <Typography variant="h1" color="textPrimary">
          About Us
        </Typography>
      </Grid>

      <Grid
        size={12}
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography sx={{ maxWidth: "800px" }}>
          Stage Fright started as a dream and evolved into a musical phenomenon.
          Combining talent, grit, and a little bit of luck, these four friends
          are chasing stardom one gig at a time.
        </Typography>
      </Grid>

      {BAND_MEMBER_DATA.map((member: BandMember) => (
        <Grid size={{ xs: 12, md: 6, lg: 3 }}>
          <Paper sx={{ padding: "15px" }}>
            <AutoCarousel>
              {member.images.map((imagePath: string) => (
                <Box
                  component="img"
                  src={getProperPath(imagePath)}
                  alt={member.name}
                  sx={{ width: "100%", backgroundColor: "#008fc4" }}
                />
              ))}
            </AutoCarousel>
            <Typography variant="h2" color="textPrimary">
              {member.name}
            </Typography>
            <Typography variant="h3" color="textPrimary">
              {member.role}
            </Typography>
            <Typography variant="body1" color="textPrimary">
              {member.bio}
            </Typography>
          </Paper>
        </Grid>
      ))}

      <Grid size={12}>
        <Typography variant="h3">Our Journey</Typography>
        <Timeline position={isMobile ? "right" : "alternate"}>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography variant="h5" marginBottom="15px">
                Rick Notices Mattias and Isaac
              </Typography>
              <Box sx={{ width: isMobile ? "300px" : "auto" }}>
                <Typography>
                  One fateful day, Rick, aspiring to lead a band, found himself
                  walking in silence after his earbuds died. But that silence
                  led him to a garage resonating with drumsand bass. Intrigued,
                  he followed the sound and knocked on the door, where Mattias
                  and Isaac were jamming out. That knock marked the start of
                  their journey as a band, uniting Rick’s vision with Mattias’
                  percussion skills and Isaac’s knack for creative basslines.
                </Typography>
              </Box>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography variant="h5" marginBottom="15px">
                Clark joins in
              </Typography>
              <Box sx={{ width: isMobile ? "300px" : "auto" }}>
                <Typography>
                  Clark, Mattias’ cousin, was in a rough spot when he first
                  picked up his guitar in the garage. Struggling with personal
                  challenges, he was invited by Mattias to join a session with
                  the band. That day, Rick discovered Clark’s raw talent and saw
                  the missing piece of their group. With music as his new
                  anchor, Clark overcame his struggles, adding fiery riffs to
                  the band’s sound and solidifying Stage Fright’s lineup.
                </Typography>
              </Box>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography variant="h5" marginBottom="15px">
                First Gig at The Rusty Kettle Café
              </Typography>
              <Box sx={{ width: isMobile ? "300px" : "auto" }}>
                <Typography>
                  The band’s first gig was at The Rusty Kettle Café in
                  Bloomington, inspired by Rick’s older brother, an IU student
                  who often raved about the café’s open mic nights. Knowing it
                  was a hotspot for local talent and a supportive crowd, Rick
                  convinced the band to give it a shot. Their raw energy and
                  passion lit up the small stage, marking the beginning of their
                  journey as Stage Fright.
                </Typography>
              </Box>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography variant="h5" marginBottom="15px">
                Released First Album
              </Typography>
              <Box sx={{ width: isMobile ? "300px" : "auto" }}>
                <Typography>
                  Stage Fright’s debut album, The Senior Year Blues, captures
                  the highs and lows of high school life with a raw, relatable
                  energy. Featuring standout tracks like “Math Class
                  Heartbreaks,” “Hall Pass to Nowhere,” and the nostalgic “The
                  Freshman Anthem,” the album channels the chaos, drama, and
                  dreams of their teenage years.
                </Typography>
              </Box>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Grid>

      <Grid size={12}>
        <Typography variant="h3" color="textPrimary">
          Fun Facts
        </Typography>

        <Box className="centerAligned" marginBottom="25px">
          <Typography variant="h5">Rick’s Dream to Perform</Typography>
          <Typography sx={{ maxWidth: "650px" }}>
            Rick used to perform impromptu concerts in his bedroom, using his
            shampoo bottle as a microphone, long before he knocked on Mattias
            and Isaac’s garage door.
          </Typography>
        </Box>

        <Box className="centerAligned" marginBottom="25px">
          <Typography variant="h5">Mattias’ Stage Fright Victory</Typography>
          <Typography sx={{ maxWidth: "650px" }}>
            Despite being the shyest member, Mattias once refused to play a solo
            in front of a crowd, but now he’s known for his electrifying drum
            solos that get the crowd roaring.
          </Typography>
        </Box>

        <Box className="centerAligned" marginBottom="25px">
          <Typography variant="h5">Clark’s Guitar Obsession</Typography>
          <Typography sx={{ maxWidth: "650px" }}>
            Clark’s first guitar was a secondhand acoustic he bought at a pawn
            shop for $40, and he still plays it on a few of the band’s songs as
            a tribute to where it all started.
          </Typography>
        </Box>

        <Box className="centerAligned" marginBottom="25px">
          <Typography variant="h5">The Band's Name Origins</Typography>
          <Typography sx={{ maxWidth: "650px" }}>
            The name Stage Fright came from Mattias’ initial fear of performing,
            but it eventually became a symbol of the band’s evolution from
            nervous newcomers to confident performers.
          </Typography>
        </Box>

        <Box className="centerAligned" marginBottom="25px">
          <Typography variant="h5">First Tour Memories</Typography>
          <Typography sx={{ maxWidth: "650px" }}>
            The band’s first “tour” was a two-week road trip across Indiana,
            packed into a cramped van, surviving on fast food and caffeine, with
            zero hotel bookings—just a handful of friends and a dream.
          </Typography>
        </Box>

        <Box className="centerAligned" marginBottom="25px">
          <Typography variant="h5">Isaac’s Composition Secrets</Typography>
          <Typography sx={{ maxWidth: "650px" }}>
            Isaac’s favorite songwriting technique is coming up with the
            bassline first, then building the rest of the track around it.
          </Typography>
        </Box>

        <Box className="centerAligned" marginBottom="25px">
          <Typography variant="h5">The Garage Sessions</Typography>
          <Typography sx={{ maxWidth: "650px" }}>
            The band's earliest practice sessions were held in Mattias’ garage,
            with the windows wide open and neighbors often stopping by to join
            in or catch a few songs.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};
