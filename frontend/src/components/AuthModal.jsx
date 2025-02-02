import { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";

const AuthModal = ({ onClose }) => {
    const [isSignIn, setIsSignIn] = useState(true);
    const { isDarkMode } = useTheme();

    return (
        <div
            className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm"
            onClick={onClose} // Close modal when clicking outside
        >
            {/* Modal content */}
            <div
                className={`p-8 rounded-xl w-96 relative z-10 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
            >
                <h2 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                    {isSignIn ? 'Sign In' : 'Sign Up'}
                </h2>

                <form className="space-y-4">
                    {!isSignIn && (
                        <input
                            type="text"
                            placeholder="Full Name"
                            className={`w-full p-3 rounded-lg ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-100'}`}
                        />
                    )}
                    <input
                        type="email"
                        placeholder="Email"
                        className={`w-full p-3 rounded-lg ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-100'}`}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className={`w-full p-3 rounded-lg ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-100'}`}
                    />

                    <button
                        type="submit"
                        className={`w-full py-3 rounded-lg ${isDarkMode
                            ? 'bg-green-600 hover:bg-green-700'
                            : 'bg-green-500 hover:bg-green-600'} text-white`}
                    >
                        {isSignIn ? 'Sign In' : 'Sign Up'}
                    </button>
                </form>

                <p className={`mt-4 text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {isSignIn ? (
                        <>Don't have an account?{' '}
                            <button
                                onClick={() => setIsSignIn(false)}
                                className="text-green-500 hover:underline"
                            >
                                Sign Up
                            </button></>
                    ) : (
                        <>Already have an account?{' '}
                            <button
                                onClick={() => setIsSignIn(true)}
                                className="text-green-500 hover:underline"
                            >
                                Sign In
                            </button></>
                    )}
                </p>
            </div>
        </div>
    );
};

export default AuthModal;