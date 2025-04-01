import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from './pages/NavBar';
import { theme } from './theme/theme';
import { Footer } from './pages/Footer';
import { Home } from './pages/Home';
import { Tours } from './pages/Tour/Tours';
import { MerchPage } from './pages/Merch/Merch';
import { Contact } from './pages/Contact/Contact';
import { About } from './pages/About';
import { MerchItemPage } from './pages/Merch/MerchItem';
import { TourDetails } from './pages/Tour/TourDetails';


function App() 
{
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<NavBar />
				<Footer>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/tours" element={<Tours />} />
                        <Route path="/merch" element={<MerchPage />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/merch/:merchName" element={<MerchItemPage />} />
                        <Route path="/tour/:tourName" element={<TourDetails />} />
                    </Routes>
				</Footer>
			</BrowserRouter>
		</ThemeProvider>
	);
}


export default App;
