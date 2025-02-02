import { useTheme } from "../contexts/ThemeContext";

const Stats = () => {
    const { isDarkMode } = useTheme();

    return (
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
    )
}

export default Stats