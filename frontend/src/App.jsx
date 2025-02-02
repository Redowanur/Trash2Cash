import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import { useTheme } from './contexts/ThemeContext';

export default function App() {
	const { isDarkMode } = useTheme();

	return (
		<div className={`min-h-screen transition-colors duration-300 ${isDarkMode
			? 'bg-gray-900 text-white'
			: 'bg-gradient-to-b from-green-50 to-white text-gray-800'
			}`}>
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
}