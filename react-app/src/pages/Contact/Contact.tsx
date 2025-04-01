import React, { SyntheticEvent, useState } from "react";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { ContactTab } from "../../types/ContactTabs";
import Grid from '@mui/material/Grid2';
import { BookingRequest } from "./BookingRequest";
import { Mailto } from "../../components/Mailto";
import { theme } from "../../theme/theme";


type TabPanelProps =
{
    children?: React.ReactNode;
    index: number;
    value: number;
}


function TabPanel(props: TabPanelProps) 
{
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}
        >
            {
				value === index && 
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            }
        </div>
    );
}


export const Contact: React.FC = () => 
{
    const [tab, setTab] = useState<ContactTab>(ContactTab.Booking);


    const onTabChange = (event: SyntheticEvent, newTab: ContactTab): void => 
    {
        setTab(newTab);
    };


    return (
		<Grid container>
			<Grid size={12} spacing={3}>
				<Typography variant="h1" color="textPrimary">Contact Us</Typography>
			</Grid>

			<Grid size={12} className="centerAligned">
				<Grid size={12} className="centerAligned">
					<Tabs value={tab} onChange={onTabChange} aria-label="contact tabs" className="centerAligned">
						<Tab label="Booking" />
						<Tab label="Email" />
						<Tab label="Customer Service" />
					</Tabs>
				</Grid>

				<TabPanel value={tab} index={ContactTab.Booking}>
					<BookingRequest />
				</TabPanel>

				<TabPanel value={tab} index={ContactTab.Email}>
					<Typography variant="h2" sx={{ ...theme.typography.h5, paddingBottom: "10px" }}>For General Purposes:</Typography>
					<Mailto email="contact@stagefrightband.us">
						<Typography color="textPrimary" sx={{ marginBottom: "45px" }}>contact@stagefrightband.us</Typography>
					</Mailto>

					<Typography variant="h2" sx={{ ...theme.typography.h5, paddingBottom: "10px" }}>For Media Inqueries:</Typography>
					<Mailto email="media@stagefrightband.us">
						<Typography color="textPrimary" sx={{ marginBottom: "45px" }}>media@stagefrightband.us</Typography>
					</Mailto>

					<Typography variant="h2" sx={{ ...theme.typography.h5, paddingBottom: "10px" }}>For Booking-Related Purposes:</Typography>
					<Mailto email="booking@stagefrightband.us">
						<Typography color="textPrimary" sx={{ marginBottom: "45px" }}>booking@stagefrightband.us</Typography>
					</Mailto>
				</TabPanel>

				<TabPanel value={tab} index={ContactTab.CustomerService}>
					<Typography variant="body1" sx={{ maxWidth: '500px', marginBottom: '15px', textAlign: "center !important" }}>If you are having any problems with the website, ticket or merch perchasing, or anything else, feel free to reach out to use at</Typography>
					<Typography variant="body1">support@stagefrightband.us</Typography>
					<Typography variant="body1" sx={{ maxWidth: '500px', marginTop: '15px', textAlign: "center !important" }}>We will get back to you within at least 2 business days.</Typography>
				</TabPanel>
			</Grid>
		</Grid>
    );
};
