import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { DonationProvider } from './contexts/DonationContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { ToastContainer } from 'react-toastify';
import { AnimatePresence } from 'framer-motion';
import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Donate from './pages/Donate';
import Campaign from './pages/Campaign';
import Contact from './pages/Contact';
import 'react-toastify/dist/ReactToastify.css';

function AppContent() {
	const location = useLocation();

	return (
		<div className="min-h-screen bg-gray-50 dark:bg-dark-bg transition-colors">
			<Navbar />
			<AnimatePresence mode="wait">
				<Routes location={location} key={location.pathname}>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/donate" element={<Donate />} />
					<Route path="/campaign" element={<Campaign />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</AnimatePresence>
			<Footer />
			<ToastContainer
				position="bottom-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="colored"
			/>
		</div>
	);
}

function App() {
	return (
		<ErrorBoundary>
			<ThemeProvider>
				<DonationProvider>
					<Router>
						<ScrollToTop />
						<AppContent />
					</Router>
				</DonationProvider>
			</ThemeProvider>
		</ErrorBoundary>
	);
}

export default App;
