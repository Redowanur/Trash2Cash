import { useState, useEffect } from 'react';
import { FiSmartphone, FiRepeat, FiDollarSign, FiSun, FiMoon } from 'react-icons/fi';
import BannerImg from './assets/hero-image2.svg'

export default function LandingPage() {
  const [email, setEmail] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load theme preference from localStorage on initial load
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    setIsDarkMode(savedTheme === 'dark');
  }, []);

  // Toggle theme and save to localStorage
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', !isDarkMode ? 'dark' : 'light');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thanks for joining! We\'ll notify you when we launch.');
    setEmail('');
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode
        ? 'bg-gray-900 text-white'
        : 'bg-gradient-to-b from-green-50 to-white text-gray-800'
      }`}>
      {/* Navbar */}
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
                <FiSun className="w-6 h-6 text-yellow-400" />
              ) : (
                <FiMoon className="w-6 h-6 text-gray-600" />
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

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className={`text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-800'
              }`}>
              Turn Your Waste Into
              <span className={isDarkMode ? 'text-green-400' : 'text-green-600'}>
                Cash!
              </span>
            </h1>
            <p className={`text-xl mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
              Recycle pens, plastics, and e-waste to earn money.
              <br />
              আমাদের সাথে বর্জ্য ফেলুন, টাকা নিন!
            </p>
            <form onSubmit={handleSubmit} className="flex gap-4">
              <input
                type="email"
                placeholder="Enter email for early access"
                className={`px-6 py-3 rounded-full w-72 ${isDarkMode
                    ? 'bg-gray-700 border-gray-600 text-white'
                    : 'border-gray-300'
                  }`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className={`px-8 py-3 rounded-full ${isDarkMode
                    ? 'bg-green-600 hover:bg-green-700'
                    : 'bg-green-500 hover:bg-green-600'
                  } text-white`}
              >
                Get Started
              </button>
            </form>
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

      {/* How It Works Section */}
      <section id="how" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container mx-auto px-6">
          <h2 className={`text-3xl font-bold text-center mb-16 ${isDarkMode ? 'text-white' : 'text-gray-800'
            }`}>
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <FiSmartphone />, title: "1. Collect Waste", text: "Gather pens, plastics, or e-waste" },
              { icon: <FiRepeat />, title: "2. Visit Our Hub", text: "Find nearest drop point via app" },
              { icon: <FiDollarSign />, title: "3. Earn Rewards", text: "Get cash or vouchers instantly" },
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

      {/* Stats Section */}
      <section className={`py-16 text-white ${isDarkMode ? 'bg-green-700' : 'bg-green-600'
        }`}>
        <div className="container mx-auto px-6 grid md:grid-cols-3 text-center gap-8">
          <div>
            <div className="text-4xl font-bold mb-2">5000+</div>
            <div className="opacity-90">Pens Recycled</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">৳1M+</div>
            <div className="opacity-90">Paid to Users</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">50+</div>
            <div className="opacity-90">Drop Points</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-800'} text-white`}>
        <div className="container mx-auto px-6 text-center">
          <p>© 2024 Trash2Cash. All rights reserved</p>
          <p className={`mt-4 ${isDarkMode ? 'opacity-80' : 'opacity-75'
            }`}>
            পরিবেশ বাঁচান, টাকা কামান!
          </p>
        </div>
      </footer>

    </div>
  );
}