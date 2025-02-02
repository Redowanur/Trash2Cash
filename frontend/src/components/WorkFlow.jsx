import { FaceFrownIcon, FaceSmileIcon, HomeIcon } from '@heroicons/react/24/solid';
import { useTheme } from '../contexts/ThemeContext';

const WorkFlow = () => {
    const { isDarkMode } = useTheme();

    return (
        <section id="how" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="container mx-auto px-6">
                <h2 className={`text-3xl font-bold text-center mb-16 ${isDarkMode ? 'text-white' : 'text-gray-800'
                    }`}>
                    How It Works
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { icon: <FaceFrownIcon className='w-6' />, title: "1. Collect Waste", text: "Gather pens, plastics, or e-waste" },
                        { icon: <FaceSmileIcon className='w-6' />, title: "2. Visit Our Hub", text: "Find nearest drop point via app" },
                        { icon: <HomeIcon className='w-6' />, title: "3. Earn Rewards", text: "Get cash or vouchers instantly" },
                    ].map((step, i) => (
                        <div key={i} className={`p-6 rounded-xl transition ${isDarkMode
                            ? 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                            : 'bg-green-50 hover:shadow-md text-gray-600'
                            }`}>
                            <div className={`text-4xl mb-4 ${isDarkMode ? 'text-green-400' : 'text-green-500'
                                }`}>
                                {step.icon}
                            </div>
                            <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'
                                }`}>
                                {step.title}
                            </h3>
                            <p>{step.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    )
}

export default WorkFlow