import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './pages/Home';
import { NavBar } from './pages/NavBar';
import { theme } from './theme/theme';
import { Tours } from './pages/Tours';
import { Merch } from './pages/Merch';
import { Contact } from './pages/Contact';
import { About } from './pages/About';


function App() 
{
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/merch" element={<Merch />} />
					<Route path="/tours" element={<Tours />} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
}


export default App;