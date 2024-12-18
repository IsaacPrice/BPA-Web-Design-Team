import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './pages/Home';
import { NavBar } from './pages/NavBar';
import { theme } from './theme/theme';
import { Tours } from './pages/Tour/Tours';
import { MerchPage } from './pages/Merch/Merch';
import { Contact } from './pages/Contact/Contact';
import { About } from './pages/About';
import { MerchItemPage } from './pages/Merch/MerchItem';
import { TourDetails } from './pages/Tour/TourDetails';
import { Footer } from './pages/Footer';


function App() 
{
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter basename='BPA-Web-Design-Team'>
				<NavBar />
				<Footer>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/merch" element={<MerchPage />} />
						<Route path="/merch/:merchName" element={<MerchItemPage />} />
						<Route path="/tours" element={<Tours />} />
						<Route path="/tours/:tourName" element={<TourDetails />} />
					</Routes>
				</Footer>
			</BrowserRouter>
		</ThemeProvider>
	);
}


export default App;