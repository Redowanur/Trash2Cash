import { useTheme } from '../contexts/ThemeContext';
import BannerImg from './../assets/hero-image2.svg'
import { PlayIcon } from '@heroicons/react/24/solid';

const HeroSection = () => {
    const { isDarkMode } = useTheme();

    return (
        <section className="container mx-auto px-6 py-20">
            <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2">
                    <h1 className={`text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-800'
                        }`}>
                        Turn Your Trash Into{'\u00A0'}
                        <span className={isDarkMode ? 'text-green-400' : 'text-green-600'}>
                            Cash!
                        </span>
                    </h1>
                    <p className={`text-xl mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                        Help us recycle your waste and earn rewards
                    </p>
                    <div className="flex gap-4">
                        <button
                            type="submit"
                            className={`px-8 py-3 rounded-full ${isDarkMode
                                ? 'bg-green-600 hover:bg-green-700'
                                : 'bg-green-500 hover:bg-green-600'
                                } text-white`}
                        >
                            Get Started
                        </button>
                        <button
                            className={`flex gap-3 px-8 py-3 rounded-full border ${isDarkMode
                                ? 'border-green-400 text-green-400 hover:bg-green-900'
                                : 'border-green-600 text-green-600 hover:bg-green-50'
                                }`}
                        >
                            <PlayIcon className='w-6'/>
                            Watch Video
                        </button>
                    </div>
                </div>
                <div className="md:w-1/2 mt-12 md:mt-0">
                    <div className={`p-8 rounded-2xl shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-green-100'
                        }`}>
                        <img
                            src={BannerImg}
                            alt="App Preview"
                            className="w-full h-auto animate-float"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection