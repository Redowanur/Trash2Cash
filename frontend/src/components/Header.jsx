import { useState } from 'react';
import { SunIcon, MoonIcon, GlobeAltIcon } from "@heroicons/react/24/solid";
import { useTheme } from "../contexts/ThemeContext"
import AuthModal from './AuthModal';

const Header = () => {
    const { isDarkMode, toggleTheme } = useTheme();
    const [showAuthModal, setShowAuthModal] = useState(false);
    const [language, setLanguage] = useState('en');

    return (
        <>
            <nav className={`p-6 shadow-md ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className={`text-2xl font-bold ${isDarkMode ? 'text-green-400' : 'text-green-600'}`}>
                        Trash2Cash
                    </h1>

                    <div className="flex items-center gap-6">
                        {/* Language Selector */}
                        <div className={`relative h-12 flex items-center rounded-lg ${isDarkMode
                            ? 'bg-gray-700 text-white'
                            : 'bg-gray-100 text-gray-800'
                            }`}
                        >
                            <GlobeAltIcon className="w-5 h-5 mx-3" />
                            <select
                                value={language}
                                onChange={(e) => setLanguage(e.target.value)}
                                className={`outline-none appearance-none bg-transparent py-2 pr-8 pl-2 rounded-lg cursor-pointer ${
                                    isDarkMode ? 'text-white' : 'text-gray-800'
                                }`}
                            >
                                <option value="en">English</option>
                                <option value="bn">বাংলা</option>
                            </select>
                            {/* Custom Dropdown Arrow */}
                            <div className={`absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none ${
                                isDarkMode ? 'text-gray-400' : 'text-gray-600'
                            }`}>
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </div>
                        </div>

                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-opacity-20 hover:bg-gray-500"
                        >
                            {isDarkMode ? (
                                <SunIcon className="w-6 h-6 text-yellow-400" />
                            ) : (
                                <MoonIcon className="w-6 h-6 text-gray-600" />
                            )}
                        </button>

                        {/* Login Button */}
                        <div className="flex items-center gap-6">
                            <button
                                onClick={() => setShowAuthModal(true)}
                                className={`px-4 py-2 rounded-full ${isDarkMode
                                    ? 'bg-green-600 hover:bg-green-700'
                                    : 'bg-green-500 hover:bg-green-600'
                                    } text-white`}
                            >
                                Log In
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Auth Modal */}
            {showAuthModal && (
                <AuthModal onClose={() => setShowAuthModal(false)} />
            )}
        </>
    );
};

export default Header;