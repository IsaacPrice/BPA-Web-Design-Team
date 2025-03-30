import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid2";
import { useParams } from "react-router-dom";
import { Tour } from "../../types/Tour";
import { TOUR_DATA } from "../../constants/tourData";
import { Box, Link, Paper, Typography } from "@mui/material";
import { Carousel } from "../../components/Carousel";
import { ReturnPolicyDialog } from "../../components/ReturnPolicy";
import { CreditedImage } from "../../types/CreditedImage";
import { IMAGE_PATH } from "../../constants/imagePath";
import PayPalCheckout from "../../components/PayPalCheckout";

export const TourDetails: React.FC = () => {
  const [tour, setTour] = useState<Tour | undefined>(undefined);
  const [isReturnPolicyOpen, setIsReturnPolicyOpen] = useState<boolean>(false);
  const { tourName } = useParams();

  useEffect(() => {
    if (tourName !== undefined) {
      setTour(TOUR_DATA.find((value: Tour) => value.linkName === tourName));
    }
  }, [tourName]);

  const onOpenReturnPolicy = (): void => {
    setIsReturnPolicyOpen(true);
  };

  const onCloseReturnPolicy = (): void => {
    setIsReturnPolicyOpen(false);
  };

  const calculateAvailableTickets = (tour: Tour): number => {
    return Math.round(
      ((tour.date.getTime() - new Date().getTime()) /
        (tour.date.getTime() - new Date("4-1-2025").getTime())) *
        tour.availibleTickets!
    );
  };

  return (
    <>
      {tour && (
        <Grid container spacing={3} paddingTop="15px">
          <Grid size={{ xs: 12, md: 6 }}>
            <Carousel>
              {tour.images.map((image: CreditedImage) => (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "10px",
                  }}
                >
                  <Box
                    component="img"
                    src={IMAGE_PATH + image.path + "_large.jpg"}
                    alt={tour.name}
                    sx={{ width: "100%", borderRadius: "3px" }}
                  />

                  <Link fontSize=".66rem" href={image.link}>
                    {image.creditText}
                  </Link>
                </Box>
              ))}
            </Carousel>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Grid container spacing={3}>
              <Grid size={12}>
                <Typography variant="h1">{tour.name}</Typography>
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <Paper sx={{ padding: "15px" }}>
                  <Typography variant="h3">Details</Typography>
                  <Typography>{tour.address}</Typography>
                  <Typography>{tour.location}</Typography>
                  <Typography>{tour.date.toLocaleDateString()}</Typography>
                  <Typography>
                    {tour.startTime} to {tour.endTime}
                  </Typography>
                  <Typography>{tour.description}</Typography>
                </Paper>
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <Paper sx={{ padding: "15px" }}>
                  {tour.availibleTickets && (
                    <>
                      <Typography variant="h4" fontWeight={700}>
                        $ {tour.ticketPrice}
                      </Typography>
                      <Typography fontWeight="700" margin="15px 0">
                        {calculateAvailableTickets(tour)} tickets left
                      </Typography>
                    </>
                  )}

                  <Box className="centerAlignedRow" marginBottom="10px">
                    <PayPalCheckout productId="1" price={tour.ticketPrice} />
                  </Box>

                  <Typography>
                    <Link onClick={onOpenReturnPolicy}>Return Policy</Link>
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}

      <ReturnPolicyDialog
        open={isReturnPolicyOpen}
        onClose={onCloseReturnPolicy}
      />
    </>
  );
};
