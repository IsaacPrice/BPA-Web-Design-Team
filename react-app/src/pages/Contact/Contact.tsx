import React, { SyntheticEvent, useState } from "react";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { ContactTab } from "../../types/ContactTabs";
import Grid from '@mui/material/Grid2';
import { BookingRequest } from "./BookingRequest";


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
					<Tabs value={tab} onChange={onTabChange} aria-label="contact tabs">
						<Tab label="Booking" />
						<Tab label="Email" />
						<Tab label="Customer Service" />
					</Tabs>
				</Grid>

				<TabPanel value={tab} index={ContactTab.Booking}>
					<BookingRequest />
				</TabPanel>

				<TabPanel value={tab} index={ContactTab.Email}>
					<Typography variant="h5" sx={{ paddingBottom: "10px" }}>For General Purposes:</Typography>
					<Typography color="textPrimary" sx={{ marginBottom: "45px" }}>contact@stagefrightband.com</Typography>

					<Typography variant="h5" sx={{ paddingBottom: "10px" }}>For Media Inqueries:</Typography>
					<Typography color="textPrimary" sx={{ marginBottom: "45px" }}>media@stagefrightband.com</Typography>

					<Typography variant="h5" sx={{ paddingBottom: "10px" }}>For Booking-Related Purposes:</Typography>
					<Typography color="textPrimary" sx={{ marginBottom: "45px" }}>booking@stagefrightband.com</Typography>
				</TabPanel>

				<TabPanel value={tab} index={ContactTab.CustomerService}>
					<Typography variant="body1" sx={{ maxWidth: '500px' }}>If you are having any problems with the website, ticket or merch perchasing, or anything else, feel free to reach out to use at</Typography>
					<Typography variant="body1" color="textPrimary">support@stagefrightband.com</Typography>
					<Typography variant="body1" sx={{ maxWidth: '500px' }}>We will get back to you within at least 2 business days.</Typography>
				</TabPanel>
			</Grid>
		</Grid>
    );
};
