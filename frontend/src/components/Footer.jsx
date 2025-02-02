import { useTheme } from "../contexts/ThemeContext";

const Footer = () => {
    const { isDarkMode } = useTheme();

    return (
        <footer className={`py-12 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-800'} text-white`}>
            <div className="container mx-auto px-6 text-center">
                <p>© 2024 Trash2Cash. All rights reserved</p>
                <p className={`mt-4 ${isDarkMode ? 'opacity-80' : 'opacity-75'
                    }`}>
                    পরিবেশ বাঁচান, টাকা কামান!
                </p>
            </div>
        </footer>
    )
}

export default Footer