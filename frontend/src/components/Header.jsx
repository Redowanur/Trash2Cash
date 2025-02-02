import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { useTheme } from "../contexts/ThemeContext"

const Header = () => {
    const {isDarkMode, toggleTheme} = useTheme();

    return (
        <nav className={`p-6 shadow-md ${isDarkMode ? 'bg-gray-800' : 'bg-white'
            }`}>
            <div className="container mx-auto flex justify-between items-center">
                <h1 className={`text-2xl font-bold ${isDarkMode ? 'text-green-400' : 'text-green-600'
                    }`}>
                    Trash2Cash
                </h1>

                <div className="flex items-center gap-6">
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

                    <div className="flex items-center gap-6">
                        <a href="#how" className={`hover:${isDarkMode ? 'text-green-400' : 'text-green-600'
                            }`}>
                            How It Works
                        </a>
                        <a href="#rewards" className={`hover:${isDarkMode ? 'text-green-400' : 'text-green-600'
                            }`}>
                            Rewards
                        </a>
                        <button className={`px-4 py-2 rounded-full ${isDarkMode
                            ? 'bg-green-600 hover:bg-green-700'
                            : 'bg-green-500 hover:bg-green-600'
                            } text-white`}>
                            Download App
                        </button>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Header